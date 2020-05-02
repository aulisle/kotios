/**
 * This file applies all the middleware used on all routes
 */

import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import redirectSSL from 'redirect-ssl'
import { default as OAuth2Server } from 'oauth2-server'
import { default as model } from '../models/oauth2'
import { init as initUtils } from './utils'
import session from 'express-session'
import mongoose from 'mongoose'
import InitConnectMongo from 'connect-mongo'

const MongoStore = InitConnectMongo(session)

const applyBaseMiddlewares = app => {
  initUtils(app)

  app.use(redirectSSL)

  app.oauth = new OAuth2Server({
    model,
    accessTokenLifetime: 0,
    allowBearerTokensInQueryString: true,
    requireClientAuthentication: { password: false }
  })

  app.use(cookieParser())

  app.use(
    session({
      secret: 'super-secret-key',
      resave: true,
      saveUninitialized: false,
      rolling: false,
      cookie: { maxAge: null },
      store: new MongoStore({
        mongooseConnection: mongoose.connection,
        collection: 'express-session'
      })
    })
  )

  app.use(bodyParser.urlencoded({ extended: true, limit: '2mb' }))
  app.use(bodyParser.json({ limit: '2mb' }))
}

export default applyBaseMiddlewares
