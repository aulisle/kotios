/**
 * This file defines a function that adds the
 * search-related routes to the server
 */

import users from '../controllers/search/users'
import projects from '../controllers/search/projects'

import express from 'express'

const router = express.Router()

const applyRoutes = app => {
  router.route('/search/users').get(users.search)
  router.route('/search/place-suggestions').get(projects.placeSuggestions)
  router.route('/search/projects').get(projects.projects)

  app.use(router)
}

export default applyRoutes
