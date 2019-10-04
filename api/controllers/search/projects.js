import googleMaps from '@google/maps'
import search from '../../search'

const mapsClient = googleMaps.createClient({
  key: process.env.GOOGLE_MAPS_API_KEY,
  Promise: Promise
})

const geometryCache = {}
const autocompleteCache = {}
const FINLAND_ID = '0'

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

const getGeometry = placeid => {
  if (geometryCache[placeid]) {
    return new Promise(resolve => {
      return resolve(geometryCache[placeid])
    })
  }

  return mapsClient
    .place({ placeid })
    .asPromise()
    .then(({ json }) => {
      geometryCache[placeid] = json.result.geometry
      return json.result.geometry
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

    let boundingBox = null
    let getBoundingBox = () => {
      return autocompletePlace(req.query.query.toLowerCase()).then(
        ({ json }) => {
          if (json.predictions.length === 0) {
            // eslint-disable-next-line
            console.log('NO PREDICTIONS')

            return res.json(getGeometry(FINLAND_ID))
          }

          return getGeometry(json.predictions[0].place_id)
        }
      )
    }

    if (req.query.bounds) {
      const bounds = JSON.parse(req.query.bounds)

      getBoundingBox = () => {
        return new Promise(resolve => {
          return resolve({
            viewport: null,
            location: {
              lat: (bounds.northeast.lat + bounds.southwest.lat) / 2,
              lng: (bounds.northeast.lng + bounds.southwest.lng) / 2
            }
          })
        })
      }
    }

    getBoundingBox()
      .then(geometry => {
        // eslint-disable-next-line
        console.log('GEOMETRY', geometry)

        boundingBox = geometry.viewport
        return search.searchProjects({
          query: {
            match_all: {}
          },
          centre: {
            lat: geometry.location.lat,
            lon: geometry.location.lng
          }
        })
      })
      .then(searchResult => {
        return res.json({
          total: searchResult.hits.total.value,
          boundingBox,
          results: searchResult.hits.hits.map(result => {
            return {
              id: result._id,
              ...result._source,
              location: {
                lat: result._source.location.lat,
                lng: result._source.location.lon
              }
            }
          })
        })
      })
      .catch(err => {
        // eslint-disable-next-line
        console.log('ERROR GETTING BOUNDING BOX', err)
        next(err)
      })
  }
}

export default controller
