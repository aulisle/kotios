/**
 * This file defines the mongoose schema and model for the OAuth2 clients in
 * mongodb storage.
 */

import mongoose from 'mongoose'

export const schema = {
  clientId: {
    type: String,
    required: true,
    index: true,
    unique: true
  },
  clientSecret: {
    type: String,
    required: true
  },
  grants: {
    type: [String],
    required: false
  },
  redirectUris: {
    type: [String],
    required: false
  }
}

const schemaInstance = mongoose.Schema(schema)
const modelInstance = mongoose.model('client', schemaInstance)

export default modelInstance
