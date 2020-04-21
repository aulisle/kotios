<template>
  <v-app class="app">
    <header-toolbar />
    <div class="app-container">
      <nuxt />
    </div>
    <cookie-consent />
  </v-app>
</template>

<script>
import HeaderToolbar from '~/components/headerToolbar/HeaderToolbar.vue'
import CookieConsent from '~/components/CookieConsent.vue'

export default {
  components: {
    HeaderToolbar,
    CookieConsent
  }
}
</script>

<style lang="scss" scoped>
.title {
  margin: 0;
}

.app {
  height: 100vh;
}
</style>
