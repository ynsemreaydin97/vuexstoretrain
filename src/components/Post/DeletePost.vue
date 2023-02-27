<template>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="error" dark v-bind="attrs" v-on="on">
          Delete Post
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Post Delete</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <p> ARE YOU SURE FOR DELETE THAT POST?</p>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="deletePost"> Delete </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
  import axios from "axios";
  import {mapActions} from "vuex";

  export default {
  name: "DeletePost",

    data : () => ({
      postName: null,
      dialog: false,
    }),
    props:{
      id : {
      type:Number,
      required: true
     }
    },
    mounted() {},

    methods:{
    ...mapActions({
      deletePostToStore : "postlist/deletePost"
    }),
      deletePost(){
      const deletePostUrl = "https://dummyjson.com/posts/" + this.id;
      axios.delete(deletePostUrl)
          .then((response) => {
            if(response.status === 200) {
              console.log("Post is Deleted!!!")
              this.deletePostToStore({id:this.id,name:this.postName});
            }
          })
          .catch((err) => console.log(err));
      }
    },
  };
</script>

<style>

</style>
