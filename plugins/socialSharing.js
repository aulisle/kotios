import SocialSharing from '../components/base/SocialSharing/SocialSharing'
import Vue from 'vue'

SocialSharing.version = '2.4.6'

SocialSharing.install = vue => {
  vue.component('social-sharing', SocialSharing)
}

if (process.client) {
  window.SocialSharing = SocialSharing
}

Vue.use(SocialSharing)
