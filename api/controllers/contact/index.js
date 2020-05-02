import emailer from '../../emailer'

const controller = {
  sendEmail: async (req, res, next) => {
    const { email, name, message } = req.body
    if (!email || !name || !message) {
      return next()
    }

    emailer.sendContactQuery({ email, name, message })

    res.json({ ok: 'true' })
  }
}

export default controller
