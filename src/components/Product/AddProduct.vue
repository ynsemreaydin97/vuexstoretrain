<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="blue-grey darken-1" dark v-bind="attrs" v-on="on">
        Add Product
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">Product Add</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-text-field outlined label="Product Name" v-model="productName">
          </v-text-field>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">
          Close
        </v-btn>
        <v-btn color="blue darken-1" text @click="addProduct"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";
export default {
  name: "AddProduct",

  data: () => ({
    productName: null,
    dialog: false,
  }),

  mounted() {},

  methods: {  
    ...mapActions({
      addProductToStore: "productlist/addProduct",
    }),
    addProduct() {
      const addProductUrl = "https://dummyjson.com/products/add";
      const data = {
        title: this.productName,
      };
      axios
        .post(addProductUrl, data)
        .then((response) => {
          if (response.status === 200) {
            console.log("Added");
            this.addProductToStore({ product: response.data });
          } else console.log("Not Added", response.data);
        })
        .catch((err) => console.log(err));
      this.dialog = false
    },
  },
};
</script>

<style></style>
