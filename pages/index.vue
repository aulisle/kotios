<template>
  <div class="">
    <div class="hero">
      <div class="container-base">
        <h1 class="tagline">
          Osallistavien asuntohankkeiden koti
          <nuxt-link :to="{ name: 'rento' }">
            <v-icon class="primary-color">mdi-help-circle-outline</v-icon>
          </nuxt-link>
        </h1>

        <div>
          <nuxt-link :to="{ name: 'phenomenon' }" class="what-is-link">
            Mitä on osallistaminen?
          </nuxt-link>
        </div>

        <div>
          <nuxt-link :to="{ name: 'rento' }" class="what-is-link">
            Mikä on Rento?
          </nuxt-link>
        </div>

        <v-card class="search-card" :elevation="7">
          <v-card-title class="search-title">
            Löydä hankkeita
          </v-card-title>
          <v-card-title class="actions">
            <front-place-search-input />
          </v-card-title>
        </v-card>
      </div>
    </div>

    <div class="container-base">
      <h2 class="featured-heading">Upeita hankkeita</h2>
      <featured-display :featured="featured" />
    </div>
  </div>
</template>

<script>
import FeaturedDisplay from '@/components/featured/FeaturedDisplay'
import FrontPlaceSearchInput from '@/components/searchMap/FrontPlaceSearchInput'

export default {
  auth: false,

  components: {
    FeaturedDisplay,
    FrontPlaceSearchInput
  },

  head() {
    return {
      title: this.$createTitle(this.$t('routes.index'))
    }
  },

  asyncData({ $axios }) {
    return $axios.get('/api/featured').then(({ data }) => {
      return {
        featured: data
      }
    })
  },

  methods: {
    search() {
      if (this.searchQuery) {
        this.$router.push({ name: 'search', query: { city: this.searchQuery } })
      } else {
        this.$router.push({ name: 'search' })
      }
    }
  }
}
</script>

<style scoped lang="scss">
.hero {
  background: rgba(37, 48, 59, 1);
  background: linear-gradient(
    135deg,
    rgba(37, 48, 59, 1) 0%,
    rgba(11, 19, 43, 1) 100%
  );
  background-image: url('/desk.jpg');
  background-size: cover;
  background-position: 0% 100%;

  .tagline {
    font-size: 5rem;
    font-weight: 900;
    margin-bottom: -20px;
    margin-top: 30px;
  }
}

.product-name {
  text-transform: uppercase;
  color: $color-primary;
  font-size: 3.5rem;
  letter-spacing: $tracking-wide;
}

.featured-heading {
  padding-top: 40px;
  padding-bottom: 30px;
}

.search-card {
  margin-top: 200px;
  margin-bottom: 120px;
  max-width: 600px;
  background-color: rgba(#fff, 1);
  background-image: url('/architecture-1857175_1280.jpg');
  background-size: cover;
  padding: 13px 20px;
}

.actions {
  display: flex;
  .md-field {
    width: initial;
    flex-grow: 1;
    margin-right: 20px;
  }
}

.search-title {
  margin-bottom: -10px;
  padding-top: 20px;
  padding-bottom: 0px;
}

.hero-logo {
  margin-left: -15px;
  margin-right: 20px;
}

.what-is-link {
  font-size: 1.5em;
}

.primary-color {
  color: $color-primary !important;
  font-size: $font-xl;
  position: absolute;
  margin-left: 5px;
}
</style>
