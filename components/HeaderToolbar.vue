<template>
  <div>
    <md-toolbar class="header-toolbar">
      <nuxt-link :to="{ name: 'index' }">
        <div class="logo">
          <img src="/rento-logo.svg" class="logo-img" />
        </div>
      </nuxt-link>

      <div class="md-toolbar-section-end links">
        <div class="lg-only link-container">
          <nuxt-link
            v-for="route in routes"
            :key="route.name"
            :to="{ name: route.name }"
            :class="{ exact: route.exact }"
          >
            {{ $t(`routes.${route.name}`) }}
          </nuxt-link>
        </div>

        <base-button
          v-if="loggedIn"
          class="md-icon-button lg-hide"
          @click.prevent="togglePanel"
        >
          <md-icon>menu</md-icon>
        </base-button>

        <v-menu v-if="loggedIn" offset-y>
          <template v-slot:activator="{ on }">
            <button v-on="on">
              <v-avatar color="blue" size="36">
                <span class="white--text headline">
                  {{ user.initials }}
                </span>
              </v-avatar>
            </button>
          </template>
          <v-list>
            <nuxt-link
              v-for="route in personalRoutes"
              :key="route.name"
              :to="{ name: route.name }"
              :class="{ exact: route.exact }"
            >
              <v-list-item>
                <v-list-item-title>
                  {{ $t(`routes.${route.name}`) }}
                </v-list-item-title>
              </v-list-item>
            </nuxt-link>
            <v-list-item @click.prevent.stop="logout">
              <v-list-item-title>{{ $t('logout') }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <nuxt-link v-if="!loggedIn" :to="{ name: 'login' }">
          {{ $t('login') }}
        </nuxt-link>
      </div>
    </md-toolbar>

    <!-- Mobile menu -->
    <md-drawer
      v-if="loggedIn"
      :md-active.sync="panelOpen"
      md-swipeable
      class="lg-hide"
    >
      <md-list>
        <md-list-item v-for="route in routes" :key="route.name">
          <nuxt-link :to="{ name: route.name }">
            <base-button @click="togglePanel">
              {{ $t(`routes.${route.name}`) }}
            </base-button>
          </nuxt-link>
        </md-list-item>
      </md-list>
    </md-drawer>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      panelOpen: false
    }
  },

  computed: {
    ...mapState({
      user: state => state.auth.user
    }),

    loggedIn() {
      return !!this.user
    },

    routes() {
      return [
        { name: 'projects', exact: false },
        { name: 'what-is', exact: false },
        { name: 'add-project', exact: false }
      ]
    },

    personalRoutes() {
      return [{ name: 'account', exact: false }]
    }
  },

  methods: {
    togglePanel() {
      this.panelOpen = !this.panelOpen
    },

    logout() {
      this.$auth.logout().then(() => {
        this.$router.push('login')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  display: flex;
  font-family: $font-stack-button;
  font-weight: bold;
  flex-direction: column;
  font-size: 8px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
}

.logo-img {
  height: 30px;
}

.header-toolbar {
  height: 70px;
  padding: 0px $margin-page;
  background-color: white;
}

.headline {
  font-size: 1.2rem !important;
}

.link-container {
  margin-right: 12px;
}

.links {
  margin-left: 30px;

  a,
  a:visited {
    color: $color-text-primary;
    text-decoration: none !important;
    text-transform: uppercase;
    font-family: $font-stack-heading;
    font-weight: bold;
    padding-bottom: 4px;
  }

  a:hover {
    color: $color-text-primary-hover;
  }

  a:not(:last-child) {
    margin-right: 10px;
  }

  .nuxt-link-exact-active.exact,
  .nuxt-link-active:not(.exact) {
    color: $color-primary;
  }
}
</style>
