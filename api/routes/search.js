/**
 * This file defines a function that adds the
 * user-related routes to the server
 */

import users from '../controllers/search/users'
import express from 'express'

const router = express.Router()

const applyRoutes = app => {
  router.route('/search/users').get(users.search)

  app.use(router)
}

export default applyRoutes
