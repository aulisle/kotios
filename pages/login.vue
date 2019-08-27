<template>
  <form @submit.prevent="login">
    <md-content class="container page-content">
      <div class="form-column">
        <h1>{{ $t('login') }}</h1>

        <base-input
          v-model="$v.email.$model"
          :label="$t('email')"
          :errors="emailErrors"
        />

        <base-input
          v-model="$v.password.$model"
          type="password"
          :label="$t('password')"
          :errors="passwordErrors"
        />

        <base-button
          class="md-primary md-raised b-full-width"
          :disabled="$v.$invalid"
          @click.stop.prevent="login"
        >
          {{ $t('login-prompt') }}
        </base-button>

        <base-button
          class="md-primary md-raised b-full-width"
          @click.stop.prevent="facebookLogin"
        >
          {{ $t('login-facebook') }}
        </base-button>

        <base-button
          class="md-secondary md-raised b-full-width"
          @click.stop.prevent="googleLogin"
        >
          {{ $t('login-google') }}
        </base-button>

        <div class="login-form-return-button">
          <nuxt-link :to="{ name: 'request-password-reset' }">
            {{ $t('user.forgot-password') }}
          </nuxt-link>
        </div>

        <div class="login-form-return-button">
          <nuxt-link :to="{ name: 'register' }">
            {{ $t('user.register') }}
          </nuxt-link>
        </div>
      </div>
    </md-content>
  </form>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

export default {
  layout: 'guest',

  middleware: 'auth',
  auth: 'guest',

  validations: {
    email: {
      required
    },
    password: {
      required
    }
  },

  head() {
    return {
      title: this.$createTitle(this.$t('routes.login'))
    }
  },

  data() {
    return {
      email: '',
      password: ''
    }
  },

  computed: {
    emailErrors() {
      if (!this.$v.email.$dirty) {
        return []
      }

      if (!this.$v.email.required) {
        return [this.$t('errors.is-required-field', { field: 'Sähköposti' })]
      }

      return []
    },

    passwordErrors() {
      if (!this.$v.password.$dirty) {
        return []
      }

      if (!this.$v.password.required) {
        return [this.$t('errors.is-required-field', { field: 'Salasana' })]
      }

      return []
    }
  },

  methods: {
    login() {
      this.$v.$touch()

      if (this.$v.$invalid) {
        return
      }

      const { email, password } = this
      this.$auth
        .loginWith('local', {
          email,
          password
        })
        .catch(() => {
          this.$toast.error('Sisäänkirjautuminen epäonnistui')
        })
    },

    facebookLogin() {
      this.$auth.loginWith('facebook')
    },

    googleLogin() {
      this.$auth.loginWith('google')
    }
  }
}
</script>

<style lang="scss" scoped></style>
