import mongoose from 'mongoose'

export const schema = {
  _id: {
    type: Number
  },

  title: {
    type: String,
    required: true
  },

  /**
   * Content type
   */
  contentType: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  previewImageUrl: {
    type: String,
    required: true
  },

  /**
   * Id for a related project
   */
  projectId: {
    type: String,
    required: false
  },

  /**
   * A link for an external site
   */
  linkUrl: {
    type: String,
    required: false
  }
}

const schemaInstance = mongoose.Schema(schema)

const modelInstance = mongoose.model('featured', schemaInstance)

export default modelInstance
