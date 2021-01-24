
export const state = () => ({

  user: null,

})

export const getters = {

  getUser(state) {
    console.log('getUser')
    return state.user
  }

}

export const mutations = {

  ON_AUTH_STATE_CHANGED: (state, { authUser, claims }) => {
    if (!authUser) {
      console.log("firebase logged out")
      state.user = null
    } else {
      console.log("firebase logged in")
      const { uid, email, displayName } = authUser
      state.user = { uid, email, displayName }
    }
  }

}
