<template>
  <v-app dark>

    <v-app-bar
      fixed
      app
      clipped-left
      color="#6A76AB"
      dark
      height="90"
      src="water-droplets.jpg"
    >

      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-toolbar-title dark v-text="title" class="app-bar-title binx-text" />

      <v-spacer />

      <client-only>

        <v-btn v-if="user" icon @click="logout">
          <v-icon >mdi-logout</v-icon>
        </v-btn>

      </client-only>

      <v-menu
        v-if="user"
        min-width="250"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="ma-2"
            dark
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon x-large>mdi-account-circle</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account-circle</v-icon>
            </v-list-item-icon>
            <v-list-item-content>Profile</v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-content>Log out</v-list-item-content>
          </v-list-item>

        </v-list>
      </v-menu>

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

import { mapState } from 'vuex'

export default {

  name: "default",

  data () {
    return {
      title: 'Binxly.net',

      images: [
        'bamboo-leaves.jpg',
        'coast.jpg',
        'water-droplets.jpg'
      ]

    }
  },

  computed: {

    ...mapState({
      user: state => state.user.user
    })

  },

  methods: {

    logout() {

      this.$fireModule.auth().signOut().then(() => {
        console.log("signed out")
        this.$router.push({ path: '/login' })
      }).catch((error) => {
        console.log("error signing out")
        // An error happened.
      });
    },

    randomImage() {
      return this.images[Math.floor(Math.random() * this.images.length)]
    }

  }
}
</script>

<style>

  .binx-text {
    font-family: 'Archivo', sans-serif;
  }

  .app-bar-title {
    /*color: white;*/
    font-size: 2em !important;
    margin-top: 40px;
    margin-left: 20px;
  }

</style>
