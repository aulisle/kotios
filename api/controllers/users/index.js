/**
 * This file defines the controller for the user-API endpoint
 */

import { default as UserModel, allFields } from '../../models/app/user'
import validator from 'validator'
import { createResetToken } from '../passwordReset/services'
import emailer from '../../emailer'
import passwordCheck from '../../utils/passwordCheck'
import paginate from '../../utils/paginate'
import { default as storage, s3, bucket } from '../../middleware/storage'
import Logger from '../../../plugins/logger'
import { createLocalUser } from '../../models/app/user.create'

const invalidEmail = res => {
  return res.status(422).json({ message: 'Please enter a valid email' })
}

const emailAlreadyExists = res => {
  return res.status(409).json({ message: 'Email already exists!' })
}

const handleUpdateError = (err, res) => {
  if (err.code === 11000) {
    return emailAlreadyExists(res)
  }

  return res.status(err.code || 500).json(err)
}

/**
 * Return false for error, true for success.
 * @param {*} password
 * @param {*} passwordAgain
 */
const validatePasswords = (password, passwordAgain, res) => {
  if (password && password !== '') {
    if (password !== passwordAgain) {
      res.status(400).json({
        message: 'The password verification does not match the password.'
      })

      return false
    }

    if (!passwordCheck(password)) {
      res.status(413).json({
        message: 'The new password is not strong enough.'
      })
      return false
    }
  } else {
    res.sendStatus(422)
    return false
  }

  return true
}

/**
 * Deletes a picture from the S3 storage
 *
 * @param {*} pic S3 key for the picture
 */
const deletePic = pic => {
  s3.deleteObject({
    Bucket: bucket,
    Key: pic
  })
    .promise()
    .catch(e => {
      Logger.error(`COULD NOT DELETE IMAGE ${JSON.stringify(e)}`)
    })
}

const controller = {
  current: {
    /**
     * Get logged in user data
     */
    get: (req, res) => {
      res.json(req.user)
    },

    /**
     * Update logged in user data
     */
    update: (req, res) => {
      const { password, passwordAgain, oldPassword } = req.body

      if (password) {
        const valid = validatePasswords(password, passwordAgain, res)

        if (!valid) {
          return
        }
      }

      UserModel.findById(req.user._id)
        .select(allFields)
        .exec()
        .then(async user => {
          if (password) {
            const match = await user.passwordMatches(oldPassword)

            if (!match) {
              res
                .status(403)
                .json({ message: 'The old password is not correct!' })
              return null
            }

            user.password = password
            user.canLocalLogin = true
          }

          return user.save()
        })
        .then(user => {
          if (user) {
            delete user.password
            return res.json(user)
          }
        })
        .catch(err => {
          return handleUpdateError(err, res)
        })
    },

    /**
     * Uploads the user's picture and sets it to the user.
     */
    uploadPic: async (req, res) => {
      storage.upload.single('image')(req, res, async err => {
        if (err) {
          if (err.code === 'LIMIT_FILE_SIZE') {
            return res.status(413).json(err)
          }

          return res.status(422).json(err)
        }

        const user = await UserModel.findById(req.user._id)
          .select('+picKey')
          .exec()
        const oldPic = user.picKey

        if (!req.file || !req.file.location || !req.file.key) {
          return res.status(422).json({ error: 'Could not save file!' })
        }

        user.pic = req.file.location
        user.picKey = req.file.key

        return user
          .save()
          .then(() => {
            if (oldPic) {
              return deletePic(oldPic)
            }

            return true
          })
          .then(() => {
            res.status(200).json({ url: req.file.location })
          })
          .catch(e => {
            return handleUpdateError(e, res)
          })
      })
    }
  },

  /**
   * Creates a new user
   */
  create: (req, res) => {
    const { email, firstName, lastName, password, passwordAgain } = req.body

    if (!email || !validator.isEmail(email)) {
      return invalidEmail(res)
    }

    const valid = validatePasswords(password, passwordAgain, res)

    if (!valid) {
      return
    }

    const token = createResetToken()

    const user = createLocalUser({
      email,
      firstName,
      lastName,
      password,
      passwordResetTokens: [token]
    })

    user.save((err, userRes) => {
      if (err) {
        if (err.code === 11000) {
          return emailAlreadyExists(res)
        } else {
          return res.status(500).json(err)
        }
      }

      // Send the verification token
      emailer.sendInvitation(user.email, user.passwordResetTokens[0])

      userRes.passwordResetTokens = []
      delete userRes.password
      return res.json(userRes)
    })
  },

  /**
   * Gets all users in the system
   */
  getAll: async (req, res) => {
    const users = await paginate(req, UserModel)
    res.json(users)
  },

  /**
   * Gets ome user based on the user's ID
   */
  getOne: async (req, res) => {
    const id = req.params.id
    const user = await UserModel.findById(id)

    if (!user) {
      return res.sendStatus(404)
    }

    res.json(user)
  },

  /**
   * Deletes a user from the database
   */
  delete: async (req, res) => {
    const id = req.params.id
    UserModel.findByIdAndRemove(id)
      .select('+picKey')
      .exec()
      .then(user => {
        if (user.picKey) {
          deletePic(user.picKey)
        }

        res.sendStatus(200)
      })
      .catch(err => {
        res.status(err.code || 500).json(err)
      })
  }
}

export default controller
