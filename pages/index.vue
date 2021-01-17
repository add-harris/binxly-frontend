<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title class="headline">
          Login
        </v-card-title>

        <v-text-field
          class="pl-10 pr-10"
          label="username"
          v-model="username"
        ></v-text-field>

        <v-text-field
          class="ml-10 mr-10"
          type="password"
          label="password"
          v-model="password"
        ></v-text-field>
        <v-row
          align="center"
          justify="space-around"
        >

        <v-card-actions>
          <v-btn color="primary" @click="signIn">Login</v-btn>
        </v-card-actions>

        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>

export default {
  components: {

  },
  data() {
    return {
      username: "",
      password: ""
    }
  },
  methods: {
    signIn() {

      let email = "em123@bmail.com"
      let pass = "123456"

      console.log(`email: ${email}, password: ${pass}`)

      this.$fireModule.auth().signInWithEmailAndPassword(email, pass)
        .then((user) => {
          console.log("success")
        })
        .catch((error) => {
          console.log("fail")
        });

    }
  }
}
</script>
