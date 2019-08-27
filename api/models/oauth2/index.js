/**
 * This file defines the model abstraction for the OAuth2 storage.
 * More in https://oauth2-server.readthedocs.io/en/latest/model/overview.html.
 */
import ClientModel from './client'
import TokenModel from './token'
import UserModel from '../app/user'

import Logger from '../../../plugins/logger'

const model = {
  /*
   * Methods used by all grant types.
   */
  getAccessToken: accessToken => {
    return TokenModel.findOne({
      accessToken
    })
  },

  getClient: (clientId, clientSecret) => {
    return ClientModel.findOne({
      clientId,
      clientSecret
    })
      .lean()
      .then(res => {
        if (res) {
          res.id = res.clientId
        }

        return res
      })
      .catch(err => {
        Logger.error(`COULD NOT FIND CLIENT: ${err}`)
      })
  },

  getUserFromToken: token => {
    return UserModel.findOne({ _id: token.user.id })
  },

  getRefreshToken: refreshToken => {
    return TokenModel.findOne({
      refreshToken
    })
  },

  revokeToken: refreshTokenInstance => {
    return TokenModel.findByIdAndRemove(refreshTokenInstance._id)
  },

  saveToken: (token, client, user) => {
    token.client = {
      id: client.clientId
    }

    token.user = {
      id: user._id || user.id
    }

    const tokenInstance = new TokenModel(token)

    tokenInstance.save()

    return token
  },

  /*
   * Method used only by password grant type.
   */
  getUser: async (email, password) => {
    const user = await UserModel.findOne({
      email: email,
      isVerified: true
    })
      .select('+password')
      .exec()

    if (!user || !user.password) {
      // If the user wasn't found or they don't
      // have a password, do not continue
      return
    }

    const match = await user.passwordMatches(password)
    if (match) {
      return user
    }
  },

  /*
   * Method used only by client_credentials grant type.
   */
  getUserFromClient: client => {
    return ClientModel.findOne({
      clientId: client.clientId,
      grants: 'client_credentials'
    })
  }
}

export default model
