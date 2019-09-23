<template>
  <div class="results">
    <h2 class="results-header">Kohteita {{ results.length }}</h2>

    <nuxt-link
      v-for="result in results"
      :key="result.id"
      :to="{ name: 'project-id', params: { id: result.id } }"
    >
      <v-card
        class="result-card elevation-1"
        @mouseover="setHover(result.id)"
        @mouseleave="setHover(null)"
      >
        <img src="torppala/header.png" class="thumbnail" />
        <div>
          <v-card-title>
            {{ result.title }}
          </v-card-title>
          <v-card-text>
            {{ result.description }}
          </v-card-text>
        </div>
      </v-card>
    </nuxt-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('search', ['results'])
  },

  beforeDestroy() {
    this.$store.commit('search/setHoveredId', null)
  },

  methods: {
    setHover(id) {
      this.$store.commit('search/setHoveredId', id)
    }
  }
}
</script>

<style lang="scss">
.results-header {
  padding-top: 20px;
  padding-bottom: 40px;
  font-weight: 700;
}

.results {
  padding: 35px;
}

.result-card {
  margin-bottom: 20px;
  display: flex;
}

.thumbnail {
  width: 40%;
}
</style>
