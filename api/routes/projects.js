import projects from '../controllers/projects'

import express from 'express'

const router = express.Router()

const applyRoutes = app => {
  router.route('/projects/:id').get(projects.get)

  app.use(router)
}

export default applyRoutes
