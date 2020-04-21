import UserModel from '../models/app/user'
import { createSocialUser } from '../models/app/user.create'

import axios from 'axios'

const getOrCreateGoogleUser = googleData => {
  return UserModel.findOne({
    $or: [{ googleID: googleData.sub }, { email: googleData.email }]
  }).then(user => {
    if (!user) {
      // If user was not found, create one
      const user = createSocialUser({
        googleID: googleData.sub,
        firstName: googleData.given_name,
        lastName: googleData.family_name,
        email: googleData.email
      })

      return new Promise((resolve, reject) => {
        user.save((err, userRes) => {
          if (err) {
            return reject(err)
          }
          return resolve(userRes)
        })
      })
    }

    if (!user.googleID) {
      user.googleID = googleData.sub
      return user.save().then(() => user)
    }

    return new Promise(resolve => resolve(user))
  })
}

export const authorize = req => {
  const authToken = req.header('Authorization')

  return axios
    .get('https://www.googleapis.com/oauth2/v3/userinfo', {
      headers: {
        Authorization: authToken
      }
    })
    .then(({ data }) => {
      return getOrCreateGoogleUser(data)
    })
    .then(user => {
      req.user = user
    })
    .catch(e => {
      throw {
        message: e.message,
        code: 401
      }
    })
}
