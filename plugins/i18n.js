/**
 * Custom i18n, since at the time of writing the code nuxt-i18n had a bug where
 * route names would not be properly created. When the nuxt-i18n does not contain
 * critical bugs, it should be used instead.
 */
import VueI18N from 'vue-i18n'
import fi from '../lang/fi'
import Vue from 'vue'

const messages = {
  fi
}

Vue.use(VueI18N)

const i18n = new VueI18N({
  locale: 'fi', // set locale
  messages // set locale messages
})

export default async context => {
  const { app } = context
  app.i18n = i18n
}
