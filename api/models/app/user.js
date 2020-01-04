/**
 * Mongoose schema and model for individual users
 */

import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'

import bcrypt from 'bcrypt'

const PASSWORD_SALT_ROUNDS = 10

// All hidden fields that can be selected from the collection
export const allFields = '+password +passwordResetTokens +picKey'

export const passwordTokenSchema = {
  expiresAt: {
    type: Date,
    required: true
  }
}

const passwordTokenSchemaInstance = mongoose.Schema(passwordTokenSchema)

export const schema = {
  // Email for logging in locally
  email: {
    type: String,
    unique: true,
    index: true,
    trim: true,
    required: true
  },

  firstName: {
    type: String,
    required: true
  },

  lastName: {
    type: String,
    required: true
  },

  fbID: {
    type: String,
    unique: true,
    index: true,
    sparse: true
  },

  googleID: {
    type: String,
    unique: true,
    index: true,
    sparse: true
  },

  password: {
    type: String,
    required: function() {
      return !this.fbID && !this.googleID
    },
    select: false
  },

  passwordResetTokens: {
    type: [passwordTokenSchemaInstance],
    select: false
  },

  canLocalLogin: {
    type: Boolean,
    required: true
  },

  isAdmin: {
    type: Boolean,
    required: true
  },

  isVerified: {
    type: Boolean,
    required: true
  },

  createdAt: {
    type: Date,
    required: true
  },

  // Picture URL to AWS S3
  pic: {
    type: String,
    required: false
  },

  // AWS key for the picture file, used in
  // removing unused images from S3
  picKey: {
    type: String,
    index: true,
    select: false
  }
}

const schemaInstance = mongoose.Schema(schema)

schemaInstance.plugin(mongoosePaginate)

schemaInstance.set('toJSON', { virtuals: true })

/**
 * Virtual fields
 */
schemaInstance.virtual('googleConnected').get(function() {
  return !!this.googleID
})

schemaInstance.virtual('fbConnected').get(function() {
  return !!this.fbID
})

schemaInstance.virtual('initials').get(function() {
  return ('' + this.firstName[0] + this.lastName[0]).toUpperCase()
})

/**
 * Create a password hash when updating the password
 */
schemaInstance.pre('save', function(next) {
  var user = this

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) {
    return next()
  }

  if (!user.password) {
    next(new Error('Password set empty!'))
  }

  bcrypt
    .hash(user.password, PASSWORD_SALT_ROUNDS)
    .then(hash => {
      user.password = hash
      return next()
    })
    .catch(error => {
      return next(error)
    })
})

schemaInstance.methods.passwordMatches = function(password) {
  if (!this.password) {
    // If there is not yet a password, all passwords match it
    // (in case of setting the password after) first creating the
    // account with social login
    return new Promise(resolve => resolve(true))
  }

  return bcrypt.compare(password, this.password)
}

const modelInstance = mongoose.model('user', schemaInstance)

export default modelInstance
