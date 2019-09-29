import projectData from '../../data/projects'

const controller = {
  get: async (req, res, next) => {
    const project = projectData.find(val => {
      return req.params.id == val.id
    })

    if (project) {
      return res.json(project)
    }

    next(404)
  }
}

export default controller
