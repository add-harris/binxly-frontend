<template>

    <v-card class="mx-auto" width="300" height="250">

      <v-card-title>
        {{ component.name }}
      </v-card-title>

      <v-card-text v-if="component.type === 'text-box'">
        {{ component.textArea.value }}
      </v-card-text>

      <v-img v-if="component.type === 'image'" :src="component.textFields[0].value" height="250">
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
