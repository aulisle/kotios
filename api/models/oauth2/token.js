/**
 * This file defines the mongoose schema and model for the OAuth2 tokens in
 * mongodb storage.
 */

import mongoose from 'mongoose'

export const schema = {
  accessToken: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  accessTokenExpiresAt: {
    type: Date,
    required: true
  },
  refreshToken: {
    type: String,
    required: true,
    unique: true
  },
  refreshTokenExpiresAt: {
    type: Date,
    required: true
  },
  client: {
    type: Object,
    required: true
  },
  user: {
    type: Object,
    required: true
  }
}

const schemaInstance = mongoose.Schema(schema)
schemaInstance.index({ accessTokenExpiresAt: 1 }, { expireAfterSeconds: 0 })

const modelInstance = mongoose.model('token', schemaInstance)

export default modelInstance
