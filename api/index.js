/**
 * This is the entry-point to the API-server. It starts and initialises
 * the server.
 *
 * Nuxt does not automatically update the server. Therefore in order to
 * update the API, the entire nuxt setup needs to be restarted.
 */

import { default as applyMiddlewares } from './middleware'

import elasticsearch from './search'

import initDb from './models'
import initRoutes from './routes'

// import scheduleJobs from './scheduled'

import express from 'express'
import mongoose from 'mongoose'
import emailer from './emailer'
import dotenv from 'dotenv'

import Logger from '../plugins/logger'
import './utils/setupMoment'

// Read environment variables
dotenv.config()

const sendgridApiKey = process.env.SENDGRID_API_KEY || ''
// eslint-disable-next-line
console.log('SENDGRID API KEY', sendgridApiKey)

const sendgridSenderEmail = process.env.SENDGRID_SENDER_EMAIL || ''
const frontEndUrl = process.env.PUBLIC_URL || ''

const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost/kotios'

// Add the API client id and secret to the database
const apiClientId = process.env.API_CLIENT_ID || 'api-client-id'
const apiClientSecret = process.env.API_CLIENT_SECRET || 'api-client-secret'

const elasticHost = process.env.BONSAI_URL || 'localhost:9200'

// Create express instance
const app = express()

// Start up the server
const startup = async () => {
  // Setup database connection
  await mongoose.connect(
    mongoUri,
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false
    },
    err => {
      if (err) {
        Logger.error(`Error connecting to ${mongoUri}: ${err}`)
        // Kill the app, if the database could not be connected to
        process.exit(1)
      }

      Logger.info(`Connected successfully to "${mongoUri}"`)
    }
  )

  try {
    await elasticsearch.init(elasticHost)

    Logger.info(`Initiated elasticsearch`)
  } catch (err) {
    Logger.error(`Error starting elasticsearch: ${err}`)
    process.exit(2)
  }

  initDb(apiClientId, apiClientSecret)

  applyMiddlewares(app)

  emailer.initEmailer({
    apiKey: sendgridApiKey,
    senderEmail: sendgridSenderEmail,
    publicUrl: frontEndUrl
  })

  initRoutes(app)

  Logger.info('STARTUP FINISHED!')
}

startup()

// Export the server middleware
const output = {
  path: '/api',
  handler: app
}

export default output
