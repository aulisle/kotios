import axios from 'axios'

const DEFAULTS = {
  token_type: 'Bearer',
  response_type: 'token',
  tokenName: 'Authorization'
}

export default class Oauth2Scheme {
  constructor(auth, options) {
    this.$auth = auth
    this.name = options._name

    this.options = Object.assign({}, DEFAULTS, options)
    this.interceptor = null
    this.$privAxios = null
  }

  get _scope() {
    return Array.isArray(this.options.scope)
      ? this.options.scope.join(' ')
      : this.options.scope
  }

  get _redirectURI() {
    const url = this.options.redirect_uri

    if (url) {
      return url
    }

    if (process.client) {
      return window.location.origin + this.$auth.options.redirect.callback
    }
  }

  async mounted() {
    // Sync token
    const token = this.$auth.syncToken(this.name)
    // Set axios token
    if (token) {
      this._setToken(token)
    }

    return this.$auth.fetchUserOnce()
  }

  _setToken(token) {
    const ctxAxios = this.$auth.ctx.app.$axios
    // Set Authorization token for all axios requests
    ctxAxios.setHeader(this.options.tokenName, token)
    if (this.interceptor) {
      ctxAxios.interceptors.response.eject(this.interceptor)
    }

    this.interceptor = ctxAxios.interceptors.response.use(
      response => {
        // Do something with response data
        return response
      },
      async error => {
        // Do something with response error
        if (error.config && error.response && error.response.status === 401) {
          return this._useResetToken(error.config)
        }

        return Promise.reject(error)
      }
    )
  }

  async _useResetToken(config) {
    if (this.$authRequest) {
      return this.$authRequest
    }

    this.$authRequest = axios
      .post(this.options.authorization_endpoint, {
        grant_type: 'refresh_token',
        refresh_token: this.$auth.getRefreshToken(this.name),
        client_id: process.env.apiClientId,
        client_secret: process.env.apiClientSecret
      })
      .then(({ data }) => {
        this._handleResponse(data)
        config.headers[this.options.tokenName] =
          this.options.token_type + ' ' + data.accessToken
        return this.$auth.ctx.app.$axios.request(config).then(data => {
          this.$auth.redirect('home', true)
          return data
        })
      })
      .catch(error => {
        return Promise.reject(error)
      })

    return this.$authRequest
  }

  _clearToken() {
    const ctxAxios = this.$auth.ctx.app.$axios
    // Clear Authorization token for all axios requests
    ctxAxios.setHeader(this.options.tokenName, false)
    if (this.interceptor) {
      ctxAxios.interceptors.request.eject(this.interceptor)
    }
  }

  _handleResponse(data) {
    let { accessToken, refreshToken } = data

    // Append token_type
    if (this.options.token_type) {
      accessToken = this.options.token_type + ' ' + accessToken
    }

    // Store token
    this.$auth.setToken(this.name, accessToken)

    // Set axios token
    this._setToken(accessToken)

    // Store refresh token
    if (refreshToken && refreshToken.length) {
      this.$auth.setRefreshToken(this.name, refreshToken)
    }
  }

  async logout() {
    this._clearToken()
    return this.$auth.reset()
  }

  async login(loginParams) {
    if (process.server) {
      this.$auth.redirect('home', true)
      return
    }

    const opts = {
      client_id: process.env.apiClientId,
      client_secret: process.env.apiClientSecret,
      grant_type: 'password',
      ...loginParams
    }

    const data = await this.$auth.request({
      method: 'post',
      url: this.options.authorization_endpoint,
      baseURL: false,
      data: opts
    })

    if (!data) {
      return false
    }

    this._handleResponse(data)

    // Redirect to home
    this.$auth.redirect('home', true)
    return true
  }

  async fetchUser() {
    if (!this.$auth.getToken(this.name)) {
      return
    }

    if (!this.options.userinfo_endpoint) {
      this.$auth.setUser({})
      return
    }

    const user = await this.$auth.requestWith(this.name, {
      url: this.options.userinfo_endpoint
    })

    this.$auth.setUser(user)
  }
}
