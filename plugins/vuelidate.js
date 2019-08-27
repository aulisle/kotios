import Vue from 'vue'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)

export const createEmailErrors = function(path, context) {
  const errors = []

  if (path.$dirty) {
    if (!path.required) {
      errors.push(
        context.$t('errors.is-required-field', { field: 'Sähköposti' })
      )
    }

    if (!path.email) {
      errors.push(context.$t('errors.invalid-email'))
    }

    return errors
  }

  return []
}
