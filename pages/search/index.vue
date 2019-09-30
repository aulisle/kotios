<template>
  <div class="page">
    <v-card class="result-column">
      <v-navigation-drawer permanent width="100%">
        <results />
      </v-navigation-drawer>
    </v-card>
    <rento-map class="search-map" :class="{ fixed: isFixed }" />
  </div>
</template>

<script>
import RentoMap from '@/components/searchMap/Map'
import Results from '@/components/searchResults/Results'

export default {
  layout: 'search',

  head() {
    return {
      title: this.$createTitle(this.$route.query.query)
    }
  },

  components: {
    RentoMap,
    Results
  },

  data() {
    return {
      scrollPos: 0
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
$search-res-width: 900px;

.page {
  display: flex;
  flex-grow: 1;
  justify-content: stretch;
  align-items: stretch;
}

.search-map {
  width: calc(100vw - #{$search-res-width} - 15px);
  height: 100vh;
}

.result-column {
  width: $search-res-width;
  flex-shrink: 0;
}

.fixed {
  position: fixed;
  top: 0;
  margin-left: $search-res-width;
  z-index: 0;
}
</style>
