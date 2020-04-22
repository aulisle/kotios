<template>
  <transition-pop>
    <v-toolbar v-if="showCookieConsent" class="cookie-consent">
      <p>Hyväksy evästeet</p>
      <p>
        Tämä sivusto käyttää evästeitä. Jatkamalla sivuston käyttöä hyväksyt
        evästeiden käytön.

        <nuxt-link :to="{ name: 'data-privacy' }">
          Tietosuojakäytäntö
        </nuxt-link>
      </p>

      <base-button @click="showCookieConsent = false">
        Sulje
      </base-button>
    </v-toolbar>
  </transition-pop>
</template>

<script>
export default {
  data() {
    return {
      showCookieConsent: false
    }
  },

  created() {
    if (process.client) {
      this.$nextTick(() => {
        const consent = localStorage.getItem('cookie-consent')

        if (consent == null) {
          this.showCookieConsent = true
          localStorage.setItem('cookie-consent', 'true')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.cookie-consent {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  padding: 15px;
}
</style>
