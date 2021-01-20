<template>
  <v-app dark>

    <v-app-bar
      fixed
      app
    >
      <v-app-bar-nav-icon/>

      <v-toolbar-title v-text="title" />

      <v-spacer />

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

    </v-app-bar>

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <v-footer
      absolute
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>

    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      title: 'binxly.net'
    }
  }
}
</script>
