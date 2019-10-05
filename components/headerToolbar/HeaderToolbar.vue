<template>
  <div>
    <md-toolbar class="header-toolbar elevation-0" elevation="0">
      <div class="toolbar-section-start">
        <nuxt-link :to="{ name: 'index' }">
          <div class="logo">
            <img src="/rento-logo.svg" class="logo-img" />
          </div>
        </nuxt-link>

        <place-search-input v-if="showSearch" class="search" />
      </div>

      <div class="md-toolbar-section-end links">
        <base-button
          class="md-icon-button lg-hide"
          @click.prevent="togglePanel"
        >
          <md-icon>menu</md-icon>
        </base-button>

        <div class="link-container">
          <nuxt-link
            v-for="route in routes"
            :key="route.name"
            :to="{ name: route.name }"
            :class="{ exact: route.exact }"
            class="lg-only"
          >
            {{ $t(`routes.${route.name}`) }}
          </nuxt-link>

          <nuxt-link v-if="!loggedIn" :to="{ name: 'login' }">
            {{ $t('login') }}
          </nuxt-link>
        </div>

        <account-menu
          v-if="loggedIn"
          :user="user"
          :routes="personalRoutes"
          @logout="logout"
        />
      </div>
    </md-toolbar>

    <!-- Mobile menu -->
    <md-drawer :md-active.sync="panelOpen" md-swipeable class="lg-hide">
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
import AccountMenu from './AccountMenu'
import PlaceSearchInput from '../searchMap/ToolbarPlaceSearchInput'

export default {
  components: {
    AccountMenu,
    PlaceSearchInput
  },

  props: {
    showSearch: { type: Boolean, default: false }
  },

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
        { name: 'search', exact: false },
        { name: 'phenomenon', exact: false },
        { name: 'process', exact: false },
        { name: 'faq', exact: false }
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
.toolbar-section-start {
  display: flex;
  align-items: center;
}

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
  height: $top-bar-height;
  padding: 0px $margin-page;
  background-color: white;
  border-bottom: 1px solid $color-hr;
  box-sizing: border-box;
}

.link-container {
  margin-right: 12px;
  a {
    font-size: $font-s;
  }
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

.search {
  margin-left: 30px;
  width: 20vw;
}
</style>
