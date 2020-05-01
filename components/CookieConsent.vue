<template>
  <transition-pop>
    <v-toolbar v-if="showCookieConsent" class="cookie-consent">
      <div class="consent-content">
        <p class="consent-paragraph">Hyväksy evästeet</p>
        <p class="consent-paragraph">
          Tämä sivusto käyttää evästeitä. Jatkamalla sivuston käyttöä hyväksyt
          evästeiden käytön.

          <nuxt-link :to="{ name: 'data-privacy' }">
            Tietosuojakäytäntö
          </nuxt-link>
        </p>
        <p class="mobile-consent-text">
          Hyväksy eväät.

          <nuxt-link :to="{ name: 'data-privacy' }">
            Tietosuojakäytäntö
          </nuxt-link>
        </p>
        <base-button @click="showCookieConsent = false">
          Sulje
        </base-button>
      </div>
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
  justify-content: stretch;
  width: 100vw;
}

.consent-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  padding-right: $u6;
}

.consent-paragraph {
  margin: 0;
  margin-right: $u2;
  display: none;
}

.mobile-consent-text {
  margin: 0;
}

@include media-breakpoint-up(md) {
  .mobile-consent-text {
    display: none;
  }
  .consent-paragraph {
    display: inline-block;
  }
  .consent-content {
    padding: $u2 $u6;
  }
}
</style>
