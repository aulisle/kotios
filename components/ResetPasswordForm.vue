<template>
  <form @submit.prevent="sendPasswordReset">
    <md-content class="container page-content">
      <div class="form-column">
        <div v-if="status === null || !status.success">
          <h1>Aseta uusi salasana</h1>
          <p>
            Määritä tilillesi uusi salasana kirjoittamalla se alla oleviin
            kenttiin.
          </p>

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

          <base-button
            class="md-primary md-raised b-full-width"
            :disabled="$v.$invalid"
            @click.stop.prevent="sendPasswordReset"
          >
            Aseta salasana
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
            Salasanasi on nyt vaihdettu.
          </h1>

          <p class="success-prompt">Seuraavaksi voit kirjautua sovellukseen.</p>

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

export default {
  mixins: [SetPasswordMixin],

  data() {
    return {
      tokenId: '',
      status: null
    }
  },

  created() {
    this.tokenId = this.$route.params.id
  },

  methods: {
    sendPasswordReset() {
      this.$v.touch()

      if (this.$v.$invalid) {
        return
      }

      const { tokenId, password, passwordAgain } = this

      this.$axios
        .post(`/api/user/reset-password`, {
          tokenId,
          password,
          passwordAgain
        })
        .then(() => {
          this.status = { success: true }
        })
        .catch(err => {
          this.$toast.error(
            `Uuden salanan asettamisessa tapahtui virhe: ${err}`
          )
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
