<template>
  <div class="container-base">
    <map-heading title="Selaa pöhinää" :back="{ name: 'index' }" />
    <div class="map-top">
      <div class="add-button-container">
        <v-btn
          fab
          color="accent"
          :to="{ name: 'interest-map-add' }"
          class="add-button"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        Lisää kohde
      </div>
    </div>
  </div>
</template>

<script>
import MapHeading from '@/components/interestMap/MapHeading'

export default {
  components: {
    MapHeading
  },
  fetch({ store }) {
    store.commit('interestMap/setMode', 'browse')
  }
}
</script>

<style lang="scss" scoped>
.map-top {
  left: $margin-page;
  right: $margin-page;
  top: $u10;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
}

.add-button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
