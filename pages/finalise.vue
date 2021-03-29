<template>

  <v-card>

    <v-card-text>

      <h2 class="ma-3">Config</h2>
      <v-divider></v-divider>

      <h3 class="ma-3">Nav Bar</h3>
      <p class="ma-3">Title: {{navBar.title}}</p>
      <v-divider></v-divider>
      <div v-for="(component, index) in components" :key="component.type + index">
        <h3 class="ma-3">{{component.name}}</h3>
        <div class="ma-3" v-for="(input, index) in component.inputs" :key="input.type + index">
          <p>{{input.label}}: {{input.value}}</p>
        </div>
        <v-divider></v-divider>
      </div>
    </v-card-text>

    <v-card-actions>
      <v-btn to="/create" class="ma-6">Back</v-btn>
      <v-spacer></v-spacer>
      <v-btn color="primary" class="ma-6" @click="post()">Post</v-btn>
    </v-card-actions>


  </v-card>

</template>

<script>
import { mapState } from "vuex";

export default {
  name: "finalise",

  data() {
    return {}
  },

  computed: {

    ...mapState({
      navBar: state => state.components.navBar,
      components: state => state.components.components,
    }),

  },

  methods: {

    async post() {
      const url = this.$config.constructorUrl
      const id = this.randomId()
      console.log(id)

      const config = {
        headers: {
          'Access-Control-Allow-Origin': this.$config.baseUrl,
          'Accept': 'application/json',
        }
      }

      const data = {
        id: id,
        projectName: "frontend-test",
        navBar:{
          title: "Shama lala malu malu"
        }
      }

      // Using Firebase Auth id token as bearer token as suggested
      // https://cloud.google.com/run/docs/authenticating/end-users#cicp-firebase-auth
      this.$fireModule.auth().currentUser.getIdToken().then( ID_TOKEN => {
        config.headers["Authorization"] = `Bearer ${ID_TOKEN}`
        this.$axios
          .$post(`${url}/build`, data, config)
          .then(response => {
            console.log(response)
        })
      }).catch(function(error) {
            console.log(error)
      });

    },

    randomId() {
      return Math.floor(Math.random() * Math.floor(99999999))
    }

  }

}
</script>

<style scoped>


</style>
