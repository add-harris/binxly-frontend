<template>

  <div class="address-text">

    <h2 class="address-header pa-6">Find Us</h2>
    <p>{{addressDetails.inputs.line1.value}}</p>
    <p>{{addressDetails.inputs.line2.value}}</p>
    <p>{{addressDetails.inputs.line3.value}}</p>
    <p>{{addressDetails.inputs.postCode.value}}</p>
    <template>
      <h2 class="address-header pa-6">Contact Us</h2>
      <p><label>tel:</label> {{addressDetails.tel}}</p>
      <p><label>email:</label> {{addressDetails.email}}</p>
    </template>


  </div>

</template>

<script>

  export default {

    name: "Address",

    props: {
      addressDetails: Object
    },

    data () {
      return {}
    },

    computed: {

    },
    methods: {

    }
  }

</script>

<style>

  .address-box {
    /*padding: 20px;*/
    margin: 20px;
  }

  .address-text > p {
    /*font-family: 'Courier Prime', monospace;*/
    text-align: left;
    font-size: 1.1em;
    margin-bottom: 5px;
  }

  .address-header {
    /*font-family: 'Lobster', cursive;*/
    text-align: center;
  }

</style>
