<template>

    <v-card class="mx-auto" width="300" height="250">

      <v-card-title>
        {{ component.type }}
      </v-card-title>

      <v-card-text v-if="component.type === 'text-box'">
        {{ component.properties.text }}
      </v-card-text>

      <v-img v-if="component.type === 'image'" :src="component.properties.url" height="250">
      </v-img>

    </v-card>
    
</template>

<script>

export default {
  name: "MultiComponent",

  props: {
    component: Object
  },

}

</script>

<style scoped>

</style>
