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
      <h2>Upeita hankkeita</h2>
    </div>
  </div>
</template>

<script>
import smoothReflow from 'vue-smooth-reflow'

export default {
  auth: false,

  mixins: [smoothReflow],

  head() {
    return {
      title: this.$createTitle(this.$t('routes.index'))
    }
  },

  data() {
    return {
      search: ''
    }
  }
}
</script>

<style scoped lang="scss">
.hero {
  background: rgba(37, 48, 59, 1);
  background: -moz-linear-gradient(
    -45deg,
    rgba(37, 48, 59, 1) 0%,
    rgba(11, 19, 43, 1) 100%
  );
  background: -webkit-gradient(
    left top,
    right bottom,
    color-stop(0%, rgba(37, 48, 59, 1)),
    color-stop(100%, rgba(11, 19, 43, 1))
  );
  background: -webkit-linear-gradient(
    -45deg,
    rgba(37, 48, 59, 1) 0%,
    rgba(11, 19, 43, 1) 100%
  );
  background: -o-linear-gradient(
    -45deg,
    rgba(37, 48, 59, 1) 0%,
    rgba(11, 19, 43, 1) 100%
  );
  background: -ms-linear-gradient(
    -45deg,
    rgba(37, 48, 59, 1) 0%,
    rgba(11, 19, 43, 1) 100%
  );
  background: linear-gradient(
    135deg,
    rgba(37, 48, 59, 1) 0%,
    rgba(11, 19, 43, 1) 100%
  );
}

.product-name {
  text-transform: uppercase;
}
</style>
