<template>
  <div class="page">
    <v-card class="result-column" :class="{ 'show-mobile': !showMap }">
      <v-navigation-drawer permanent width="100%">
        <div class="show-map-container">
          <base-button
            class="switch-show-button md-raised md-primary"
            @click="showMap = !showMap"
          >
            Näytä kartta
          </base-button>
        </div>

        <results />
      </v-navigation-drawer>
    </v-card>
    <div class="search-map" :class="{ fixed: isFixed, 'show-mobile': showMap }">
      <div class="show-list-container">
        <base-button
          class="switch-show-button md-raised md-primary"
          @click="showMap = !showMap"
        >
          Näytä listaus
        </base-button>
      </div>
      <kotios-map class="map-content" />
    </div>
  </div>
</template>

<script>
import KotiosMap from '@/components/searchMap/Map'
import Results from '@/components/searchResults/Results'

export default {
  layout: 'search',

  head() {
    return {
      title: this.$createTitle(this.$route.query.query)
    }
  },

  components: {
    KotiosMap,
    Results
  },

  data() {
    return {
      scrollPos: 0,
      showMap: false
    }
  },

  computed: {
    isFixed() {
      return this.scrollPos > 70
    }
  },

  watch: {
    $route(to) {
      if (!to.query.query || typeof to.query.query !== 'string') {
        to.query.query = 'Suomi'
      }

      this.$store.dispatch('search/initSearch', {
        query: to.query,
        $axios: this.$axios
      })
    }
  },

  fetch({ store, query, $axios }) {
    if (!query.query || typeof query.query !== 'string') {
      query.query = 'Suomi'
    }

    return store.dispatch('search/initSearch', { query, $axios })
  },

  mounted() {
    if (process.client) {
      window.addEventListener('scroll', this.onScroll)
      this.scrollPos = window.scrollY
    }
  },

  methods: {
    onScroll() {
      this.scrollPos = window.scrollY
    }
  }
}
</script>

<style lang="scss" scoped>
$search-res-width-md: 490px;
$search-res-width-l: 600px;
$search-res-width-lg: 900px;

.page {
  display: flex;
  flex-grow: 1;
  justify-content: stretch;
  align-items: stretch;
}

.search-map {
  width: 100vw;
  height: 100vh;
  display: flex;
  position: absolute;

  justify-content: stretch;
  align-items: stretch;
  z-index: 0;

  .map-content {
    flex-grow: 1;
  }
}

.result-column {
  width: 100vw;
  flex-shrink: 0;
  z-index: 1;
  display: none;
}

.show-mobile {
  &.result-column {
    display: block;
  }
}

.show-map-container,
.show-list-container {
  z-index: 10;
  display: flex;
  justify-content: center;
}

.show-list-container {
  position: absolute;
  width: 100%;
}

@media screen and (min-width: #{$search-breakpoint-md}) {
  .show-list-container,
  .show-map-container {
    display: none;
  }

  .search-map {
    position: relative;
    display: flex;
    width: calc(100vw - #{$search-res-width-md} - 15px);
  }

  .result-column {
    display: block;
    width: $search-res-width-md;
    flex-shrink: 0;
  }

  .fixed {
    position: fixed;
    top: 0;
    margin-left: $search-res-width-md;
    z-index: 0;
  }
}

@media screen and (min-width: #{$search-breakpoint-l}) {
  .search-map {
    width: calc(100vw - #{$search-res-width-l} - 15px);
  }

  .result-column {
    width: $search-res-width-l;
  }

  .fixed {
    margin-left: $search-res-width-l;
  }
}

@media screen and (min-width: #{$search-breakpoint-xl}) {
  .search-map {
    width: calc(100vw - #{$search-res-width-lg} - 15px);
  }

  .result-column {
    width: $search-res-width-lg;
  }

  .fixed {
    margin-left: $search-res-width-lg;
  }
}
</style>
