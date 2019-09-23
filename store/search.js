import mockResults from './mockSearchResults'

export const state = () => ({
  results: mockResults,
  hoveredId: null
})

export const mutations = {
  setHoveredId: (state, payload) => {
    state.hoveredId = payload
  }
}

export const getters = {}

export const actions = {}
