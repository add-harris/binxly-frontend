<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="mt-6" >
        <v-card-title class="headline">

          <v-tabs v-model="tab">
            <v-tab>Login</v-tab>
            <v-tab>Sign Up</v-tab>
          </v-tabs>

        </v-card-title>

        <v-form
          ref="form"
          lazy-validation
        >

          <v-text-field
            class="pl-10 pr-10"
            label="email"
            v-model="email"
            :rules="emailRules"
            validate-on-blur
            required
          >
            <v-icon
              :color="iconColor"
              slot="append"
            >
              {{showIcon}}
            </v-icon>
          </v-text-field>

          <v-text-field
            class="ml-10 mr-10"
            type="password"
            label="password"
            v-model="password"
            :rules="passwordRules"
            validate-on-blur
            required
          >
            <v-icon
              :color="iconColor"
              slot="append"
            >
              {{showIcon}}
            </v-icon>

          </v-text-field>

          <v-row
            align="center"
            justify="space-around"
          >

            <v-card-actions>
              <v-btn v-if="tab === 0" color="primary" @click="login">Login</v-btn>
              <v-btn v-else color="primary" @click="signUp">Sign Up</v-btn>
            </v-card-actions>

          </v-row>

        </v-form>

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

      tab: null,

      email: "",
      password: "",
      showIcon: "",
      iconColor: "green",
      successIcon: "mdi-account-check",
      failIcon: "mdi-account-remove",

      emailRules: [
        v => !!v || 'email is required',
        v => /.+@.+/.test(v) || 'email must be valid',
      ],
      passwordRules: [
        v => !!v || 'password is required',
        v => v.length >= 6 || 'password must be at least 6 characters',
      ],

    }
  },
  methods: {

    checkValid() {
      return this.$refs.form.validate()
    },

    login() {

      console.log(`email: ${this.email}, password: ${this.password}`)

      this.$fireModule.auth().signInWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          this.iconColor = "green"
          this.showIcon = this.successIcon
          console.log("success")
        })
        .catch((error) => {
          this.iconColor = "red"
          this.showIcon = this.failIcon
          console.log("fail")
        });

    },

    signUp() {

      console.log(`email: ${this.email}, password: ${this.password}`)

      this.$fireModule.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          this.iconColor = "green"
          this.showIcon = this.successIcon
          console.log("success")
        })
        .catch((error) => {
          this.iconColor = "red"
          this.showIcon = this.failIcon
          console.log("fail")
        });

    }
  }
}
</script>
