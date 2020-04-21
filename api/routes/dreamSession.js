/**
 * This file defines a function that adds the
 * featured items-related routes to the server
 */

import dreams from '../controllers/dreams'
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

  router.route('/dreams/my-dreams/:id').get(dreams.getDreams)
  router.route('/dreams/new').post(dreams.new)
  router.route('/dreams/update/:dreamId').put(dreams.update)
  router.route('/dreams/email').post(dreams.sendEmail)

  app.use(router)
}

export default applyRoutes
