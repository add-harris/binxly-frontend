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
<!--      <v-btn class="ma-6" @click="save()">Store</v-btn>-->
<!--      <v-btn class="ma-6" @click="getFromDb()">Get</v-btn>-->
      <v-btn color="primary" class="ma-6" @click="post()">Post</v-btn>
    </v-card-actions>

<!--    <div v-if="show">{{dbResults}}</div>-->

  </v-card>

</template>

<script>
import { mapState } from "vuex";

export default {
  name: "finalise",

  data() {
    return {
      show: false,
      dbResults: null
    }
  },

  computed: {

    ...mapState({
      navBar: state => state.components.navBar,
      components: state => state.components.components,
    }),

    // dataBase() {
    //   return this.$fire.firestore
    // }

  },

  methods: {

    async post() {
      const url = this.$config.constructorUrl

      const config = {
        headers: {
          'Access-Control-Allow-Origin': this.$config.baseUrl,
          'Accept': 'application/json',
        }
      }

      const data = {
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

    // save() {
    //   this.dataBase.collection("builds").add({
    //     navBar: this.navBar,
    //     components: this.components
    //   })
    //   .then((docRef) => { console.log("Document written with ID: ", docRef.id) })
    //   .catch((error) => { console.error("Error adding document: ", error) });
    // },
    //
    // getFromDb() {
    //   this.dataBase.collection("builds").get().then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //       console.log("Get From DB");
    //       console.log(`${doc.id} => ${doc.data()}`);
    //     });
    //   });
    // }

  }

}
</script>

<style scoped>


</style>
