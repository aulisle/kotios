<template>
  <div class="">
    <div class="hero">
      <div class="container">
        <h1 class="product-name">Rento</h1>
        <h2>
          Kaikki Suomen asukasläheiset rakennuttamishankkeet ja henkilöt yhdessä
          paikassa.
        </h2>

        <nuxt-link :to="{ name: 'what-is' }">
          Mitä on asukasläheinen rakennuttaminen?
        </nuxt-link>
      </div>
    </div>

    <div class="container">
      <h2 class="featured-heading">Upeita hankkeita</h2>
      <featured-display :featured="featured" />
    </div>
  </div>
</template>

<script>
import FeaturedDisplay from '@/components/featured/FeaturedDisplay'

export default {
  auth: false,

  components: {
    FeaturedDisplay
  },

  head() {
    return {
      title: this.$createTitle(this.$t('routes.index'))
    }
  },

  data() {
    return {}
  },

  asyncData({ $axios }) {
    return $axios.get('/api/featured').then(({ data }) => {
      return {
        featured: data
      }
    })
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
}

.product-name {
  text-transform: uppercase;
}

.featured-heading {
  padding-top: 40px;
  padding-bottom: 30px;
}
</style>
