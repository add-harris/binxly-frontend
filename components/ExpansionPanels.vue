<template>

  <v-expansion-panels
    inset
    tile
    v-model="openPanels"
  >

    <!-- First Panel for Nav Bar is always there -->
    <v-expansion-panel class="panel">

      <v-expansion-panel-header class="pl-4" :hide-actions="mini">
        <v-icon style="position: absolute;">
          mdi-application
        </v-icon>
        <div class="ml-8 text-no-wrap">
          {{ mini ? "" : "Nav Bar" }}
        </div>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-text-field label="Title" v-model="title"></v-text-field>
      </v-expansion-panel-content>
    </v-expansion-panel>

    <!-- Rest of the Panels are dynamic -->
    <v-expansion-panel
      class="panel"
      v-for="(panel, panelIndex) in localControlPanels"
      :key="panel.type + panelIndex"
    >

      <v-expansion-panel-header class="pl-4" :hide-actions="mini">
        <v-icon style="position: absolute;">
          {{ panel.icon }}
        </v-icon>
        <div class="ml-8 text-no-wrap">
          {{ mini ? "" : panel.name }}
        </div>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <template v-for="(input, key) in panel.inputs">
          <v-text-field v-if="input.type === 'textField'"
                        :key="key"
                        :label="input.label" :value="input.value"
                        v-on:input="updatePanelValue(panelIndex, key, value)"
          ></v-text-field>
          <v-textarea v-if="input.type === 'textArea'"
                      :key="key"
                      :label="input.label"
                      v-model="input.value"
                      v-on:input="updatePanelValue(panelIndex, key, input.value)"
          ></v-textarea>
        </template>
        <v-btn
          icon
          float-right
        >
          <v-icon>mdi-minus</v-icon>
        </v-btn>
      </v-expansion-panel-content>
    </v-expansion-panel>

  </v-expansion-panels>

</template>

<script>

import { mapGetters, mapMutations } from 'vuex'

export default {

  name: "ExpansionPanels",

  props: {
    mini: Boolean,
  },

  data() {
    return {
      openPanels: [],
    }
  },

  computed: {

    ...mapGetters({
      getTitle: 'components/getTitle',
      controlPanels: 'components/getControlPanels'
    }),

    // this is the only way to deep clone an array of objects
    // article: https://www.freecodecamp.org/news/how-to-clone-an-array-in-javascript-1d3183468f6a/
    localControlPanels() {
      return JSON.parse(JSON.stringify(this.controlPanels))
    },

    // This is 2-way computed property or computed setter, it allows you to model to values held in the store
    // article: https://vuex.vuejs.org/guide/forms.html#two-way-computed-property
    title: {
      get() {
        return this.getTitle
      },
      set(value) {
        this.setTitle(value)
      }
    }

  },

  methods: {

    ...mapMutations({
      setTitle: 'components/setTitle',
      updateControlPanel: 'components/updateControlPanel'
    }),

    updatePanelValue(panelIndex, key, newValue) {
      const updateParams = { panelIndex, key, newValue }
      this.updateControlPanel(updateParams)
    },

    collapsePanels() {
      this.openPanels = []
    }

  }

}

</script>

<style scoped>

  .panel {
    margin-right: 2px;
  }

</style>
