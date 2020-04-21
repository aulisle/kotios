/**
 * This file defines the mongoose schema and model for the dreams in
 * mongodb storage.
 */

import mongoose from 'mongoose'

export const dreamSchema = {
  createdAt: {
    type: Object,
    required: false
  },

  data: {
    type: Object,
    required: true
  }
}

const dreamSchemaInstance = mongoose.Schema(dreamSchema)

export const schema = {
  sessionId: {
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
const modelInstance = mongoose.model('dreamSession', schemaInstance)

export default modelInstance
