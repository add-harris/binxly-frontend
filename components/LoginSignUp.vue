<template>

  <v-card class="mt-6" >
    <v-card-title class="headline">

      <v-tabs v-model="tab">
        <v-tab>Login</v-tab>
        <v-tab>Sign Up</v-tab>
      </v-tabs>

    </v-card-title>

    <!-- v-on:submit.prevent stops form from reloading page on submit,
         it also stops submitting on return/enter key so v-on:keyup.enter added-->
    <v-form
      ref="form"
      lazy-validation
      v-on:submit.prevent="checkSubmit"
      v-on:keyup.enter="checkSubmit"
    >

      <v-alert
        v-if="showAlert"
        border="left"
        color="orange"
        outlined
        text
        dense
        type="error"
        class="ma-4"
      >
        {{errorMessage}}
      </v-alert>

      <v-text-field
        class="pl-10 pr-10"
        label="email"
        v-model="email"
        :rules="emailRules"
        :validate-on-blur="!forceValidate"
        required
      >
        <v-icon v-if="email.length != 0"
                @click="email = ''"
                slot="append"
                dense
        >
          mdi-close
        </v-icon>

      </v-text-field>

      <v-text-field
        class="ml-10 mr-10"
        type="password"
        label="password"
        v-model="password"
        :rules="passwordRules"
        :validate-on-blur="!forceValidate"
        required
      >
        <v-icon v-if="password.length != 0"
                @click="password = ''"
                slot="append"
                dense
        >
          mdi-close
        </v-icon>

      </v-text-field>

      <v-row
        align="center"
        justify="space-around"
      >

        <v-card-actions>
          <v-btn v-if="tab === 0" color="primary" type="submit" >Login</v-btn>
          <v-btn v-else color="primary" type="submit" >Sign Up</v-btn>
        </v-card-actions>

      </v-row>

    </v-form>

  </v-card>

</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "LoginSignUp",

  data() {
    return {

      tab: null,

      email: "",
      password: "",

      showAlert: false,
      errorMessage: '',

      forceValidate: false,

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

  computed: {
    ...mapGetters({
      getUser: 'user/getUser'
    })
  },

  methods: {

    ...mapMutations({
      saveUser: 'user/saveUser'
    }),

    checkValid() {
      return this.$refs.form.validate()
    },

    checkSubmit() {
      if (this.tab === 0) {
        this.login()
      }
      if (this.tab === 1) {
        this.signUp()
      }
    },

    login() {

      console.log(`login - email: ${this.email}, password: ${this.password}`)

      if (this.checkValid()) {

        this.$fireModule.auth().signInWithEmailAndPassword(this.email, this.password)
          .then((user) => {
            console.log("success")
            this.saveUser(user)
            this.$router.push({ path: '/' })
          })
          .catch((error) => {
            console.log("fail")
            console.log(error)
            this.errorMessage = 'Problem logging in, email or password may be incorrect.'
            this.showAlert = true;
          });

      } else this.forceValidate = true

    },

    signUp() {

      console.log(`sign up - email: ${this.email}, password: ${this.password}`)

      if(this.checkValid) {

        this.$fireModule.auth().createUserWithEmailAndPassword(this.email, this.password)
          .then((user) => {
            console.log("success")
            this.saveUser(user)
            this.$router.push({ path: '/' })
          })
          .catch((error) => {
            console.log("fail")
            console.log(error)
            this.errorMessage = 'Problem signing up, account may already exist.'
            this.showAlert = true;
          });

      } else this.forceValidate = true

    }
  }

}
</script>

<style scoped>

</style>
