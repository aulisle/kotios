<template>
  <md-content class="container-base page-content">
    <form class="form-column" @submit.prevent="login">
      <h1>
        {{ $t('user.forgot-password') }}
      </h1>
      <p>
        {{ $t('user.enter-email') }}
      </p>

      <base-input
        v-model="$v.email.$model"
        :label="$t('email')"
        :errors="emailErrors"
      />

      <base-button
        class="md-primary md-raised b-full-width"
        :disabled="$v.$invalid"
        @click.prevent.stop="requestReset"
      >
        {{ $t('user.send-instructions') }}
      </base-button>

      <div class="login-form-return-button">
        <nuxt-link :to="{ name: 'login' }">
          {{ $t('login') }}
        </nuxt-link>
      </div>
    </form>
  </md-content>
</template>

<script>
import { createEmailErrors } from '@/plugins/vuelidate'
import { required, email } from 'vuelidate/lib/validators'

export default {
  auth: 'guest',

  head() {
    return {
      title: this.$createTitle(this.$t('routes.request-password-reset'))
    }
  },

  validations: {
    email: {
      required,
      email
    }
  },

  data() {
    return {
      email: ''
    }
  },

  computed: {
    emailErrors() {
      return createEmailErrors(this.$v.email, this)
    }
  },

  methods: {
    requestReset() {
      this.$v.$touch()

      if (this.$v.$invalid) {
        return
      }

      const { email } = this

      this.$axios
        .post('/api/tokens/request-reset-token', {
          email
        })
        .then(() => {
          this.$toast.success(this.$t('user.reset-sent'))
        })
        .catch(err => {
          this.$toast.error(this.$t('user.reset-error', { err }))
        })
    }
  }
}
</script>

<style lang="scss" scoped></style>
