<template>

  <v-navigation-drawer
    app
    fixed
    permanent
    v-model="openDraw"
    :mini-variant.sync="mini"
    width="300"
  >
    <template v-slot:prepend>
      <v-list-item>
        <v-list-item-icon
          @click.stop="openAndClose"
        >
          <v-icon>mdi-palette-advanced</v-icon>
        </v-list-item-icon>

        <v-list-item-title>Control Panel</v-list-item-title>

        <v-btn
          icon
          @click.stop="collapseAll"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>

      </v-list-item>
    </template>

    <v-divider></v-divider>

    <ExpansionPanels :mini="mini" ref="expansionPanels"></ExpansionPanels>

    <Selector ref="selector" :add-new="addNew" @component-added="closeSelector"></Selector>

    <v-row justify="center" align="center" class="ma-2">

      <!-- bottom prop is also good look -->
      <v-btn
        x-small
        color="primary"
        fab
        fixed
        :class="addNew ? '' : 'mt-10'"
        @click.stop="plusAndMinus"
      >
        <v-icon>{{ addNew ? 'mdi-minus' : 'mdi-plus' }}</v-icon>
      </v-btn>

    </v-row>

  </v-navigation-drawer>

</template>

<script>

import ExpansionPanels from './ExpansionPanels.vue';
import Selector from './Selector.vue';

export default {

  name: "BuildDraw",

  components: {
    ExpansionPanels,
    Selector
  },

  data() {
    return {

      openDraw: true,
      mini: true,
      addNew: false

    }
  },

  methods: {

    // use refs to access methods and values from child component instances
    // docs: https://vuejs.org/v2/guide/components-edge-cases.html#Accessing-Child-Component-Instances-amp-Child-Elements
    collapseAll() {
      this.mini = true
      this.addNew = false
      // this.$refs.selector.show = false
      this.$refs.expansionPanels.collapsePanels()
    },

    openAndClose() {
      if (this.mini) {
        this.mini = false
      } else {
        this.collapseAll()
      }
    },

    plusAndMinus() {
      if (this.mini) {
        this.mini = false
        this.addNew = true
      } else {
        this.addNew = !this.addNew;
      }
    },

    closeSelector() {
      this.addNew = false
    }

  },

}
</script>

<style scoped>

</style>
