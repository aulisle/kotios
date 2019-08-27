/**
 * This file defines the controller for the password resetting API endpoint
 */

import emailer from '../../emailer'
import validator from 'validator'
import { validateResetToken, addResetTokenToUser } from './services'
import passwordCheck from '../../utils/passwordCheck'

/**
 * Cleans up expired reset password tokens from a user
 *
 * @param {Object} verificationRes A reset password token verification result
 */
const cleanUpExpiredTokens = verificationRes => {
  const { activeResetTokens, user, tokenIndex } = verificationRes

  if (!activeResetTokens || !user) {
    // If no active reset tokens or user not found, just return
    return
  }

  // Remove the used token
  if (tokenIndex !== -1) {
    activeResetTokens.splice(tokenIndex, 1)
  }

  // Update the user
  user.passwordResetTokens = activeResetTokens
}

/**
 * Handles a password change for a user
 *
 * @param {Object} verificationRes  A reset password token verification result
 * @param {String} password The new password
 * @param {Response} res The response object
 */
const handlePasswordChange = async (verificationRes, password, res) => {
  const { user } = verificationRes
  cleanUpExpiredTokens(verificationRes)

  user.password = password
  user.canLocalLogin = true
  user.isVerified = true

  try {
    await user.save()
  } catch (e) {
    // eslint-disable-next-line
    console.log('ERROR', e)
    res.sendStatus(e.code || 500)
  }

  res.sendStatus(200)
}

/**
 * Handles an activation for a user
 *
 * @param {Object} verificationRes  A reset password token verification result
 * @param {Response} res The response object
 */
const handleActivation = async (verificationRes, res) => {
  const { user } = verificationRes

  cleanUpExpiredTokens(verificationRes)

  user.isVerified = true

  try {
    await user.save()
  } catch (e) {
    // eslint-disable-next-line
    console.log('ERROR SAVING USER', e)
    res.sendStatus(e.code || 500)
  }

  res.sendStatus(200)
}

/**
 * Handles a failed password reset with a token
 *
 * @param {Object} verificationRes A reset password token verification result
 * @param {Response} res The response object
 */
const handleInvalidResetToken = async (verificationRes, res) => {
  cleanUpExpiredTokens(verificationRes)

  // If the user could not be resolved, the cleanup
  // cannot be continued
  return res.status(401).json({
    message: 'The password reset token is not valid'
  })
}

const controller = {
  /**
   * Returns whether a password reset token is valid
   */
  isValidToken: async (req, res) => {
    const { tokenId } = req.params

    const verificationRes = await validateResetToken(tokenId)

    if (verificationRes.invalid || !verificationRes) {
      return res.status(200).json({ isValid: false, isActivated: null })
    }

    res.status(200).json({
      isValid: verificationRes.tokenIndex !== -1,
      isActivated: verificationRes.user.isVerified
    })
  },

  /**
   * Sends a password reset token to the user's if
   * the user has already verified their email
   */
  requestReset: async (req, res) => {
    const { email } = req.body
    if (!email || !validator.isEmail(email)) {
      return res.status(422).json({
        message: 'Please enter a valid email'
      })
    }

    // Create and add a new password reset token
    // to the user with the email and that has
    // already validated themselves
    addResetTokenToUser({
      email,
      isVerified: true
    }).then(({ token, user }) => {
      emailer.sendResetToken(user.email, token)
    })

    res.sendStatus(200)
  },

  /**
   * Sends another invitation to a user, if the
   * user has not yet verified their email.
   */
  resendInvitation: async (req, res) => {
    const { userId } = req.body
    addResetTokenToUser({
      _id: userId,
      isVerified: false
    })
      .then(({ token, user }) => {
        emailer.sendInvitation(user.email, token)
        res.sendStatus(200)
      })
      .catch(() => {
        res.sendStatus(404)
      })
  },

  /**
   * Resets the user's password with a new one, if the
   * password reset token is valid
   */
  reset: async (req, res) => {
    const { tokenId, password, passwordAgain } = req.body

    if (password !== passwordAgain) {
      return res.status(400).json({
        message: 'The password verification does not match the password.'
      })
    }

    if (!passwordCheck(password)) {
      return res.status(413).json({
        message: 'The new password is not strong enough.'
      })
    }

    return validateResetToken(tokenId)
      .then(verificationRes => {
        return verificationRes.invalid
          ? handleInvalidResetToken(verificationRes, res)
          : handlePasswordChange(verificationRes, password, res)
      })
      .catch(err => {
        res.status(err.code || 500).json(err)
      })
  },

  activate: async (req, res) => {
    const { tokenId } = req.body

    return validateResetToken(tokenId)
      .then(verificationRes => {
        if (verificationRes.invalid) {
          return handleInvalidResetToken(verificationRes, res)
        } else {
          return handleActivation(verificationRes, res)
        }
      })
      .catch(err => {
        // eslint-disable-next-line
        console.log('ERR', err)
        res.status(err.code || 500).json(err)
      })
  }
}

export default controller
