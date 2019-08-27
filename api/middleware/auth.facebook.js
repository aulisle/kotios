import UserModel from '../models/app/user'
import { createSocialUser } from '../models/app/user.create'

import search from '../search'
import axios from 'axios'

const getOrCreateFbUser = fbData => {
  return UserModel.findOne({
    $or: [{ fbID: fbData.id }, { email: fbData.email }]
  }).then(user => {
    if (!user) {
      // If user was not found, create one
      const user = createSocialUser({
        fbID: fbData.id,
        firstName: fbData.first_name,
        lastName: fbData.last_name,
        email: fbData.email
      })

      return new Promise((resolve, reject) => {
        user.save((err, userRes) => {
          if (err) {
            return reject(err)
          }

          // Update user index
          search.indexUser(userRes)

          return resolve(userRes)
        })
      })
    }

    if (!user.fbID) {
      user.fbID = fbData.id
      return user.save().then(() => user)
    }

    return new Promise(resolve => resolve(user))
  })
}

export const authorize = req => {
  const authToken = req.header('Authorization')

  return axios
    .get(
      'https://graph.facebook.com/v4.0/me?fields=first_name,last_name,email',
      {
        headers: {
          Authorization: authToken
        }
      }
    )
    .then(({ data }) => {
      return getOrCreateFbUser(data)
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
