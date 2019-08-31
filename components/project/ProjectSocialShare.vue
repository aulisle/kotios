<template>
  <div class="project-social">
    <h2 class="align-right-lg">
      Tee kohteesta menestys
    </h2>
    <p class="align-right-lg">
      Jaa kohde
    </p>

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

<style lang="scss" global>
.project-social {
  .network-icons {
    display: flex;
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

@media (min-width: 992px) {
  .align-right-lg {
    padding-bottom: 5px;
    padding-top: 0px;
    margin: 0px !important;
    text-align: right;
  }

  .network-icons {
    justify-content: flex-end;
  }
}
</style>
