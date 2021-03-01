
export const state = () => ({

  user: null,

})

export const getters = {

  getUser(state) {
    return state.user
  }

}

export const mutations = {

  saveUser: (state, { user }) => {
    const { uid, email, displayName } = user
    state.user = { uid, email, displayName }
    console.log("user saved")
  },

  ON_AUTH_STATE_CHANGED: (state, { authUser, claims }) => {
    if (!authUser) {
      console.log("ON_AUTH_STATE_CHANGED: firebase logged out")
      state.user = null
    } else {
      console.log("ON_AUTH_STATE_CHANGED: firebase logged in")
      const { uid, email, displayName } = authUser
      state.user = { uid, email, displayName }
    }
  }

}
