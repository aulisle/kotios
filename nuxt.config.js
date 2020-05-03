// nuxt-i18n seems to have a bug where some of the
// pages do not get the right name and they cannot
// be accessed with nuxt-link

// import I18N from './lang'
import dotenv from 'dotenv'

dotenv.config()

const description = 'KotiOS — Rikastuttavampi tapa hankkia uusi koti'

export default {
  /*
   ** Headers of the page
   */
  head: {
    title: 'KotiOS',
    titleTemplate: '%s — KotiOS',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: description
      },
      {
        name: 'msapplication-TileColor',
        content: '#2b5797'
      },
      {
        name: 'theme-color',
        content: '#281348'
      },
      { hid: 'og:title', name: 'og:title', content: 'KotiOS' },
      {
        hid: 'og:description',
        name: 'og:description',
        content: description
      },
      { hid: 'og:image', name: 'og:image', content: '/social-cover.jpg' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'KotiOS' },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: description
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: '/social-cover.jpg'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: '//fonts.googleapis.com/icon?family=Material+Icons'
      },
      {
        rel: 'icon',
        type: 'image/png',
        size: '32x32',
        href: '/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        size: '16x16',
        href: '/favicon-16x16.png'
      },
      {
        rel: 'manifest',
        href: '/site.webmanifest'
      },
      {
        rel: 'mask-icon',
        href: '/safari-pinned-tab.svg',
        color: '#5bbad5'
      },
      {
        rel: 'apple-touch-icon',
        size: '180x180',
        href: '/apple-touch-icon.png'
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

    transpile: ['vee-validate/dist/rules'],

    extractCss: {
      allChunks: true
    }
  },

  modules: [
    '@nuxtjs/dotenv',
    'nuxt-client-init-module',
    [
      '@nuxtjs/axios',
      {
        baseURL: `http://${process.env.HOST || 'localhost'}:${process.env
          .PORT || 3000}/`,

        https: process.env.NODE_ENV === 'production',
        credentials: true
      }
    ],
    // '@nuxtjs/auth',
    [
      '@nuxtjs/toast',
      {
        position: 'top-center',
        duration: 10000
      }
    ],
    '@nuxtjs/style-resources',
    [
      '@nuxtjs/vuetify',
      {
        treeShake: false,
        theme: {
          light: true,
          themes: {
            light: {
              primary: '#281348',
              secondary: '#ffffff',
              accent: '#EA376D',
              'text-fields': {
                'filled-hover': '#EA376D'
              }
            }
          }
        }
      }
    ]
  ],

  buildModules: ['@nuxtjs/gtm', '@nuxtjs/google-analytics'],

  plugins: [
    { src: '~/plugins/babel.js', ssr: false },
    '~/plugins/globalComponents.js',
    '~/plugins/filters.js',
    '~/plugins/i18n.js',
    '~/plugins/vuelidate.js',
    '~/plugins/veeValidate.js',
    '~/plugins/vueCheckView.js',
    '~/plugins/socialSharing.js',
    { src: '~/plugins/googleMaps.js', ssr: false },
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
    'redirect-ssl',
    '~/api'
  ],

  env: {
    apiClientId: process.env.API_CLIENT_ID || 'api-client-id',
    apiClientSecret: process.env.API_CLIENT_SECRET || 'api-client-secret',
    gMapsApiKey: process.env.GOOGLE_MAPS_API_KEY || 'google-maps-api-key',
    publicUrl: process.env.PUBLIC_URL || 'locahost:3000'
  },

  styleResources: {
    scss: ['assets/sass/_variables.scss']
  },

  pageTransition: 'page',

  layoutTransition: 'page',

  loading: {
    color: '#EA376D',
    height: '2px'
  },

  gtm: {
    id: 'GTM-MSJJN49'
  },

  googleAnalytics: {
    id: 'UA-163453529-1',
    debug: {
      enabled: process.env.NODE_ENV === 'development',
      sendHitTask: true
    }
  }
}
