<template>
  <div>
    <md-toolbar class="header-toolbar elevation-0" elevation="0">
      <div class="toolbar-section-start">
        <nuxt-link :to="{ name: 'index' }">
          <div class="logo">Koti<span class="narrow">os</span></div>
        </nuxt-link>
        <nuxt-link :to="{ name: 'beta-notice' }" class="beta-link">
          Beta
          <base-icon class="info-icon" color="text-secondary">
            mdi-information
          </base-icon>
        </nuxt-link>

        <place-search-input v-if="showSearch" class="search" />
      </div>

      <div class="md-toolbar-section-end links">
        <base-button
          color="secondary"
          text
          class="mobile-menu-toggle"
          @click.prevent="togglePanel"
        >
          <base-icon color="secondary">mdi-menu</base-icon>
        </base-button>

        <div class="desktop-link-container">
          <nuxt-link
            v-for="route in routes"
            :key="route.name"
            :to="{ name: route.name }"
            :class="{ exact: route.exact }"
          >
            {{ $t(`routes.${route.name}`) }}
          </nuxt-link>
        </div>
      </div>
    </md-toolbar>
    <div class="pseudo-header" />

    <!-- Mobile menu -->
    <md-drawer
      :md-active.sync="panelOpen"
      md-swipeable
      class="mobile-menu-drawer"
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
import PlaceSearchInput from '../searchMap/ToolbarPlaceSearchInput'

export default {
  components: {
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
        { name: 'phenomenon', exact: false },
        { name: 'interest-map', exact: false },
        { name: 'kotios', exact: false },
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
  font-weight: 900;
  font-size: 16px;
  text-transform: uppercase;
  color: $color-text-secondary;
  align-items: baseline;
  .narrow {
    font-weight: 400;
  }
}

.beta-link {
  display: flex;
  align-items: center;
  color: $color-text-secondary !important;
  opacity: 0.4;
  margin-left: $u2;

  .info-icon {
    margin-left: $u1;
    color: $color-text-secondary !important;
  }
}

.header-toolbar {
  height: $top-bar-height;
  padding: 0px $margin-page;
  background-color: $color-primary;
  box-sizing: border-box;
  position: fixed;
}

.pseudo-header {
  height: $top-bar-height;
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
    padding-bottom: $u1;
  }

  a:hover {
    color: $color-text-primary-hover;
  }

  a:not(:last-child) {
    margin-right: 10px;
  }

  .nuxt-link-exact-active.exact,
  .nuxt-link-active:not(.exact) {
    color: $color-text-primary-hover;
  }
}

.desktop-link-container {
  display: none;
  margin-right: 12px;
  a,
  a:visited {
    font-size: $font-s;
    color: $color-text-secondary;
  }
  a:hover {
    color: $color-text-primary-hover;
  }
}

@include media-breakpoint-up(lg) {
  .mobile-menu-drawer,
  .mobile-menu-toggle {
    display: none;
  }

  .desktop-link-container {
    display: block;
  }
}

.search {
  margin-left: 30px;
  width: 20vw;
}
</style>
