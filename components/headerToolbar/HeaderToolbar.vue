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
            class="link-item"
          >
            {{ $t(`routes.${route.name}`) }}
          </nuxt-link>

          <nuxt-link
            v-for="route in extraRoutes"
            :key="route.name"
            :to="{ name: route.name }"
            :class="{ exact: route.exact }"
            class="extra link-item"
          >
            {{ $t(`routes.${route.name}`) }}
          </nuxt-link>

          <base-dropdown :active.sync="dropdownOpen" class="extra-dropdown">
            <template v-slot:activator="{ on }">
              <base-button
                color="secondary"
                text
                class="extra-toggle"
                v-on="on"
              >
                <base-icon color="secondary">mdi-dots-horizontal</base-icon>
              </base-button>
            </template>
            <template>
              <v-list flat tile dark class="extra-dropdown-list">
                <v-list-item
                  v-for="route in extraRoutes"
                  :key="route.name"
                  :to="{ name: route.name }"
                  :class="{ exact: route.exact }"
                  class="extra-list-item link-item"
                  active-class="nuxt-link-active"
                  exact-active-class="nuxt-link-exact-active"
                  @click="closeDropdown"
                >
                  <v-list-item-content class="extra-dropdown-content">
                    {{ $t(`routes.${route.name}`) }}
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </template>
          </base-dropdown>
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
      <v-list dark flat tile>
        <!-- Basic routes -->
        <v-list-item
          v-for="route in routes"
          :key="route.name"
          :to="{ name: route.name }"
          :class="{ exact: route.exact }"
          active-class="nuxt-link-active"
          exact-active-class="nuxt-link-exact-active"
          class="link-item"
          @click="togglePanel"
        >
          <v-list-item-content>
            {{ $t(`routes.${route.name}`) }}
          </v-list-item-content>
        </v-list-item>
        <!-- Extra routes -->
        <v-list-item
          v-for="route in extraRoutes"
          :key="route.name"
          :to="{ name: route.name }"
          active-class="nuxt-link-active"
          exact-active-class="nuxt-link-exact-active"
          class="link-item"
          @click="togglePanel"
        >
          <v-list-item-content>
            {{ $t(`routes.${route.name}`) }}
          </v-list-item-content>
        </v-list-item>
      </v-list>
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
      panelOpen: false,
      dropdownOpen: false
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
        { name: 'index', exact: true },
        { name: 'phenomenon', exact: false },
        { name: 'projects', exact: false },
        { name: 'interest-map', exact: false }
      ]
    },
    extraRoutes() {
      return [
        { name: 'faq', exact: false },
        { name: 'contact', exact: false }
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

    closeDropdown() {
      this.dropdownOpen = false
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
}

.link-item {
  color: $color-text-secondary;
  &.nuxt-link-active.exact {
    color: $color-text-secondary;
  }

  &.nuxt-link-exact-active.exact,
  &.nuxt-link-active:not(.exact) {
    color: $color-text-primary-hover;
  }
}

.extra-list-item {
  margin-right: 0 !important;
}

.extra-dropdown-content {
  white-space: nowrap;
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

  .extra {
    display: none;
  }
}

.mobile-menu-drawer {
  background: $color-primary;
  padding-top: $u5;
}

.extra-dropdown-list {
  padding-top: $u1;
}

@include media-breakpoint-up(xl) {
  .mobile-menu-drawer,
  .mobile-menu-toggle {
    display: none;
  }

  .desktop-link-container {
    display: block;
  }
}

@include media-breakpoint-up(xxl) {
  .desktop-link-container {
    .extra {
      display: inline;
    }

    .extra-toggle,
    .extra-dropdown {
      display: none;
    }
  }
}

.search {
  margin-left: 30px;
  width: 20vw;
}
</style>
