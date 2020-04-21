<template>
  <footer class="footer">
    <div class="column copyright">
      © Kotios 2020 – kotios.fi
    </div>

    <div class="links-row">
      <div class="column links-column">
        Jaa sivu
        <!-- Only show social on the client side -->
        <template v-if="showSocial">
          <social-sharing :url="path()" inline-template>
            <div>
              <network network="email">
                <button><md-icon class="social">email</md-icon></button>
              </network>
              <network network="facebook">
                <button class="social"><i class="fab fa-facebook-f " /></button>
              </network>
              <network network="twitter">
                <button class="social">
                  <i class="fab fa-twitter social" />
                </button>
              </network>
            </div>
          </social-sharing>
        </template>
      </div>
      <div class="column">
        <nuxt-link
          v-for="link in links"
          :key="link"
          :to="{ name: link }"
          class="link"
        >
          {{ $t(`routes.${link}`) }}
        </nuxt-link>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      showSocial: false
    }
  },

  computed: {
    links() {
      return ['data-privacy', 'for-partners']
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

<style lang="scss" scoped>
footer {
  padding: 30px;
  background-color: $color-primary;
  color: $color-text-alt;
  display: flex;
  justify-content: space-between;
  z-index: 1;
}

.column {
  display: flex;
  flex-direction: column;
}

.link,
.link:visited {
  color: white !important;
}

.links-row {
  display: flex;
}

.links-column {
  margin-right: 40px;
}

.logo {
  margin-bottom: 15px;
}

.column.copyright {
  align-items: center;
}
</style>

<style lang="scss">
footer {
  .social {
    width: 25px;
    height: 25px;
    line-height: 30px;
    margin-right: 5px;
  }
}
i.social.md-icon.md-theme-default {
  color: white;
}
</style>
