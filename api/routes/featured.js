/**
 * This file defines a function that adds the
 * featured items-related routes to the server
 */

import featured from '../controllers/featured'
import express from 'express'

const router = express.Router()

const applyRoutes = app => {
  router.route('/featured').get(featured.get)

  app.use(router)
}

export default applyRoutes
