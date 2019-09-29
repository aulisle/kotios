const mixin = {
  data() {
    return {
      mSearchQuery: '',
      suggestionQueryId: 0,
      placeSuggestions: []
    }
  },

  methods: {
    suggest() {
      const queryId = this.suggestionQueryId + 1
      this.suggestionQueryId = queryId

      this.$axios
        .get('/api/search/place-suggestions', {
          params: { query: this.mSearchQuery }
        })
        .then(({ data }) => {
          if (this.suggestionQueryId === queryId) {
            this.placeSuggestions = data
          }
        })
        .catch(e => {
          // eslint-disable-next-line
          console.log('ERROR', e)
        })
    },

    launchSearch() {
      this.$store.dispatch('search/search', {
        query: {
          query: this.mSearchQuery
        },
        $router: this.$router,
        $axios: this.$axios
      })
    },

    updateSearchQuery(value) {
      if (value.description) {
        this.mSearchQuery = value.description
      } else {
        this.mSearchQuery = value
      }

      this.suggest()
    },

    selectSearch() {
      this.launchSearch()
    }
  }
}

export default mixin
