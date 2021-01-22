
export const state = () => ({

  user: null,

})

export const getters = {

}

export const mutations = {

  ON_AUTH_STATE_CHANGED: (state, { authUser, claims }) => {
    if (!authUser) {
      console.log("logged out")
      state.user = null
    } else {
      console.log("logged in")
      console.log(authUser)
      const { uid, email, displayName } = authUser
      state.user = { uid, email, displayName }
    }
  }

}
