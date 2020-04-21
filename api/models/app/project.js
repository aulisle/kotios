/**
 * This file defines the mongoose schema and model for the OAuth2 clients in
 * mongodb storage.
 */

import mongoose from 'mongoose'

export const schema = {
  id: {
    type: Number,
    unique: true,
    index: true,
    required: true
  },

  location: {
    type: Object,
    required: true
  },

  projectType: {
    type: Number,
    required: true
  },

  title: {
    type: String,
    required: true
  },

  address: {
    type: String,
    required: true
  },

  tagline: {
    type: String,
    required: true
  },

  values: {
    type: [String],
    required: true
  },

  thumbnail: {
    type: String,
    required: true
  },

  phases: {
    type: Object,
    required: true
  },

  images: {
    type: [String],
    required: true
  },

  description: {
    type: [String],
    required: true
  }
}

const schemaInstance = mongoose.Schema(schema)
const modelInstance = mongoose.model('project', schemaInstance)

export default modelInstance
