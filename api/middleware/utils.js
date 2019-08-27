/**
 * This file provides utility middleware to be used in specific
 * routes
 */
import authUser from './auth'

let $app = null

export const init = app => {
  $app = app
}

/**
 * Middleware for requiring certain fields in the request body
 *
 * @param {Array} fields Names of properties that the body needs to have
 */
export const requireFields = fields => {
  return (req, res, next) => {
    const err = fields.some(field => {
      if (typeof req.body[field] === 'undefined' || req.body[field] === '') {
        res.status(422).json({ message: `Field ${field} is required` })
        return true
      }

      return false
    })

    if (!err) {
      next()
    }
  }
}

/**
 * Middleware that blocks a route from guest users
 *
 * @param {Object} req The express request
 * @param {Object} res The express response
 * @param {Object} next The express next function
 */
export const requireLogin = (req, res, next) => {
  authUser(req, res, $app)
    .then(() => {
      next()
    })
    .catch(err => {
      res.status(err.code || 500).json(err)
    })
}

/**
 * Middleware that blocks a route from anybody but
 * someone who has an admin account
 *
 * @param {Object} req The express request
 * @param {Object} res The express response
 * @param {Object} next The express next function
 */
export const requireAdmin = (req, res, next) => {
  authUser(req, res, $app)
    .then(() => {
      if (req.user.isAdmin) {
        return next()
      }

      return res.status(401).json('Unauthorized, needs administrator rights')
    })
    .catch(err => {
      res.status(err.code || 500).json(err)
    })
}
