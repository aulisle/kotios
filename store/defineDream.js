import { debounce } from 'lodash'

const DEBOUNCE_RATE = 1000

export const TYPES = {
  AREA: 0,
  PLOT: 1
}

export const state = () => ({
  _id: null,
  type: null, // null, 'area' or 'plot'
  title: '',

  // PLOT specific
  projectId: null,

  // AREA specific
  location: null,
  distance: 100,

  importantAspects: {},
  email: '',
  startingCapital: 0,
  moneyPerMonth: 0,

  finishedSteps: 0
})

export const mutations = {
  setValue(state, payload) {
    state[payload.field] = payload.value
  },
  initType(state, type) {
    state.finishedSteps = 0
    state._id = null
    state.title = ''

    if (type === TYPES.AREA) {
      state.projectId = null
      state.distance = 100
      state.type = TYPES.AREA
    } else if (type === TYPES.PLOT) {
      state.location = null
      state.distance = 0
      state.type = TYPES.PLOT
    }
  },
  fromStore(state, storedState) {
    const {
      _id,
      type,
      location,
      distance,
      importantAspects,
      email,
      startingCapital,
      moneyPerMonth,
      projectId
    } = storedState

    state._id = _id ? _id : state._id
    state.type = type ? type : state.type
    state.location = location ? location : state.location
    state.distance = distance ? distance : state.distance
    state.importantAspects = importantAspects
      ? importantAspects
      : state.importantAspects
    state.email = email ? email : state.email
    state.startingCapital = startingCapital
      ? startingCapital
      : state.startingCapital
    state.moneyPerMonth = moneyPerMonth ? moneyPerMonth : state.moneyPerMonth
    state.projectId = projectId ? projectId : state.projectId
  }
}

export const getters = {
  serialised(state) {
    const importantAspects = Object.entries(state.importantAspects)
      .filter(pair => pair[1]) // If the value is true, keep it
      .map(pair => pair[0]) // Return the filtered keys

    return { ...state, importantAspects }
  }
}

export const actions = {
  setValue({ commit, dispatch }, payload) {
    commit('setValue', payload)
    dispatch('sendToApiDebounce')
  },

  setType({ dispatch }, payload) {
    dispatch('setValue', {
      field: 'type',
      value: payload
    })
  },

  setLocation({ dispatch }, payload) {
    dispatch('setValue', {
      field: 'location',
      value: payload
    })
  },

  sendToApiDebounce: debounce(({ dispatch }) => {
    dispatch('sendToApi')
  }, DEBOUNCE_RATE),

  sendToApi({ state, dispatch, commit }) {
    if (!state._id) {
      return
    }

    this.$axios.put(`/api/dreams/update/${state._id}`, state).then(res => {
      // eslint-disable-next-line
      console.log('UPDATE', res)
      // Save the ID in case a new dream needed to be created
      commit('setValue', { field: '_id', value: res.data._id })
    })

    dispatch('session/save', null, { root: true })
  },

  async saveNew({ commit, dispatch, getters }) {
    const data = getters['serialised']

    // Remove email so it doesn't get added twice possibly
    delete data.email

    await this.$axios.post('/api/dreams/new', data).then(res => {
      commit('setValue', { field: '_id', value: res.data._id })
      commit('setValue', { field: 'finishedSteps', value: 1 })
      dispatch('session/save', null, { root: true })
    })
  },

  async finishSoftValues({ state, commit, dispatch, getters }) {
    await this.$axios
      .put(`/api/dreams/update/${state._id}`, getters['serialised'])
      .then(res => {
        commit('setValue', { field: '_id', value: res.data._id })
        return this.$axios.post(`/api/dreams/email`, { email: state.email })
      })
      .then(() => {
        commit('setValue', { field: 'finishedSteps', values: 2 })
        dispatch('session/save', null, { root: true })
      })
  },

  async finishBudget({ state, commit, dispatch, getters }) {
    await this.$axios
      .put(`/api/dreams/update/${state._id}`, getters['serialised'])
      .then(res => {
        commit('setValue', { field: '_id', value: res.data._id })
        commit('setValue', { field: 'finishedSteps', values: 3 })
        dispatch('session/save', null, { root: true })
      })
  }
}
