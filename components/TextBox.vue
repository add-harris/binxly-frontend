<template>

  <v-card class="mx-auto" width="300" height="250">

    <v-card-title>
      {{ properties.name }}
    </v-card-title>

    <v-card-text v-if="properties.type === 'text-box'">
      {{ properties.inputs.text.value }}
    </v-card-text>

  </v-card>

</template>

<script>

export default {

  name: "TextBox",
  
  components: {},

  props: {
    properties: Object
  }

}

</script>

<style scoped>

</style>
