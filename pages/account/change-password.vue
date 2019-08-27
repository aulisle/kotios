<template>
  <md-content>
    <form class="form-column" @submit.prevent="setPassword">
      <h1>{{ $t('settings.change-password') }}</h1>
      <template v-if="!working">
        <div class="form-main">
          <base-input
            v-if="user.canLocalLogin"
            v-model="$v.oldPassword.$model"
            type="password"
            :label="$t('settings.old-password')"
            :errors="oldPasswordErrors"
          />

          <base-password-input
            v-model="$v.password.$model"
            :strength.sync="strength"
            :label="$t('settings.new-password')"
            :errors="passwordErrors"
          />

          <base-input
            v-model="$v.passwordAgain.$model"
            type="password"
            :label="$t('settings.password-again')"
            :errors="passwordAgainErrors"
          />
        </div>
        <div class="form-main">
          <base-button
            class="b-full-width md-raised md-primary"
            :disabled="$v.$invalid"
            @click.stop.prevent="setPassword"
          >
            {{ $t('settings.change-password') }}
          </base-button>

          <nuxt-link
            :to="{ name: 'account' }"
            class="b-full-width md-button button-margin"
          >
            <base-button class="b-full-width">
              {{ $t('cancel') }}
            </base-button>
          </nuxt-link>
        </div>
      </template>
      <transition-pop>
        <div v-if="working" class="loader">
          <md-progress-spinner md-mode="indeterminate" />
        </div>
      </transition-pop>
    </form>
  </md-content>
</template>

<script>
import { mapGetters } from 'vuex'
import SetPasswordMixin from '@/components/setPassword/SetPasswordMixin'

export default {
  middleware: 'auth',

  mixins: [SetPasswordMixin],

  data() {
    return {
      working: false
    }
  },

  computed: {
    ...mapGetters('user', ['user']),
    requireOldPassword() {
      return this.user.canLocalLogin
    }
  },

  methods: {
    setPassword() {
      this.$v.$touch()

      if (this.$v.$invalid) {
        return
      }

      const { password, oldPassword, passwordAgain } = this
      this.working = true
      this.$store
        .dispatch('user/changePassword', {
          password,
          oldPassword,
          passwordAgain,
          $axios: this.$axios
        })
        .then(() => {
          this.password = ''
          this.oldPassword = ''
          this.passwordAgain = ''
          this.$toast.success('Muutokset tallennettu!')
          this.$nextTick(() => {
            this.$v.$reset()
          })
        })
        .catch(err => {
          if (err.response.status === 403) {
            return this.$toast.error(
              `Muutoksia ei tallennettu. Väärä vanha salasana.`
            )
          }

          this.$toast.error(`Muutosten tallentamisessa tapahtui virhe ${err}`)
        })
        .finally(() => {
          this.working = false
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.loader {
  display: flex;
  justify-content: center;
  padding: 50px;
}
</style>
