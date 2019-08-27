<template>
  <div>
    <h1>Käyttäjiä {{ users.total.value }}</h1>
    <div>
      <v-avatar v-for="user in users.hits" :key="user.id" color="blue">
        <span class="white--text headline">
          {{ user._source.firstName[0] + user._source.lastName[0] }}
        </span>
      </v-avatar>
    </div>
    <base-input v-model="searchQuery" label="Etsi" />
    <div>{{ suggestions }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      searchId: 0,
      suggestions: {}
    }
  },

  watch: {
    searchQuery(newQuery) {
      const searchId = this.searchId + 1
      this.searchId = searchId

      this.$axios
        .get(`/api/search/users/suggest/${newQuery}`)
        .then(({ data }) => {
          if (this.searchId === searchId) {
            this.suggestions = data
          }
        })
    }
  },

  asyncData({ $axios }) {
    return $axios.get('/api/search/users').then(res => {
      return {
        users: res.data
      }
    })
  }
}
</script>

<style></style>
