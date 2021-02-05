<template>

  <div>

    <TextBox v-if="component.type === 'text-box'" :properties="component"></TextBox>


    <v-card v-if="component.type === 'image'" class="mx-auto" width="300" height="250">

      <v-img  :src="component.textFields[0].value" height="250"></v-img>

    </v-card>

    <Address v-if="component.type === 'address'" :address-details="component" ></Address>

  </div>

</template>

<script>

import TextBox from './TextBox.vue';
import Address from './Address.vue';

export default {
  name: "MultiComponent",

  components: {
    TextBox,
    Address
  },

  props: {
    component: Object
  },

}

</script>

<style scoped>

</style>
