import DreamSession from '../../models/app/dreamSession'
import Lead from '../../models/app/lead'
import emailer from '../../emailer'

const saveDreamToLead = async dream => {
  // eslint-disable-next-line
  console.log('SAVING DREAM TO LEAD')

  if (!dream.data || !dream.data.email || !dream._id) {
    // eslint-disable-next-line
    console.log('NO DREAM DATA OR EMAIL')
    return
  }

  // Remove existing dreams with the ID
  await Lead.findOneAndUpdate(
    { dreams: { _id: dream._id } },
    { $pull: { dreams: { _id: dream._id } } }
  )

  // eslint-disable-next-line
  console.log('REMOVED LEAD')
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
  // eslint-disable-next-line
  console.log('CREATE NEW DREAM')

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

  // eslint-disable-next-line
  console.log('SAVING DREAM SESSION')
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

    // eslint-disable-next-line
    console.log('RUN UPDATE DREAM')

    if (!req.sessionID) {
      // eslint-disable-next-line
      console.log('NO SESSION ID!')
      return next()
    }

    // Remove ID
    delete req.body._id
    try {
      // eslint-disable-next-line
      console.log('TRY ONE AND UPDATE')

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

      // eslint-disable-next-line
      console.log('UPDATE RESULT', updateResult)
      const dream = updateResult.dreams.find(el => {
        el._id.equals(dreamId)
        return el._id == dreamId
      })

      // eslint-disable-next-line
      console.log('FOUND DREAM', dream)
      await saveDreamToLead(dream)
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
      return next()
    }
    const lead = await Lead.findOne({ email: email.toLowerCase() })

    // eslint-disable-next-line
    console.log('GOT LEAD', lead)
    if (lead == null) {
      return next()
    }

    emailer.sendDreamsUrl(email, lead._id)
    res.json({ ok: 'true' })
  },

  getDreams: async (req, res, next) => {
    const { id } = req.params
    const lead = await Lead.findById(id)

    if (!lead || lead == null || !lead.dreams) {
      return next()
    }

    res.json(lead.dreams)
  }
}

export default controller
