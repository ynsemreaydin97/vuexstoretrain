<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="blue-grey darken-1" dark v-bind="attrs" v-on="on">
        Update Post
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">Post Update</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-text-field outlined label="Post Title" v-model="postName">
          </v-text-field>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">
          Close
        </v-btn>
        <v-btn color="blue darken-1" text @click="updatePost"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";

export default {
  name: "UpdatePost",
  data: () => ({
    postName: null,
    dialog : false,
  }),
  mounted(){},
  props : {
    id: {
      type: Number,
      required: true
    }
  },
  methods: {
    ...mapActions({
      updatePostToStore: "postlist/editPost",
    }),
    updatePost(){
      const updatePostUrl = "https://dummyjson.com/posts/" + this.id;
      const data = {
        title: this.postName,
      };
      axios
          .patch(updatePostUrl,data)
          .then(response => {
            if(response.status === 200) {
              this.updatePostToStore({id:this.id,title: this.postName})
            } else console.log(response.data);
          })
          .catch((err) => console.log(err));
          this.dialog = false
    },
  },
};
</script>

<style scoped>

</style>