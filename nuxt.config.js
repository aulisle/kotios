// nuxt-i18n seems to have a bug where some of the
// pages do not get the right name and they cannot
// be accessed with nuxt-link

// import I18N from './lang'
import dotenv from 'dotenv'

dotenv.config()

export default {
  /*
   ** Headers of the page
   */
  head: {
    title: 'Rento',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: '//fonts.googleapis.com/icon?family=Material+Icons'
      }
    ],
    script: [
      {
        // TODO: Only FontAwesome brands!!
        src: 'https://kit.fontawesome.com/ad4e228f5e.js',
        defer: true
      },
      {
        src:
          'https://polyfill.io/v3/polyfill.min.js?features=Object.values%2CArray.from'
      }
    ]
  },

  /*
   ** Global CSS/SASS
   */
  css: [{ src: '~/assets/sass/main.scss', lang: 'scss' }],

  /*
   ** Add axios globally
   */
  build: {
    vendor: ['axios'],
    /*
     ** Run ESLINT on save
     */
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.(pug)$/,
        loader: 'file-loader'
      })

      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },

    extractCss: {
      allChunks: true
    }
  },

  modules: [
    '@nuxtjs/dotenv',
    [
      '@nuxtjs/axios',
      {
        baseURL: `http://${process.env.HOST || 'localhost'}:${process.env
          .PORT || 3000}/`,

        https: process.env.NODE_ENV === 'production'
      }
    ],
    '@nuxtjs/auth',
    [
      '@nuxtjs/toast',
      {
        position: 'top-center',
        duration: 10000
      }
    ],
    '@nuxtjs/style-resources',
    '@nuxtjs/vuetify',
    '~/modules/api'
  ],

  plugins: [
    '~/plugins/globalComponents.js',
    '~/plugins/filters.js',
    '~/plugins/i18n.js',
    '~/plugins/vuelidate.js',
    { src: '~/plugins/googleMaps.js', ssr: false },
    { src: '~/plugins/socialSharing.js', ssr: false },
    { src: '~/plugins/directives.js', ssr: false },
    { src: '~/plugins/imageViewer.js', ssr: false }
  ],

  router: {
    middleware: ['lang']
  },

  auth: {
    strategies: {
      local: {
        _scheme: '~/plugins/customOauth2Scheme.js',
        authorization_endpoint: '/api/oauth/token',
        userinfo_endpoint: '/api/user',
        response_type: 'token',
        token_type: 'Bearer',
        redirect_uri: undefined,
        token_key: 'access_token',
        state: 'UNIQUE_AND_NON_GUESSABLE'
      },
      facebook: {
        client_id: process.env.FB_CLIENT_ID,
        userinfo_endpoint: '/api/user',
        scope: ['public_profile', 'email']
      },
      google: {
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        userinfo_endpoint: '/api/user'
      }
    },
    redirect: {
      login: '/login',
      logout: '/',
      home: '/'
    }
  },

  serverMiddleware: [
    // API middleware
    'redirect-ssl'
  ],

  env: {
    apiClientId: process.env.API_CLIENT_ID || 'api-client-id',
    apiClientSecret: process.env.API_CLIENT_SECRET || 'api-client-secret',
    gMapsApiKey: process.env.GOOGLE_MAPS_API_KEY || 'google-maps-api-key'
  },

  styleResources: {
    scss: ['assets/sass/_variables.scss']
  },

  pageTransition: 'page',

  loading: {
    color: '#1bb8d1',
    height: '2px'
  }
}
