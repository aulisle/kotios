/* USE THIS! */

import {
  ValidationProvider,
  extend,
  ValidationObserver,
  configure
} from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'
import Vue from 'vue'

extend('required', {
  ...required
})

extend('email', {
  ...email
})

extend('true', {
  validate: value => {
    // eslint-disable-next-line
    console.log('value', value)
    return value === true
  }
})

Vue.component('validation-provider', ValidationProvider)
Vue.component('validation-observer', ValidationObserver)

export default function VeeValidatePlugin({ app }) {
  configure({
    defaultMessage: (_, values) =>
      app.i18n.t(`validations.${values._rule_}`, values)
  })
}
