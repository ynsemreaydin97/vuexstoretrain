<template>
    <v-container>
      <v-row>
        <v-card
          class="mx-auto my-12 d-block"
          max-width="374"
          color="grey darken-2"
        >
          <v-card-title class="black--text">
            {{ post.title }}
          </v-card-title>
          <v-card-text>
            <p>{{ post.body }}</p>
            <p>Post Reactions : {{ post.reactions }}</p>
            <p>Author ID : {{ post.userId }}</p>
          </v-card-text>
          <delete-post :id=post.id></delete-post>
          <update-post :id="post.id"></update-post>
        </v-card>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import { mapGetters } from 'vuex';
  import DeletePost from "./DeletePost.vue";
  import UpdatePost from "@/components/Post/UpdatePost.vue";
  export default {
    name: "PostList",
    components:{
      DeletePost,
      UpdatePost
    },
    computed:{
      ...mapGetters({
        posts : "postlist/getPosts",
      })
    },
    props : {
      post : {
        type: Object,
        required: true
      }
    }
  };
  </script>
  
<style scoped>
  p {
    color: white;
  }
</style>
  