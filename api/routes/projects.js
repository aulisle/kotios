import projects from '../controllers/projects'

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

  router.route('/projects/:id').get(projects.get)

  app.use(router)
}

export default applyRoutes
