/**
 * This file defines the mongoose schema and model for the dreams in
 * mongodb storage.
 */

import mongoose from 'mongoose'

export const dreamSchema = {
  _id: {
    type: String,
    required: true,
    index: true,
    unique: true
  },

  data: {
    type: Object,
    required: true
  }
}

const dreamSchemaInstance = mongoose.Schema(dreamSchema)

export const schema = {
  email: {
    type: String,
    index: true,
    required: true,
    unique: true
  },

  dreams: {
    type: [dreamSchemaInstance]
  }
}

const schemaInstance = mongoose.Schema(schema)
const modelInstance = mongoose.model('lead', schemaInstance)

export default modelInstance
