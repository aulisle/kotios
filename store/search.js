export const state = () => ({
  searchQuery: '',
  searchBounds: null,
  searchRequestId: 0,

  results: [],
  resultsTotal: 0,
  resultsLoading: false,

  hoveredId: null,

  boundingBox: {}
})

export const mutations = {
  setHoveredId: (state, payload) => {
    state.hoveredId = payload
  },

  setSearchQuery: (state, query) => {
    state.searchQuery = query
    state.searchBounds = null
  },

  setSearchBounds: (state, bounds) => {
    state.searchBounds = bounds
  },

  setResultsLoading: (state, loading) => {
    state.setResults = loading
  },

  setBoundingBox: (state, boundingBox) => {
    state.boundingBox = boundingBox
  },

  setSearchRequestId: (state, requestId) => {
    state.searchRequestId = requestId
  },

  setResults: (state, { results, total }) => {
    state.results = results
    state.resultsTotal = total

    const found = results.forEach(element => {
      if (element.id === state.hoveredId) {
        return true
      }

      return false
    })

    if (!found) {
      state.hoveredId = null
    }
  }
}

export const getters = {}

export const actions = {
  initSearch({ commit, dispatch }, { query }) {
    if (query.query) {
      commit('setSearchQuery', query.query)
    } else {
      commit('setSearchQuery', '')
    }

    return dispatch('doSearch')
  },

  search({ commit, state, dispatch }, { query, $router }) {
    if (query.query) {
      commit('setSearchQuery', query.query)
    }

    if (query.bounds) {
      commit('setSearchBounds', query.bounds)
    }

    if ($router && query.query) {
      $router.push({
        name: 'search',
        query: { query: state.searchQuery }
      })
    }

    return dispatch('doSearch', { setBoundingBox: !query.bounds })
  },

  doSearch({ commit, state }, params) {
    let setBoundingBox = true

    if (params) {
      setBoundingBox = params.boundingBox
    }

    commit('setResultsLoading', true)
    const searchRequestId = state.searchRequestId + 1
    commit('setSearchRequestId', searchRequestId)

    return this.$axios
      .get('/api/search/projects', {
        params: { query: state.searchQuery, bounds: state.searchBounds }
      })
      .then(({ data }) => {
        if (searchRequestId === state.searchRequestId) {
          commit('setResults', { results: data.results, total: data.total })

          if (setBoundingBox) {
            // If bounds have been set by the user by dragging the map
            // do not update
            commit('setBoundingBox', data.boundingBox)
          }
        }
      })
      .catch(e => {
        // eslint-disable-next-line
        console.error(e)
      })
      .finally(() => {
        commit('setResultsLoading', false)
      })
  }
}
