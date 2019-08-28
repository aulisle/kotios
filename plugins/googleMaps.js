import Vue from 'vue'
import GoogleMapsLoader from 'google-maps'

const KEY = process.env.gMapsApiKey

GoogleMapsLoader.KEY = KEY
GoogleMapsLoader.LANGUAGE = 'FI'
GoogleMapsLoader.REGION = 'FI'
GoogleMapsLoader.VERSION = 'weekly'

const plugin = {
  install: Vue => {
    Vue.prototype.$gMapsLoader = GoogleMapsLoader
  }
}

Vue.use(plugin)
