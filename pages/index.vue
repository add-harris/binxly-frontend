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
        ></v-text-field>

        <v-text-field
          class="ml-10 mr-10"
          type="password"
          label="password"
        ></v-text-field>
        <v-row
          align="center"
          justify="space-around"
        >

        <v-card-actions>
          <v-btn color="primary">Login</v-btn>
        </v-card-actions>

        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>

export default {
  components: {

  }
}
</script>
