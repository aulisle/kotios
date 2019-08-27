<template>
  <v-app class="app">
    <header-toolbar />
    <div class="app-container">
      <nuxt />
    </div>
    <footer-toolbar />
    <cookie-consent />
  </v-app>
</template>

<script>
import HeaderToolbar from '~/components/HeaderToolbar.vue'
import FooterToolbar from '~/components/Footer.vue'
import CookieConsent from '~/components/CookieConsent.vue'

export default {
  components: {
    HeaderToolbar,
    FooterToolbar,
    CookieConsent
  }
}
</script>

<style></style>
