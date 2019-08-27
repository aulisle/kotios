import ClientModel from './oauth2/client'
import FeaturedModel from './app/featured'

import featuredData from '../data/featured'

import Logger from '../../plugins/logger'

const updateClient = async (apiClientId, apiClientSecret) => {
  // Updates the client list to use the new client
  // secret
  const client = await ClientModel.findOneAndUpdate(
    {
      clientId: apiClientId
    },
    {
      clientSecret: apiClientSecret,
      grants: ['password', 'refresh_token', 'client_credentials'],
      redirectUris: []
    }
  )

  if (!client) {
    // If client was not found, create a new one
    await ClientModel.create({
      clientId: apiClientId,
      clientSecret: apiClientSecret,
      grants: ['password', 'refresh_token', 'client_credentials'],
      redirectUris: []
    })
  }
}

const initUsers = async () => {}

const initFeatured = async () => {
  featuredData.forEach(async item => {
    await FeaturedModel.updateOne({ _id: item._id }, item, {
      upsert: true,
      setDefaultsOnInsert: true
    }).catch(err => {
      Logger.error(`Error updating featured ${err}`)
    })
  })
}

const initDb = async (apiClientId, apiClientSecret) => {
  await updateClient(apiClientId, apiClientSecret)
  await initUsers()
  await initFeatured()
}

export default initDb
