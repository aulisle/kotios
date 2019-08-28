<template>
  <div class="page">
    <rento-map class="search-map" />
  </div>
</template>

<script>
import RentoMap from '@/components/searchMap/Map'

export default {
  components: {
    RentoMap
  }
}
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-grow: 1;
  justify-content: stretch;
  align-items: stretch;
}

.search-map {
  width: 100%;
  min-height: calc(100vh - #{$top-bar-height});
}
</style>
