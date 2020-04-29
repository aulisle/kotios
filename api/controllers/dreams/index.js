import DreamSession from '../../models/app/dreamSession'
import Lead from '../../models/app/lead'
import emailer from '../../emailer'

const saveDreamToLead = async dream => {
  if (!dream.data || !dream.data.email || !dream._id) {
    return
  }

  // Remove existing dreams with the ID
  await Lead.findOneAndUpdate(
    { dreams: { _id: dream._id } },
    { $pull: { dreams: { _id: dream._id } } }
  )

  const email = dream.data.email.toLowerCase()

  let lead = await Lead.findOne({ email })

  if (!lead) {
    // eslint-disable-next-line
    console.log('CREATING LEAD', email, dream)

    // Create new if the lead does not exist yet
    lead = new Lead({
      email,
      dreams: [{ _id: dream._id, data: dream.data }]
    })

    await lead.save()
    return
  }

  // If lead exists, check if there is the dream already in it
  const leadWithDream = await Lead.findOne({
    email,
    'dreams._id': dream._id
  }).exec()

  if (!leadWithDream) {
    // eslint-disable-next-line
    console.log('UPDATING LEAD', email, dream)

    // If there is no lead with dream, push a new one in
    await Lead.findOneAndUpdate(
      {
        email
      },
      {
        $push: {
          dreams: dream
        }
      }
    ).exec()

    return
  }

  // If there is a lead with a dream, update its data
  await Lead.findOneAndUpdate(
    {
      email,
      'dreams._id': dream._id
    },
    {
      $set: {
        'dreams.$.data': dream.data
      }
    },
    {
      new: true
    }
  ).exec()
}

const createNew = async (req, res) => {
  let dreamSession = await DreamSession.findOne({
    sessionId: req.sessionID
  }).exec()

  if (!dreamSession || dreamSession.length == 0) {
    dreamSession = new DreamSession({
      sessionId: req.sessionID,
      dreams: [],
      createdAt: new Date()
    })
  }

  // Remove ID
  delete req.body._id

  dreamSession.dreams = [
    ...dreamSession.dreams,
    { data: req.body, createdAt: new Date() }
  ]

  await dreamSession.save()

  await saveDreamToLead(dreamSession.dreams[dreamSession.dreams.length - 1])

  // Return the new dream
  return res.json(dreamSession.dreams[dreamSession.dreams.length - 1])
}

const controller = {
  new: async (req, res) => {
    return createNew(req, res)
  },

  update: async (req, res, next) => {
    const { dreamId } = req.params

    if (!req.sessionID) {
      // eslint-disable-next-line
      console.log('NO SESSION ID!')
      next()
    }

    // Remove ID
    delete req.body._id
    try {
      let updateResult = await DreamSession.findOneAndUpdate(
        {
          sessionId: req.sessionID,
          'dreams._id': dreamId
        },
        {
          $set: {
            'dreams.$.data': { ...req.body }
          }
        },
        {
          new: true
        }
      ).exec()

      if (!updateResult) {
        // If one didn't exist yet, create a new one
        return createNew(req, res)
      }

      await saveDreamToLead(updateResult.dreams[0])
    } catch (e) {
      // eslint-disable-next-line
      console.error(e)
      return next()
    }

    res.json({ ...req.body, _id: dreamId })
  },

  sendEmail: async (req, res, next) => {
    const { email } = req.body
    if (!email) {
      next()
    }
    const lead = await Lead.findOne({ email: email.toLowerCase() })

    // eslint-disable-next-line
    console.log('GOT LEAD', lead)
    if (lead == null) {
      next()
    }

    emailer.sendDreamsUrl(email, lead._id)
    res.json({ ok: 'true' })
  },

  getDreams: async (req, res, next) => {
    const { id } = req.params

    // eslint-disable-next-line
    console.log('GET DREAMS')
    // eslint-disable-next-line
    console.log('ID', id)
    const lead = await Lead.findById(id)

    if (!lead) {
      next()
    }

    res.json(lead.dreams)
  }
}

export default controller
