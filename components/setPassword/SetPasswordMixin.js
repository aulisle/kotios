import { required, requiredIf } from 'vuelidate/lib/validators'

const mixin = {
  data() {
    return {
      oldPassword: '',
      password: '',
      passwordAgain: '',
      strength: 0
    }
  },

  validations: {
    oldPassword: {
      required: requiredIf(function() {
        return !!this.requireOldPassword
      })
    },

    password: {
      required,
      strength: function() {
        return this.strength >= 2
      }
    },

    passwordAgain: {
      required,
      matches: function(val) {
        return this.password === val
      }
    }
  },

  computed: {
    oldPasswordErrors() {
      const errors = []
      if (this.$v.oldPassword.$dirty && !this.$v.oldPassword.required) {
        errors.push(
          this.$t('errors.is-required-field', {
            field: 'Vanha salasana'
          })
        )
      }

      return errors
    },

    passwordErrors() {
      if (!this.$v.password.$dirty) {
        return []
      }

      const errors = []
      if (!this.$v.password.required) {
        errors.push(
          this.$t('errors.is-required-field', {
            field: 'Uusi salasana'
          })
        )
      }

      if (!this.$v.password.strength) {
        errors.push(this.$t('errors.password-not-strong-enough'))
      }

      return errors
    },

    passwordAgainErrors() {
      if (!this.$v.passwordAgain.$dirty) {
        return []
      }

      const errors = []
      if (!this.$v.passwordAgain.required) {
        errors.push(
          this.$t('errors.is-required-field', {
            field: 'Salasanan vahvistus'
          })
        )
      }

      if (!this.$v.passwordAgain.matches) {
        errors.push(this.$t('errors.passwords-do-not-match'))
      }

      return errors
    }
  }
}

export default mixin
