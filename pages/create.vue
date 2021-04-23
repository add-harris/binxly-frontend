<template>

  <div>

    <BuildDraw></BuildDraw>

    <v-row class="ma-6">
      <v-spacer></v-spacer>
      <v-btn color="primary" to="/finalise">Finalise</v-btn>
    </v-row>

    <TestBanner></TestBanner>

    <ViewPanel :nav-bar="navBar" :components="components"></ViewPanel>

  </div>

</template>

<script>

import BuildDraw from "../components/BuildDraw";
import ViewPanel from "../components/ViewPanel";
import { TestBanner } from "binxly-vue-lib"

import { mapState } from 'vuex'

export default {

  name: "create",

  components: {
    BuildDraw,
    ViewPanel,
    TestBanner
  },

  middleware: 'auth',

  data() {
    return {

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
    }),

  },

  methods: {
  },

}

</script>

<style >

</style>
