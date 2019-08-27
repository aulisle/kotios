import { authorize as localAuth } from './auth.local'
import { authorize as fbAuth } from './auth.facebook'
import { authorize as googleAuth } from './auth.google'

/**
 * Checks whether a user is authorised and returns the user
 *
 * @param {Object} req The express request
 * @param {Object} res The expres response
 */
const authUser = (req, res, app) => {
  const strategy = req.cookies['auth.strategy']

  if (strategy === 'facebook') {
    return fbAuth(req)
  }

  // eslint-disable-next-line
  if (strategy === 'google') {
    return googleAuth(req)
  }

  return localAuth(req, res, app)
}

export default authUser
