<template>
  <form @submit.prevent="register">
    <md-content class="container-base page-content">
      <div class="form-column">
        <div v-if="status === null || !status.success">
          <h1>Rekisteröidy</h1>
          <p>
            Luo tili täyttämällä alla olevat tiedot.
          </p>

          <base-input
            v-model="$v.email.$model"
            :label="$t('email')"
            :errors="emailErrors"
          />

          <base-password-input
            v-model="$v.password.$model"
            :label="$t('password')"
            :strength.sync="strength"
            :errors="passwordErrors"
          />

          <base-input
            v-model="$v.passwordAgain.$model"
            type="password"
            :label="$t('password-again')"
            :errors="passwordAgainErrors"
          />

          <base-input
            v-model="$v.firstName.$model"
            :label="$t('user.first-name')"
            :errors="firstNameErrors"
          />

          <base-input
            v-model="$v.lastName.$model"
            :label="$t('user.last-name')"
            :errors="lastNameErrors"
          />

          <base-button
            class="md-primary md-raised b-full-width"
            :disabled="$v.$invalid"
            @click.stop.prevent="register"
          >
            Rekisteröidy
          </base-button>

          <div class="login-form-return-button">
            <nuxt-link :to="{ name: 'login' }">
              Kirjaudu sisään
            </nuxt-link>
          </div>
        </div>
        <div v-else>
          <h1 class="success-info">
            <md-icon>check</md-icon><br />
            Hienoa! <br />
            Tilisi on nyt luotu. Saat sähköpostiisi varmistuskoodin.
          </h1>

          <p class="success-prompt">
            Varmistuskoodin avulla voit kirjautua ensimmäisen kerran sisään.
          </p>

          <div class="login-form-return-button">
            <nuxt-link :to="{ name: 'login' }">
              Kirjaudu sisään
            </nuxt-link>
          </div>
        </div>
      </div>
    </md-content>
  </form>
</template>

<script>
import SetPasswordMixin from '@/components/setPassword/SetPasswordMixin'
import { email, required } from 'vuelidate/lib/validators'
import { createEmailErrors } from '@/plugins/vuelidate'

export default {
  mixins: [SetPasswordMixin],

  data() {
    return {
      email: '',
      firstName: '',
      lastName: '',
      status: null
    }
  },

  validations: {
    ...SetPasswordMixin.validations,
    email: {
      required,
      email
    },
    firstName: {
      required
    },
    lastName: {
      required
    }
  },

  computed: {
    emailErrors() {
      return createEmailErrors(this.$v.email, this)
    },

    firstNameErrors() {
      const errors = []

      if (this.$v.firstName.$dirty && !this.$v.firstName.required) {
        errors.push(
          this.$t('errors.is-required-field', {
            field: this.$t('user.first-name')
          })
        )
      }

      return errors
    },

    lastNameErrors() {
      const errors = []

      if (this.$v.lastName.$dirty && !this.$v.lastName.required) {
        errors.push(
          this.$t('errors.is-required-field', {
            field: this.$t('user.last-name')
          })
        )
      }

      return errors
    }
  },

  methods: {
    register() {
      this.$v.$touch()

      if (this.$v.$invalid) {
        return
      }

      const { email, password, passwordAgain, firstName, lastName } = this

      this.$axios
        .post(`/api/users`, {
          email,
          password,
          passwordAgain,
          firstName,
          lastName
        })
        .then(() => {
          this.status = { success: true }
        })
        .catch(err => {
          this.$toast.error(`Rekisteröitymisessä tapahtui virhe: ${err}`)
          this.status = null
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.success-info {
  font-size: 60px;
  font-family: $font-stack-button;
  line-height: 58px;
  font-weight: 900;
  color: $color-text-black;
  text-align: center;

  i {
    color: $color-primary !important;
    font-size: 60px !important;
    height: 60px;
  }
}

.success-prompt {
  text-align: center;
}
</style>
