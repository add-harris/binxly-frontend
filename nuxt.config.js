import colors from 'vuetify/es5/util/colors'

function authConfig() {

  let config = {
    initialize: {
      subscribeManually: false,
      onAuthStateChangedMutation: 'user/ON_AUTH_STATE_CHANGED'
    },
  }

  if (process.env.EMULATORS === 'true') {
    config.emulatorPort = 9099
    config.emulatorHost = 'http://localhost'
  }

  return config
}

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  publicRuntimeConfig: {
    constructorUrl: process.env.BASE_URL || 'http://localhost:8080/constructor'
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - binxly.net',
    title: 'binxly.net',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: "https://fonts.gstatic.com" },
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?" +
          "family=Noto+Serif+JP:wght@600&" +
          "family=Archivo&" +
          "family=Ubuntu&" +
          "display=swap" }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    { src: 'binxly-vue-lib/dist/binxly-vue-lib.css', lang: 'css' }
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/firebase',
  ],

  firebase: {
    config: {
      apiKey: "AIzaSyAh78iOigjnpDoxE5L9RBB1E_d3RjRI6Sw",
      authDomain: "fir-static-website-d6299.firebaseapp.com",
      databaseURL: "https://fir-static-website-d6299.firebaseio.com",
      projectId: "fir-static-website-d6299",
      storageBucket: "fir-static-website-d6299.appspot.com",
      messagingSenderId: "242946123236",
      appId: "1:242946123236:web:a2a05865aa35879fa993f1",
      measurementId: "G-QNYVKR3T6H"
    },
    services: {
      auth: authConfig()
    }
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  vue: {
    config: {
      productionTip: false,
      devtools: true
    }
  }
}
