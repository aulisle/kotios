<template>
  <div>
    <v-menu top offset-y>
      <template v-slot:activator="{ on }">
        <div>
          <v-scale-transition>
            <base-button
              v-if="showInterested()"
              class="md-primary md-raised md-elevation-10 interested-button"
              v-on="on"
            >
              <md-icon class="interested-icon">favorite</md-icon>
              Kiinnostuitko kohteesta?
            </base-button>
          </v-scale-transition>
        </div>
      </template>
      <v-list>
        <v-list-item>Seuraa</v-list-item>
        <v-list-item>Jaa</v-list-item>
        <v-list-item>Ota yhteyttä hankkeeseen</v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      travelled: 0,
      timeout: false
    }
  },

  mounted() {
    if (process.client) {
      window.addEventListener('scroll', () => {
        this.travelled = this.travelled + Math.abs(window.scrollY)
      })

      setTimeout(() => {
        this.timeout = true
      }, 6000)
    }
  },

  methods: {
    showInterested() {
      // eslint-disable-next-line
      return this.travelled > 12000 || this.timeout
    }
  }
}
</script>

<style lang="scss" scoped>
.interested-icon {
  color: white !important;
  margin-right: 10px;
}

.interested-button {
  font-size: 1.15rem;
}
</style>
