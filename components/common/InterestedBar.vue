<template>
  <v-slide-y-transition>
    <div v-if="showBar" class="interested-bar">
      <div class="container-wide bar-content">
        Kiinnostuitko?
        <v-spacer />
        <base-button color="primary" text small @click="toProjects">
          Katso avoimet hankkeet
        </base-button>
        tai
        <base-button color="primary" text small @click="toDreamMap">
          Aloita unelmakotisi suunnittelu
        </base-button>

        <base-icon class="close-button" @click="close">mdi-close</base-icon>
      </div>
    </div>
  </v-slide-y-transition>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('interestedBar', ['showBar'])
  },

  methods: {
    toProjects() {
      this.close()
      this.$router.push({ name: 'projects' })
    },
    toDreamMap() {
      this.close()
      this.$router.push({ name: 'interest-map' })
    },

    close() {
      this.$store.dispatch('interestedBar/closeInterestedBar')
      this.show = false
    }
  }
}
</script>

<style lang="scss" scoped>
.interested-bar {
  position: fixed;
  z-index: 10;
  width: 100%;
  background: $color-text-secondary;
}

.bar-content {
  position: relative;
  padding: $u1;
  padding-right: $u2;
}

.close-button {
  position: absolute;
  top: $u1;

  right: -$u2;
}

@include media-breakpoint-up(lg) {
  .bar-content {
    align-items: center;
    display: flex;
  }

  .close-button {
    position: relative;
    top: 0;
    margin-right: $u2;
  }
}
</style>
