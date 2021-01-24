<template>
  <v-app dark>

    <v-app-bar
      fixed
      app
    >
      <v-app-bar-nav-icon/>

      <v-toolbar-title v-text="title" />

      <v-spacer />

      <client-only>

        <div v-if="user">
          {{user.email}}
        </div>

      </client-only>

      <client-only>

        <v-btn v-if="user" icon @click="logout">
          <v-icon>mdi-logout</v-icon>
        </v-btn>

      </client-only>


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

import { mapState } from 'vuex'

export default {
  data () {
    return {
      title: 'binxly.net'
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
    }

  }
}
</script>
