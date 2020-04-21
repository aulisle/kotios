/**
 * This file defines a function that adds the
 * oauth2 routes to the server
 */

import OAuth2Controller from '../controllers/oauth2'
import express from 'express'

const router = express.Router()

const applyRoutes = app => {
  router.use((req, res, next) => {
    Object.setPrototypeOf(req, app.request)
    Object.setPrototypeOf(res, app.response)
    req.res = res
    res.req = req
    next()
  })

  const controller = OAuth2Controller(app)
  router.all('/oauth/token', controller.token)

  app.use(router)
}

export default applyRoutes
