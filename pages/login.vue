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

        <!-- v-on:submit.prevent stops form from reloading page on submit
            (as form is not doing a post, action is done programmatically in methods)  -->
        <v-form
          ref="form"
          lazy-validation
          v-on:submit.prevent
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
              <v-btn v-if="tab === 0" color="primary" type="submit" @click="login">Login</v-btn>
              <v-btn v-else color="primary" type="submit" @click="signUp">Sign Up</v-btn>
            </v-card-actions>

          </v-row>

        </v-form>

<!--        <v-expansion-panels accordion flat class="pa-2 mt-2">-->
<!--          <v-expansion-panel>-->
<!--            <v-expansion-panel-header class="ex-panel-header v-label">Other Methods</v-expansion-panel-header>-->
<!--            <v-expansion-panel-content>-->

<!--              <v-row-->
<!--                align="center"-->
<!--                justify="space-around"-->
<!--              >-->

<!--                <v-btn icon class="ma-2">-->
<!--                  <v-icon>-->
<!--                    mdi-google-->
<!--                  </v-icon>-->
<!--                </v-btn>-->

<!--                <v-btn icon class="ma-2">-->
<!--                  <v-icon>-->
<!--                    mdi-facebook-->
<!--                  </v-icon>-->
<!--                </v-btn>-->

<!--                <v-btn icon class="ma-2">-->
<!--                  <v-icon>-->
<!--                    mdi-twitter-->
<!--                  </v-icon>-->
<!--                </v-btn>-->

<!--                <v-btn icon class="ma-2">-->
<!--                  <v-icon>-->
<!--                    mdi-github-->
<!--                  </v-icon>-->
<!--                </v-btn>-->

<!--              </v-row>-->

<!--            </v-expansion-panel-content>-->
<!--          </v-expansion-panel>-->
<!--        </v-expansion-panels>-->

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

      if (this.checkValid()) {

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

      }

    },

    signUp() {

      console.log(`email: ${this.email}, password: ${this.password}`)

      if(this.checkValid) {

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
