import { Request, Response } from 'oauth2-server'
import OAuthModel from '../models/oauth2'

export const authorize = (req, res, app) => {
  const request = new Request(req)
  const response = new Response(res)

  return app.oauth
    .authenticate(request, response)
    .then(token => {
      res.locals.oauth = { token: token }
      return OAuthModel.getUserFromToken(token)
    })
    .then(user => {
      req.user = user
    })
}
