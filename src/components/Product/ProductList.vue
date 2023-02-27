<template>
  <v-container>
    <v-row>
      <v-card
        class="mx-auto my-12 d-block"
        max-width="374"
        color="grey darken-2"
      >
        <v-img height="250" :src="product.thumbnail"> </v-img>
        <v-card-title class="white--text">
          {{ product.title }}
        </v-card-title>
        <v-card-text>
          {{ product.brand }}
          {{ product.category }}
          {{ product.price }}
          {{ product.description }}
        </v-card-text>
        <delete-product :id=product.id>
        </delete-product>
        <update-product :id=product.id >
        </update-product>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import DeleteProduct from './DeleteProduct.vue';
import UpdateProduct from './UpdateProduct.vue'
export default {
  name: "ProductList",
  components: {
    DeleteProduct,UpdateProduct
  },
  computed:{
    ...mapGetters({
      products : "productlist/getProducts",
    })
  },
  props : {
    product : {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped></style>
