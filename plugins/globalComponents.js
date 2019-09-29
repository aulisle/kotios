import Vue from 'vue'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

import BaseButton from '~/components/base/BaseButton.vue'
import BaseInput from '~/components/base/BaseInput.vue'
import BasePasswordInput from '~/components/base/BasePasswordInput.vue'
import BaseToggle from '~/components/base/BaseToggle.vue'
import BaseRadioGroup from '~/components/base/BaseRadioGroup.vue'
import BaseSelect from '~/components/base/BaseSelect.vue'
import BaseFile from '~/components/base/BaseFile.vue'
import BaseAutocomplete from '~/components/base/BaseAutocomplete.vue'
import TransitionPop from '~/components/base/TransitionPop.vue'

Vue.use(VueMaterial)

Vue.component('base-button', BaseButton)
Vue.component('base-input', BaseInput)
Vue.component('base-toggle', BaseToggle)
Vue.component('base-password-input', BasePasswordInput)
Vue.component('base-radio-group', BaseRadioGroup)
Vue.component('base-select', BaseSelect)
Vue.component('base-file', BaseFile)
Vue.component('base-autocomplete', BaseAutocomplete)
Vue.component('transition-pop', TransitionPop)

const createTitle = {
  install: Vue => {
    Vue.prototype.$createTitle = name => {
      return `Rento | ${name}`
    }

    Vue.prototype.$createSocialMeta = ({ title, description, image, url }) => {
      return [
        { hid: 'og:title', name: 'og:title', content: title },
        { hid: 'og:description', name: 'og:description', content: description },
        { hid: 'og:image', name: 'og:image', content: image },
        { hid: 'og:url', name: 'og:url', content: url },
        { hid: 'twitter:title', name: 'twitter:title', content: title },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: description
        },
        { hid: 'twitter:image', name: 'twitter:image', content: image }
      ]
    }
  }
}

Vue.use(createTitle)
