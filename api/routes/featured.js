/**
 * This file defines a function that adds the
 * featured items-related routes to the server
 */

import featured from '../controllers/featured'
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

  router.route('/featured').get(featured.get)

  app.use(router)
}

export default applyRoutes
