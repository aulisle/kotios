export const state = () => ({
  searchQuery: '',
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
  initSearch({ commit, dispatch }, { query, $axios }) {
    if (query.query) {
      commit('setSearchQuery', query.query)
    } else {
      commit('setSearchQuery', '')
    }

    return dispatch('doSearch', { $axios })
  },

  search({ commit, state, dispatch }, { query, $axios, $router }) {
    if (query.query) {
      commit('setSearchQuery', query.query)
    } else {
      commit('setSearchQuery', '')
    }

    if ($router) {
      $router.push({
        name: 'search',
        query: { query: state.searchQuery }
      })
    }

    return dispatch('doSearch', { $axios })
  },

  doSearch({ commit, state }, { $axios }) {
    commit('setResultsLoading', true)
    const searchRequestId = state.searchRequestId + 1
    commit('setSearchRequestId', searchRequestId)

    return $axios
      .get('/api/search/projects', {
        params: { query: state.searchQuery }
      })
      .then(({ data }) => {
        if (searchRequestId === state.searchRequestId) {
          commit('setResults', { results: data.results, total: data.total })
          commit('setBoundingBox', data.boundingBox)
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
