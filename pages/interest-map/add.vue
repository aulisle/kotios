<template>
  <div class="container-base">
    <map-heading title="Lisää unelmakoti" :back="{ name: 'interest-map' }" />
    <div class="map-center">
      <base-icon size="48" class="map-marker-aim">mdi-map-marker</base-icon>
    </div>
    <div class="map-bottom">
      <base-button block large color="accent" @click="createDream">
        Kohteen määrittämiseen
      </base-button>
    </div>
  </div>
</template>

<script>
import MapHeading from '@/components/interestMap/MapHeading'
import { TYPES } from '@/store/defineDream'
export default {
  components: {
    MapHeading
  },
  fetch({ store }) {
    store.commit('interestMap/setMode', 'add')

    store.commit('defineDream/initType', TYPES.AREA)
    store.commit('defineDream/setValue', {
      field: 'center',
      value: store.state.interestMap.center
    })
  },

  methods: {
    createDream() {
      this.$store.dispatch('defineDream/saveNew').then(() => {
        this.$router.push({ name: 'dream-step-2' })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.map-center {
  position: absolute;
  top: 50%;
  bottom: 50%;
  left: 50%;
  right: 50%;
}

.map-bottom {
  position: absolute;
  top: auto;
  bottom: $u4;
  left: $u5;
  right: $u8;
}

.map-marker-aim {
  transform: translate(-50%, -100%);
}

@include media-breakpoint-up(lg) {
  .map-bottom {
    left: $u10;
    right: $u10;
  }
}
</style>
