<template>
  <div>
    Jaa kohde
    <template v-if="showSocial">
      <social-sharing :url="path()" inline-template>
        <div>
          <network network="email">
            <button class="social"><md-icon>email</md-icon></button>
          </network>
          <network network="facebook">
            <button class="social"><i class="fab fa-facebook-f " /></button>
          </network>
          <network network="twitter">
            <button class="social">
              <i class="fab fa-twitter social" />
            </button>
          </network>
          <network network="whatsapp">
            <button class="social"><i class="fab fa-whatsapp"></i></button>
          </network>
        </div>
      </social-sharing>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSocial: false
    }
  },

  mounted() {
    if (process.client) {
      this.$nextTick(() => {
        this.showSocial = true
      })
    }
  },

  methods: {
    path() {
      return window.location.origin + this.$route.path
    }
  }
}
</script>

<style></style>
