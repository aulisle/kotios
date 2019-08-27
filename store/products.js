export const state = () => ({
  initialised: false,
  products: [],
  productsById: {}
})

export const mutations = {
  setProducts(state, newProducts) {
    state.initialised = true
    state.products = newProducts

    // Populate the map
    state.productsById = {}
    newProducts.forEach(product => {
      state.productsById[product._id] = product
    })
  }
}

export const actions = {
  init({ commit }, { $axios }) {
    if (state.initialised) {
      return new Promise(resolve => resolve())
    }

    return $axios.get(`/api/products`).then(({ data }) => {
      commit('setProducts', data)
    })
  }
}
