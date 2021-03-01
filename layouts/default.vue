<template>
  <v-app dark>

    <v-app-bar
      fixed
      app
      clipped-left
      color="#6A76AB"
      dark
      height="90"
      :src="randomImage()"
    >

      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

<!--      <v-app-bar-nav-icon/>-->

      <v-toolbar-title dark v-text="title" class="app-bar-title binx-text" />

      <v-spacer />

      <client-only>

      </client-only>

      <client-only>

        <v-btn v-if="user" icon @click="logout">
          <v-icon>mdi-logout</v-icon>
        </v-btn>

      </client-only>

      <v-menu
        bottom
        left
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
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item>
            <v-list-item-title>Log out</v-list-item-title>
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
        'pexels-azim-islam-1210276.jpg',
        'pexels-brandon-montrone-1179229.jpg',
        'pexels-cátia-matos-1072179.jpg',
        'pexels-jaymantri-4827.jpg',
        'pexels-kei-scampa-4507967.jpg',
        'pexels-mohan-reddy-atalu-4388593.jpg',
        'pexels-oliver-sjöström-931018.jpg',
        'pexels-oliver-sjöström-931018 copy.jpg',
        'pexels-oliver-sjöström-931018 copy 2.jpg',
        'pexels-pixabay-462162.jpg',
        'pexels-scott-webb-1029604.jpg',
        'pexels-sohail-na-807598.jpg',
        'pexels-vlad-kovriga-339119.jpg'
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
