import googleMaps from '@google/maps'

const mapsClient = googleMaps.createClient({
  key: process.env.GOOGLE_MAPS_API_KEY,
  Promise: Promise
})

const autocompleteCache = {}

const autocompletePlace = place => {
  if (autocompleteCache[place]) {
    return new Promise(resolve => {
      resolve(autocompleteCache[place])
    })
  }

  return mapsClient
    .placesAutoComplete({
      input: place,
      types: ['(regions)'],
      language: 'fi',
      components: { country: 'fi' }
    })
    .asPromise()
    .then(res => {
      autocompleteCache[place] = {
        json: res.json
      }

      return res
    })
}

const controller = {
  placeSuggestions: async (req, res, next) => {
    if (!req.query || !req.query.query || typeof req.query.query !== 'string') {
      next(422)
    }

    autocompletePlace(req.query.query.toLowerCase())
      .then(({ json }) => {
        res.json(json.predictions)
      })
      .catch(err => {
        next(err)
      })
  },

  projects: async (req, res, next) => {
    if (!req.query || !req.query.query || typeof req.query.query !== 'string') {
      next(422)
    }
  }
}

export default controller
