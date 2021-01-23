<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">

      <v-card class="mt-6" >
        <v-card-title class="headline">

          <v-tabs v-model="tab">
            <v-tab>{{title}}</v-tab>
          </v-tabs>

        </v-card-title>

      </v-card>

    </v-col>
  </v-row>
</template>

<script>

import { mapState } from 'vuex'

export default {

  components: {},

  data() {
    return {
      tab: null,
      title: "Main Page"
    }
  },

  computed: {

    ...mapState({
      user: state => state.user.user
    })

  },

  methods: {}

}
</script>

<style>

  .ex-panel-header {
    color: #737373;
    font-family: "Roboto", sans-serif;
    /*transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);*/
    font-size: 16px;
  }

</style>
