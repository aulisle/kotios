/**
 * This file defines the controller for the OAuth2 endpoint.
 */

import { Request, Response } from 'oauth2-server'

const tokenRoutes = app => {
  /**
   * Obtains new tokens using the oauth2 server
   *
   * @param {Request} req The request object
   * @param {Response} res The response object
   */
  const obtainToken = (req, res) => {
    // since the oauth server uses the
    // username-field, change the email-field
    // to username.
    req.body.username = req.body.email

    // Transform json format to x-www-form-urlencoded for
    // the oauth server
    req.headers['content-type'] = 'application/x-www-form-urlencoded'

    var request = new Request(req)
    var response = new Response(res)

    return app.oauth
      .token(request, response)
      .then(token => {
        res.json(token)
      })
      .catch(err => {
        // The default error message will still
        // give errors about 'username'. It
        // should give errors about 'email'-field
        // instead.
        err.message = err.message.replace('username', 'email')
        res.status(err.code || 500).json(err)
      })
  }

  return {
    token: obtainToken
  }
}

export default tokenRoutes
