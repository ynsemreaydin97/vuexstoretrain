<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="error" dark v-bind="attrs" v-on="on">
        Delete Product
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">Product Delete</span>
      </v-card-title>
      <v-card-text>
        <v-container>
         <p> ARE YOU SURE FOR DELETE THAT PRODUCT?</p>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">
          Close
        </v-btn>
        <v-btn color="blue darken-1" text @click="deleteProduct"> Delete </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
      
</template>

<script>
import axios from "axios";
import {mapActions} from "vuex";
export default {
    name: 'DeleteProduct',

    data :() => ({
        productName: null,
        dialog: false,
    }),

    mounted() {},

    props:{
      id : {
        type: Number,
        required: true
      }
    },
    methods:{
      ...mapActions({
        deleteProductToStore : "productlist/deleteProduct"
      }),
      deleteProduct(){
      const deleteProductUrl = "https://dummyjson.com/products/" + this.id;
      axios.delete(deleteProductUrl)
        .then((response) => {
          if(response.status === 200) {
            console.log("isDeleted")
            this.deleteProductToStore({id:this.id,name: this.productName});
          } else console.log(response.data);
        })
        .catch((err) => console.log(err));
    }
    }, 
};
</script>

<style>

</style>