<template>
  <v-slide-y-transition>
    <v-toolbar v-if="showBar" flat class="interested-bar">
      <div class="container-base bar-content">
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
    </v-toolbar>
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
  z-index: 1000;
  width: 100%;
}
.bar-content {
  display: flex;
  align-items: center;
}
.close-button {
  margin-left: $u2;
}
</style>
