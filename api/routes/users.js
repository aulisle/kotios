/**
 * This file defines a function that adds the
 * user-related routes to the server
 */

import controller from '../controllers/users'
import express from 'express'

import { requireLogin, requireFields } from '../middleware/utils'

const router = express.Router()

const applyRoutes = app => {
  // Users can access their own details with the
  // user-route
  router
    .route('/user')
    .get(requireLogin, controller.current.get)
    .patch(requireLogin, controller.current.update)

  // Updates the user's pic
  router.route('/user/pic').patch(requireLogin, controller.current.uploadPic)

  router
    .route('/users')
    .post(
      requireFields([
        'email',
        'firstName',
        'lastName',
        'password',
        'passwordAgain'
      ]),
      controller.create
    )

  app.use(router)
}

export default applyRoutes
