
export default function ({store, redirect}) {

  // to get directly from $fireModule instead of from store
  // use app as param instead of store
  // if (!app.$fireModule.auth.currentUser) {

  if (!store.getters['user/getUser']) {
    console.log("do redirect")
    return redirect("/login")
  }

}
