<template>
  <v-container>
    <add-product/>
    <v-row>
      <v-col md="6" sm="12" lg="4" v-for="product in products" :key="product.id">
        <product-list
        :product="product"
        >
        </product-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';
import { mapActions, mapGetters } from 'vuex';
import ProductList from '@/components/Product/ProductList.vue';
import AddProduct from '@/components/Product/AddProduct.vue';
  export default {
    name: 'ProductView',

    components: {
      ProductList, AddProduct
    },
    computed:{
      ...mapGetters({
        products : "productlist/getProducts",
      })
    },
    mounted(){  
      this.fetchProducts();
    },
    methods:{
      ...mapActions({
        setProducts : "productlist/setProducts"
      }),
      fetchProducts(){
        const productUrl = 'https://dummyjson.com/products';
        axios.get(productUrl)
         .then(response => {
            if(response.status === 200) {
              this.setProducts({products: response.data.products})
            } else console.log(response)
         })
         .catch(err => console.log(err))
      }
    },
    
    
  }
</script>
