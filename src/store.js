import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      users: [],
      firstLoad: true
    }
  },
  mutations: {
    setUsers(state, users) {
      state.users = users
      console.log(state.users)
    },
    updateUser(state, { id, user }) {
      const index = state.users.findIndex(u => u.id === id)
      if (index !== -1) {
        state.users.splice(index, 1, user)
      }
    }
  },
  actions: {
    async fetchUsers({ commit }) {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const users = await response.json()
      commit('setUsers', users)
    }
  },
  modules: {}
})

export default store;
