/**
 * This file defines a function that adds the
 * oauth2 routes to the server
 */

import OAuth2Controller from '../controllers/oauth2'
import express from 'express'

const router = express.Router()

const applyRoutes = app => {
  const controller = OAuth2Controller(app)
  router.all('/oauth/token', controller.token)

  app.use(router)
}

export default applyRoutes
