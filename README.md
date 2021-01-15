# login-app

### Setup Firebase

- Install dependencies

```bash
npm i --save firebase
npm i --save @nuxtjs/firebase
```

- Add module & firebase config to `nuxt.config.js`

```js
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/firebase',
  ],
  
  firebase: {
    config: {
      apiKey: "AIzaSyCG_jCR7e2CFE4ENztRe956AAsC6ifz1P8",
      authDomain: "login-app-e5f92.firebaseapp.com",
      projectId: "login-app-e5f92",
      storageBucket: "login-app-e5f92.appspot.com",
      messagingSenderId: "186929363425",
      appId: "1:186929363425:web:ce5989519888d49b6dbaa0",
      measurementId: "G-3SP96W2253"
    },
    services: {
      analytics: true
    }
  },
```

The values for the firebase config can be gotten from the firebase console.

- Init firebase project

Create new project in firebase console with firebase hosting enabled. 
Then connect to firebase with firebase cli:

```bash
$ firebase login
```

Use firebase cli to initialise firebase:

```bash
$ firebase init
```

__Note:__ Select to enable Hosting and public directory as `/dist`

This will create the `.firebaserc` & `firebase.json` files.
- `.firebaserc` specifies the firebase project to deploy to.
- `firebase.json` specifies how and what files to publish i.e. contents of `/dist`.

### Run Nuxt in Dev Mode

Served on localhost:3000 with hot loading.

```bash
$ npm run dev
```

### Build Static content with Nuxt

Generate web-site as content in the `/dist` directory.

```bash
$ npm run generate
```

The website can then be test served with:

```bash
$ npm run start
```

### Deploy to Firebase

Deploy static contents of dist directory to firebase hosting.

```bash
$ firebase deploy
```

