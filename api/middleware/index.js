/**
 * This file applies all the middleware used on all routes
 */

import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import redirectSSL from 'redirect-ssl'
import { default as OAuth2Server } from 'oauth2-server'
import { default as model } from '../models/oauth2'
import { init as initUtils } from './utils'

const applyBaseMiddlewares = app => {
  initUtils(app)

  app.use(redirectSSL)

  app.oauth = new OAuth2Server({
    model,
    accessTokenLifetime: 10 * 60 * 24 * 30,
    allowBearerTokensInQueryString: true,
    requireClientAuthentication: { password: false }
  })

  app.use(cookieParser())

  app.use(bodyParser.urlencoded({ extended: true, limit: '2mb' }))
  app.use(bodyParser.json({ limit: '2mb' }))
}

export default applyBaseMiddlewares
