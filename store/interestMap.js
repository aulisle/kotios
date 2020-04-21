import Areas from './data/areas.json'
import Projects from './data/projects.json'

let boundingBox = {
  southwest: {
    lng: 20.6455928891,
    lat: 59.846373196
  },
  northeast: {
    lng: 31.5160921567,
    lat: 70.1641930203
  }
}

export const state = () => ({
  boundingBox,
  mode: 'browse',
  center: {
    lng: 26.0808425229,
    lat: 65.0052831081
  }
})

export const mutations = {
  setMode(state, value) {
    state.mode = value
  },
  setCenter(state, value) {
    state.center = value
  },
  setBoundingBox(state, value) {
    state.boundingBox = value
  },

  fromStore(state, storedValue) {
    state.boundingBox = storedValue.boundingBox
      ? storedValue.boundingBox
      : state.boundingBox

    state.center = storedValue.center ? storedValue.center : state.center
  }
}

export const getters = {
  areas: () => {
    return [...Areas]
  },
  projects: () => {
    return [...Projects]
  },
  project: () => id => {
    return Projects.find(project => project.id === id)
  },
  interests: (state, getters) => {
    return [...getters.areas, ...getters.projects]
  }
}

export const actions = {
  setMode({ commit, dispatch }, payload) {
    commit('setMode', payload)
    dispatch('session/save', null, { root: true })
  },

  setCenter({ commit, dispatch }, payload) {
    commit('setCenter', payload)
    dispatch('session/save', null, { root: true })
  },

  setBoundingBox({ commit, dispatch }, payload) {
    commit('setBoundingBox', payload)
    dispatch('session/save', null, { root: true })
  }
}
