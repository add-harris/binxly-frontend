<template>

  <div>

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

      <v-select
        label="Solo field"
        solo
        class="ma-2"
        v-if="addNew"
        :items="newSelections"
        item-text="name"
        return-object
        v-on:change="newItemSelected"
      ></v-select>

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

    <v-row align="center" class="ma-2" v-if="multiPage">

      <v-tabs>
        <v-tab v-for="(page, index) in pages" :key=" 'page' + index ">{{ 'Page ' + (index + 1) }}</v-tab>

          <v-btn
            x-small
            color="primary"
            fab
            class="ma-2"
            depressed
            :disabled="pages.length > 2"
            @click.stop="addPage"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>

        <v-btn
          x-small
          color="grey"
          fab
          class="mt-2"
          depressed
          :dark="pages.length > 1"
          :disabled="pages.length < 2"
          @click.stop="minusPage"
        >
          <v-icon>mdi-minus</v-icon>
        </v-btn>

      </v-tabs>

    </v-row>

    <TestBanner></TestBanner>

    <ViewPanel :nav-bar="navBar" :components="components" :multi-page="multiPage"></ViewPanel>

  </div>



</template>

<script>

import TestBanner from 'binxly-vue-lib';
import ExpansionPanels from '../components/ExpansionPanels.vue';
import ViewPanel from '../components/ViewPanel.vue';

import { mapState, mapMutations } from 'vuex'

export default {

  name: "create",

  components: {
    TestBanner,
    ExpansionPanels,
    ViewPanel,
  },

  middleware: 'auth',

  data() {
    return {

      openDraw: true,
      mini: true,
      addNew: false,
      tab: null,
      multiPage: false,
      pages: [1],

      newSelections: [
        {
          name: "Text Box",
          type: "text-box",
        },
        {
          name: "Image",
          type: "image",
        },
        {
          name: "Address",
          type: "address",
        }
      ],

    }
  },

  computed: {

    ...mapState({
      navBar: state => state.components.navBar,
      components: state => state.components.components,
      controlPanels: state => state.components.controlPanels
    }),

  },

  methods: {

    ...mapMutations({
      addControlPanel: 'components/addControlPanel',
      addComponent: 'components/addComponent'
    }),

    // use refs to access methods and values from child component instances
    // docs: https://vuejs.org/v2/guide/components-edge-cases.html#Accessing-Child-Component-Instances-amp-Child-Elements
    collapseAll() {
      this.mini = true
      this.addNew = false
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
      } else this.addNew = !this.addNew;
    },

    newItemSelected(obj) {
      this.addNew = false

      switch (obj.type) {
        case "image":
          this.createImage(obj)
          break;
        case "text-box":
          this.createTextBox(obj)
          break;
        case "address":
          this.createAddress(obj)
          break;
      }
    },

    createTextBox(obj) {
      const textObj = {
        name: obj.name,
        type: obj.type,
        icon: "mdi-card-text-outline",
        inputs: {
          text: {
            label: "Text",
            value: "",
            type: "textArea"
          }
        }
      }
      this.addComponent(textObj)
      this.addControlPanel(textObj)
    },

    createImage(obj) {
      const imageObj = {
        name: obj.name,
        type: obj.type,
        icon: "mdi-image-outline",
        inputs: {
          url: {
            label: "Url",
            value: "https://picsum.photos/1920/1080?random",
            type: "textField"
          }
        }
      }
      this.addComponent(imageObj)
      this.addControlPanel(imageObj)
    },

    createAddress(obj) {
      const addressObj = {
        name: obj.name,
        type: obj.type,
        icon: "mdi-email-outline",
        inputs: {
          line1: {
            label: "Address Line 1",
            value: "Address Line 1",
            type: "textField"
          },
          line2: {
            label: "Address Line 2",
            value: "Address Line 2",
            type: "textField"
          },
          line3: {
            label: "Address Line 3",
            value: "Address Line 3",
            type: "textField"
          },
          postCode: {
            label: "Post Code",
            value: "Post Code",
            type: "textField"
          },
        }
      }
      this.addComponent(addressObj)
      this.addControlPanel(addressObj)
    },

    addPage() {
      this.pages.push(1)
    },

    minusPage() {
      this.pages.pop()
    }

  },

}

</script>

<style >

</style>
