/**
 * This file defines a function that adds the
 * featured items-related routes to the server
 */

import session from '../controllers/session'
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

  router
    .route('/session')
    .get(session.get)
    .put(session.put)

  app.use(router)
}

export default applyRoutes
