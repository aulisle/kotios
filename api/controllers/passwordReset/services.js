/**
 * This file defines utility functions for the password reset
 * functionality.
 */

import UserModel from '../../models/app/user'
import Logger from '../../../plugins/logger'
import moment from 'moment'

// Defines how long a password reset token is
// valid for
const PASSWORD_RESET_TOKEN_DAYS = 30

/**
 * Creates a new password reset token
 */
export const createResetToken = () => {
  const expirationDate = moment().add(PASSWORD_RESET_TOKEN_DAYS, 'days')
  return { expiresAt: expirationDate.toDate() }
}

/**
 * Filters out inactive password reset tokens
 *
 * @param {User} user UserModel result instance
 */
export const filterInactiveTokens = user => {
  const now = moment()
  // Filter out tokens that have expired
  return user.passwordResetTokens.filter(token => {
    return moment(token.expiresAt).diff(now) >= 0
  })
}

/**
 * Finds the user with a specific password reset token
 * @param {String} tokenId The ID of a password reset token
 */
export const userWithResetPasswordToken = tokenId => {
  return UserModel.findOne({
    passwordResetTokens: {
      $elemMatch: { _id: tokenId }
    }
  })
    .select('+passwordResetTokens')
    .exec()
    .catch(() => {
      return false
    })
}

/**
 * Validates whether a reset token is useable and return
 * additional information, such as the user, if the token is
 * valid
 *
 * @param {String} tokenId The user given token
 */
export const validateResetToken = async tokenId => {
  let user = null
  // Find the user that has that specific reset ID
  try {
    user = await userWithResetPasswordToken(tokenId)
  } catch (e) {
    Logger.error(`Error finding user with pwreset token: ${JSON.stringify(e)}`)
    return { invalid: true }
  }

  if (!user) {
    // If no user had the reset ID, send error
    return { invalid: true }
  }

  const activeResetTokens = filterInactiveTokens(user)

  // Find the user-provided token from the active tokens
  const tokenIndex = activeResetTokens.findIndex(token => {
    return token._id.toString() === tokenId
  })

  if (tokenIndex === -1) {
    // If the token had expired, reply with an error
    return { user, activeResetTokens, tokenIndex, invalid: true }
  }

  return {
    user,
    activeResetTokens,
    tokenIndex,
    invalid: false
  }
}

/**
 * Finds a user and adds a reset password token to them
 *
 * @param {Object} query A mongoose query for finding the user
 */
export const addResetTokenToUser = query => {
  const token = createResetToken()

  return UserModel.findOneAndUpdate(
    query,
    {
      $push: { passwordResetTokens: token }
    },
    { new: true }
  )
    .select('+passwordResetTokens')
    .exec()
    .then(user => {
      if (!user) {
        return {
          token: false,
          user: false
        }
      }

      // If adding the token to the user's data succeeded,
      // return the new token
      const newToken = user.passwordResetTokens.slice(-1)[0]

      if (!newToken) {
        throw Error('Did not create a new token!')
      }

      return {
        token: newToken,
        user
      }
    })
}
