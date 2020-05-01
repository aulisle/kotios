<template>
  <form @submit.prevent="login">
    <md-content class="container-base page-content">
      <template v-if="!working">
        <div class="side-by-side">
          <div class="column">
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

            <div class="login-form-return-button">
              <nuxt-link :to="{ name: 'request-password-reset' }">
                {{ $t('user.forgot-password') }}
              </nuxt-link>
            </div>
          </div>
          <div class="column social-login">
            <base-button
              class="facebook md-raised b-full-width"
              @click.stop.prevent="facebookLogin"
            >
              <img src="/fb-icon.svg" class="social-icon" alt="facebook icon" />
              {{ $t('login-facebook') }}
            </base-button>

            <base-button
              class="google md-raised b-full-width"
              @click.stop.prevent="googleLogin"
            >
              <img
                src="/google-icon.svg"
                class="social-icon"
                alt="google icon"
              />
              {{ $t('login-google') }}
            </base-button>
          </div>
        </div>

        <div>
          <div class="login-form-return-button">
            <nuxt-link :to="{ name: 'register' }">
              {{ $t('user.register') }}
            </nuxt-link>
          </div>
        </div>
      </template>
      <div v-else class="loader">
        <md-progress-spinner md-mode="indeterminate" />
      </div>
    </md-content>
  </form>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

export default {
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
      title: this.$t('routes.login')
    }
  },

  data() {
    return {
      email: '',
      password: '',
      working: false
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

      this.working = true
      const { email, password } = this
      this.$auth
        .loginWith('local', {
          email,
          password
        })
        .catch(() => {
          this.$toast.error('Sisäänkirjautuminen epäonnistui')
        })
        .finally(() => {
          this.working = false
        })
    },

    facebookLogin() {
      this.working = true
      this.$auth.loginWith('facebook')
    },

    googleLogin() {
      this.working = true
      this.$auth.loginWith('google')
    }
  }
}
</script>

<style lang="scss" scoped>
$column-margin: 40px;

.side-by-side {
  display: flex;
  justify-content: center;

  margin-left: -$column-margin;
  margin-right: -$column-margin;

  .column {
    max-width: 350px;
    width: 100%;
    margin-left: $column-margin;
    margin-right: $column-margin;
  }

  .social-login {
    margin-top: 55px;

    button {
      margin-bottom: 10px;
    }
  }
}

.social-icon {
  width: $u3;
  height: $u3;
  margin-right: $u1;
}

.facebook {
  background-color: $color-facebook !important;
  color: white !important;
}

.google {
  background-color: white !important;
  color: $color-text-primary !important;
}
</style>
