import {Commit, createStore } from 'vuex'

export default createStore({
  state: {
    authenticated: false
  },
  getters: {
    isAuthenticated: (state) => state.authenticated
  },
  mutations: {
    SET_AUTH: (state: {authenticated: boolean}, auth: boolean) => state.authenticated = auth


  },
  actions: {
    setAuth: ({commit}: {commit: Commit}, auth: boolean) => commit('SET_AUTH', auth)
  },
  modules: {
  }
})
