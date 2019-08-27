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

<style lang="scss" scoped>
.button,
.button:visited {
  display: inline-block;
  color: black;
  letter-spacing: 1px;
  background-color: #fff;
  border: 2px solid #000;
  text-decoration: none;
  text-transform: uppercase;
  padding: 15px 45px;
}

.button:hover,
.button:focus {
  color: #fff;
  background-color: #000;
}

.title {
  margin: 0;
}
</style>
