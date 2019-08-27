import ClientModel from './oauth2/client'

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

const initDb = async (apiClientId, apiClientSecret) => {
  await updateClient(apiClientId, apiClientSecret)
  await initUsers()
}

export default initDb
