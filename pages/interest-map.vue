<template>
  <interest-map class="interest-map">
    <nuxt-child />
  </interest-map>
</template>

<script>
import InterestMap from '@/components/interestMap/Map'

export default {
  components: {
    InterestMap
  },
  layout: 'interest-map'
}
</script>

<style lang="scss" scoped>
.interest-map {
  position: relative;
  height: calc(100vh - #{$top-bar-height});
}
</style>
