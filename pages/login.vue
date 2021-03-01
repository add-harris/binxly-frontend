<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">

      <LoginSignUp></LoginSignUp>

    </v-col>
  </v-row>
</template>

<script>

import LoginSignUp from "@/components/LoginSignUp";

export default {

  name: 'login',

  components: {
    LoginSignUp
  },

}

</script>

<style>

</style>
