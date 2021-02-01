<template>

  <div>

    <v-navigation-drawer
      app
      fixed
      permanent
      v-model="openDraw"
      :mini-variant.sync="mini"
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

      <v-expansion-panels inset v-model="openPanels">

          <v-expansion-panel>

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
              <v-checkbox label="Checkbox 1"></v-checkbox>
              <v-select label="Selector"></v-select>
            </v-expansion-panel-content>
          </v-expansion-panel>

      </v-expansion-panels>

      <v-row justify="center" align="center" class="ma-2">

        <!-- bottom prop is also good look -->
        <v-btn
          x-small
          color="primary"
          fab
          fixed
          dark
          class="mt-10"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>

      </v-row>


    </v-navigation-drawer>



    <v-card class="overflow-hidden">
      <v-app-bar
        absolute
        color="#6A76AB"
        dark
        shrink-on-scroll
        prominent
        src="https://picsum.photos/1920/1080?random"
        fade-img-on-scroll
        scroll-target="#scrolling-techniques-3"
      >
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
          ></v-img>
        </template>

        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-app-bar-title>{{ title }}</v-app-bar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>

        <template v-slot:extension>
          <v-tabs align-with-title>
            <v-tab>Tab 1</v-tab>
            <v-tab>Tab 2</v-tab>
            <v-tab>Tab 3</v-tab>
          </v-tabs>
        </template>
      </v-app-bar>
      <v-sheet
        id="scrolling-techniques-3"
        class="overflow-y-auto"
        max-height="600"
      >
        <v-container style="height: 1000px;"></v-container>
      </v-sheet>
    </v-card>

  </div>



</template>

<script>

export default {

  name: "create",
  
  components: {},

  middleware: 'auth',

  data() {
    return {
      openDraw: true,
      mini: true,
      openPanels: [],

      title: "Title",

      items: [
        {
          action: 'mdi-application',
          items: [
            { title: 'Title' },
          ],
          title: 'Nav Bar',
        },
      ],

    }
  },
  
  computed: {},
  
  methods: {

    collapseAll() {

      this.mini = true
      this.openPanels = []

    },

    openAndClose() {

      if (this.mini) {
        this.mini = false
      } else {
        this.collapseAll()
      }

    }

  },

}

</script>

<style scoped>

</style>
