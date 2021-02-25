
export const state = () => ({

  navBar: {
    title: "Title"
  },

  controlPanels: [],

  components: [],

})

export const getters = {

  getTitle(state) {
    return state.navBar.title
  },

  getControlPanels(state) {
    return state.controlPanels
  },

  getComponents(state) {
    return state.components
  }

}

export const mutations = {

  setTitle(state, title) {
    state.navBar.title = title
  },

  addControlPanel(state, obj) {
    state.controlPanels.push(obj)
  },

  updateControlPanel(state, obj) {
    const { panelIndex, key, newValue } = obj
    state.controlPanels[panelIndex].inputs[key].value = newValue
  },

  addComponent(state, obj) {
    state.components.push(obj)
  },

}
