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

  middleware: 'auth',

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

</style>
