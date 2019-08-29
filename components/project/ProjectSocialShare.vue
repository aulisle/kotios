<template>
  <div class="project-social">
    <h2>
      Tee kohteesta menestys jakamalla se kavereillesi
    </h2>

    <template v-if="showSocial">
      <social-sharing :url="path()" inline-template>
        <div class="network-icons">
          <network network="email">
            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <button class="social-btn email" v-on="on">
                  <md-icon class="icon">email</md-icon>
                </button>
              </template>
              <span>{{ $t('email') }}</span>
            </v-tooltip>
          </network>

          <network network="facebook">
            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <button class="social-btn facebook" v-on="on">
                  <i class="fab fa-facebook-f icon" />
                </button>
              </template>
              <span>Facebook</span>
            </v-tooltip>
          </network>

          <network network="twitter">
            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <button class="social-btn twitter" v-on="on">
                  <i class="fab fa-twitter icon" />
                </button>
              </template>
              <span>Twitter</span>
            </v-tooltip>
          </network>

          <network network="whatsapp">
            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <button class="social-btn whatsapp" v-on="on">
                  <i class="fab fa-whatsapp icon"></i>
                </button>
              </template>
              <span>Whatsapp</span>
            </v-tooltip>
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

<style lang="scss">
.project-social {
  h2 {
    padding-bottom: 10px;
    text-align: right;
  }
  .network-icons {
    display: flex;
    justify-content: flex-end;
    margin-left: -5px;
  }

  .social-btn {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-left: 5px;

    &.email {
      background-color: #333;
    }

    &.facebook {
      background-color: $color-facebook;
    }

    &.twitter {
      background-color: $color-twitter;
    }

    &.whatsapp {
      background-color: $color-whatsapp;
    }

    .icon {
      color: white !important;
      font-size: 20px;
      line-height: 50px;
    }
  }
}
</style>
