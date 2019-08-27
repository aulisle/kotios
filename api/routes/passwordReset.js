/**
 * This file defines a function that adds the
 * password resetting routes to the server
 */

import controller from '../controllers/passwordReset'
import { requireFields, requireAdmin } from '../middleware/utils'

import express from 'express'

const router = express.Router()

const applyRoutes = app => {
  router.post(
    '/user/reset-password',
    requireFields(['tokenId', 'password', 'passwordAgain']),
    controller.reset
  )

  router.post('/user/activate', requireFields(['tokenId']), controller.activate)

  router.get('/tokens/is-valid-reset-token/:tokenId', controller.isValidToken)

  router.post('/tokens/request-reset-token', controller.requestReset)

  router.post(
    '/tokens/resend-invitation',
    requireAdmin,
    requireFields(['userId']),
    controller.resendInvitation
  )

  app.use(router)
}

export default applyRoutes
