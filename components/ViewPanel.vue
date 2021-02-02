<template>


  <v-card class="overflow-hidden">


    <ViewPanelAppBar :nav-bar="navBar"></ViewPanelAppBar>


    <v-sheet id="scrolling-techniques-3" class="overflow-y-auto" max-height="600">
      <v-container style="height: 1000px;">

        <div style="padding-top: 250px"></div>

        <v-row justify="center" align="center" class="ma-6" v-for="component in components" :key="component.type">

          <MultiComponent :component="component"></MultiComponent>

        </v-row>

      </v-container>
    </v-sheet>
  </v-card>

</template>

<script>

import ViewPanelAppBar from './ViewPanelAppBar.vue';
import MultiComponent from './MultiComponent.vue';

export default {

  name: "ViewPanel",
  
  components: {
    MultiComponent,
    ViewPanelAppBar
  },

  props: {
    navBar: Object,
    components: Array
  },

  data() {
    return {}
  },
  
  computed: {},
  
  methods: {},

}

</script>

<style scoped>

</style>
