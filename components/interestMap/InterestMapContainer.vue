<template>
  <div class="interest-map-layout">
    <v-card class="drawer-card">
      <v-navigation-drawer
        v-model="drawerModel"
        permanent
        floating
        class="drawer"
        :width="mini ? null : '360px'"
        :mini-variant="mini"
        mini-variant-width="40px"
      >
        <div v-if="mode === 'browse' && !mini" class="browse-content">
          <base-icon class="hide-button" @click="hideDrawer">
            mdi-chevron-left
          </base-icon>

          <h2>KOTIOS-kartta</h2>
          <p>
            Kartalta näet, missä on käynnissä olevia hankkeita ja
            osallistumisesta kiinnostuneita asukkaita.
          </p>

          <h3 class="dream-section">Lisää alue unelmalistalle</h3>
          <p>
            Oletko kiinnostunut osallistumisesta? Ota ensiaskel kotisi
            hankintaan ja lisää alue omalle unelmalistallesi.
          </p>
          <p>
            Unelmalista on oma listasi, johon voit kerätä kiinnostavia kohteita.
            Saat myös sähköpostiisi uutisia niistä.
          </p>
          <base-button
            block
            large
            color="accent"
            :to="{ name: 'interest-map-add' }"
          >
            Lisää alue unelmalistalle
          </base-button>
        </div>
        <template v-else-if="mode === 'browse'">
          <v-list-item>
            <v-icon @click.stop="openDrawer">mdi-chevron-right</v-icon>
          </v-list-item>
        </template>
        <template v-else>
          <v-list-item>
            <v-icon @click.stop="back">mdi-chevron-left</v-icon>
          </v-list-item>
        </template>
      </v-navigation-drawer>
    </v-card>
    <interest-map class="interest-map">
      <slot />
    </interest-map>
  </div>
</template>

<script>
import InterestMap from './Map'
import { mapState } from 'vuex'

export default {
  components: {
    InterestMap
  },

  data() {
    return {
      minified: false,
      drawerModel: null
    }
  },

  computed: {
    ...mapState('interestMap', ['mode']),
    mini() {
      return this.mode === 'add' || (this.mode === 'browse' && this.minified)
    }
  },
  methods: {
    back() {
      this.$router.push({ name: 'interest-map' })
    },

    hideDrawer() {
      this.minified = true
    },

    openDrawer() {
      this.minified = false
    }
  }
}
</script>

<style lang="scss" scoped>
.interest-map {
  position: relative;
  height: calc(100vh - #{$top-bar-height});
  flex-grow: 1;
}

.drawer-card {
  padding: $u2 $u2;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: absolute;
  top: $u3;
  left: $u3;
  z-index: 10;
  max-height: 80vh;
}

.drawer {
  overflow-x: hidden;
  max-width: 70vw;
}

.dream-section {
  margin-top: $u5;
}

.hide-button {
  margin-bottom: $u3;
}

.browse-content {
  width: 360px;
  padding: $u1 $u1;
  overflow-x: hidden;
  max-width: 70vw;
}

@include media-breakpoint-up(xxl) {
  .dream-section {
    margin-top: $u15;
  }
}
</style>
