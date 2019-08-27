export const state = () => ({
  initialised: false,
  solutions: [],
  nextPage: null,
  totalSolutions: 0
})

export const mutations = {
  setSolutions(state, newSolutions) {
    state.initialised = true
    state.solutions = newSolutions
  },

  setNextPage(state, nextPage) {
    state.nextPage = nextPage
  },

  setTotalSolutions(state, totalSolutions) {
    state.totalSolutions = totalSolutions
  }
}

export const getters = {
  // Maps the contents of the products store with the solutions
  // in this store
  solutionsWithProducts: (state, getters, rootState) => {
    const tempData = JSON.parse(JSON.stringify(state.solutions))

    if (rootState.products.initialised) {
      const productDetails = rootState.products.productsById
      return tempData.map(solution => {
        const solutionProducts = solution.products.map(id => {
          return productDetails[id]
        })

        return {
          ...solution,
          products: solutionProducts
        }
      })
    }

    return tempData
  }
}

const LIMIT = 10

export const actions = {
  init({ commit }, { $axios }) {
    if (state.initialised) {
      return new Promise(resolve => resolve())
    }

    return $axios
      .get(`/api/solutions`, {
        params: {
          page: 1,
          limit: LIMIT
        }
      })
      .then(({ data }) => {
        commit('setTotalSolutions', data.totalDocs)
        commit('setNextPage', data.nextPage)
        commit('setSolutions', data.docs)
      })
  },

  loadMore({ commit, state }, { $axios }) {
    return $axios
      .get(`/api/solutions`, {
        params: {
          page: state.nextPage,
          limit: LIMIT
        }
      })
      .then(({ data }) => {
        const newSolutions = [...state.solutions, ...data.docs]
        commit('setNextPage', data.nextPage)
        commit('setSolutions', newSolutions)
      })
  }
}
