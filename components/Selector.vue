<template>

    <v-select
      label="Solo field"
      solo
      class="ma-2"
      v-if="addNew"
      :items="newSelections"
      item-text="name"
      return-object
      v-on:change="newItemSelected"
    ></v-select>

</template>

<script>

import { mapMutations } from "vuex";

export default {

  name: "Selector",

    props: {
      addNew: Boolean
    },

  data() {
    return {

      newSelections: [
        {
          name: "Text Box",
          type: "text-box",
        },
        {
          name: "Image",
          type: "image",
        },
        {
          name: "Address",
          type: "address",
        }
      ],
    }
  },

  methods: {

    ...mapMutations({
      addControlPanel: 'components/addControlPanel',
      addComponent: 'components/addComponent'
    }),

    newItemSelected(obj) {

      switch (obj.type) {
        case "image":
          this.createImage(obj)
          break;
        case "text-box":
          this.createTextBox(obj)
          break;
        case "address":
          this.createAddress(obj)
          break;
      }

      this.$emit("component-added")
    },

    createTextBox(obj) {
      const textObj = {
        name: obj.name,
        type: obj.type,
        icon: "mdi-card-text-outline",
        inputs: {
          text: {
            label: "Text",
            value: "",
            type: "textArea"
          }
        }
      }
      this.addComponent(textObj)
      this.addControlPanel(textObj)
    },

    createImage(obj) {
      const imageObj = {
        name: obj.name,
        type: obj.type,
        icon: "mdi-image-outline",
        inputs: {
          url: {
            label: "Url",
            value: "https://picsum.photos/1920/1080?random",
            type: "textField"
          }
        }
      }
      this.addComponent(imageObj)
      this.addControlPanel(imageObj)
    },

    createAddress(obj) {
      const addressObj = {
        name: obj.name,
        type: obj.type,
        icon: "mdi-email-outline",
        inputs: {
          line1: {
            label: "Address Line 1",
            value: "Address Line 1",
            type: "textField"
          },
          line2: {
            label: "Address Line 2",
            value: "Address Line 2",
            type: "textField"
          },
          line3: {
            label: "Address Line 3",
            value: "Address Line 3",
            type: "textField"
          },
          postCode: {
            label: "Post Code",
            value: "Post Code",
            type: "textField"
          },
        }
      }
      this.addComponent(addressObj)
      this.addControlPanel(addressObj)
    },

  },

}
</script>

<style scoped>

</style>
