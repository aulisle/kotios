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

import TransitionPop from '~/components/base/TransitionPop.vue'

Vue.use(VueMaterial)

Vue.component('base-button', BaseButton)
Vue.component('base-input', BaseInput)
Vue.component('base-toggle', BaseToggle)
Vue.component('base-password-input', BasePasswordInput)
Vue.component('base-radio-group', BaseRadioGroup)
Vue.component('base-select', BaseSelect)
Vue.component('base-file', BaseFile)
Vue.component('transition-pop', TransitionPop)

const createTitle = {
  install: Vue => {
    Vue.prototype.$createTitle = name => {
      return `Rento | ${name}`
    }
  }
}

Vue.use(createTitle)
