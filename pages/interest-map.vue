<template>
  <interest-map-container class="interest-map">
    <nuxt-child />
  </interest-map-container>
</template>

<script>
import InterestMapContainer from '@/components/interestMap/InterestMapContainer'

export default {
  components: {
    InterestMapContainer
  },
  layout: 'interest-map'
}
</script>

<style lang="scss" scoped></style>
