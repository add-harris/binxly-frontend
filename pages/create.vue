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

      <!-- This could be split to separate compenents, but would need to move all data into the store, as props should not be mutated directly -->
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
            <v-text-field label="Title" v-model="navBar.title"></v-text-field>
            <v-switch
              v-model="multiPage"
              label="Multi-Page"
            ></v-switch>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <!-- Rest of the Panels are dynamic -->
        <v-expansion-panel
          class="panel"
          v-for="panel in controlPanels"
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
            <template v-for="input in panel.inputs">
              <v-text-field v-if="input.type === 'textField'" :label="input.label" v-model="input.value"></v-text-field>
              <v-textarea v-if="input.type === 'textArea'" :label="input.label" v-model="input.value"></v-textarea>
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

    <v-row align="center" class="ma-2">

      <v-tabs v-if="multiPage">
        <v-tab v-for="(page, index) in pages">{{ 'Page ' + (index + 1) }}</v-tab>

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
import ViewPanel from '../components/ViewPanel.vue';

export default {

  name: "create",

  components: {
    ViewPanel,
    TestBanner
  },

  middleware: 'auth',

  data() {
    return {

      openDraw: true,
      mini: true,
      openPanels: [],
      addNew: false,
      tab: null,
      multiPage: false,
      pages: [1],

      navBar: {
        title: "Title"
      },

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

      controlPanels: [],
      components: [],

    }
  },

  computed: {},

  methods: {

    collapseAll() {
      this.mini = true
      this.openPanels = []
      this.addNew = false
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
      this.components.push(textObj)
      this.controlPanels.push(textObj)
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
      this.components.push(imageObj)
      this.controlPanels.push(imageObj)
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
      this.components.push(addressObj)
      this.controlPanels.push(addressObj)
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

  .panel {
    margin-right: 2px;
  }

</style>
