const controller = {
  get: async (req, res) => {
    req.session.guest = true

    return res.json({
      id: req.sessionID,
      guest: req.session.guest,
      userData: req.session.userData
    })
  },

  put: async (req, res) => {
    req.session.userData = req.body

    return res.json(req.session)
  }
}

export default controller
