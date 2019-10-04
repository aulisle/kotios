/**
 * User is an alias to state.auth.user
 */

export const state = () => ({
  working: false
})

export const mutations = {
  setWorking(state, isWorking) {
    state.working = isWorking
  }
}

export const getters = {
  user: (state, getters, rootState) => {
    return rootState.auth.user
  }
}

const changeState = (commit, rootState, values) => {
  commit(
    'auth/SET',
    { key: 'user', value: { ...rootState.auth.user, ...values } },
    { root: true }
  )
}

export const actions = {
  changeEmail({ commit, rootState }, { email }) {
    commit('setWorking', true)

    return this.$axios
      .patch('/api/user', { email })
      .then(() => {
        changeState(commit, rootState, { email })
        commit('setWorking', false)
      })
      .catch(err => {
        commit('setWorking', false)
        throw err
      })
  },

  changePassword(
    { commit, rootState },
    { oldPassword, password, passwordAgain }
  ) {
    return this.$axios
      .patch('/api/user', { oldPassword, password, passwordAgain })
      .then(() => {
        commit('setWorking', false)
        changeState(commit, rootState, { canLocalLogin: true })
      })
      .catch(err => {
        commit('setWorking', false)
        throw err
      })
  },

  updatePic({ commit, rootState }, { pic }) {
    const form = new FormData()
    form.append('image', pic)

    return this.$axios
      .patch('/api/user/pic', form, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(({ data }) => {
        commit(
          'auth/SET',
          {
            key: 'user',
            value: {
              ...rootState.auth.user,
              pic: data.url
            }
          },
          { root: true }
        )
      })
      .catch(e => {
        // eslint-disable-next-line
        console.log('ERROR STORE', e)

        throw e
      })
  }
}
