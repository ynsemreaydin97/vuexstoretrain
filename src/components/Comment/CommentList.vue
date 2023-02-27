<template>
    <v-container>
      <v-row>
        <v-card
          class="mx-auto my-12 d-block"
          max-width="374"
          color="grey darken-2"
        >
          <v-card-title class="white--text">
            {{ user.name }}
          </v-card-title>
          <v-card-text>
            <p> Comment Id : {{ comment.postId }}</p>
            <p> Comment : {{ comment.body }}</p>
          </v-card-text>
          <delete-comment :id=comment.id></delete-comment>
          <update-comment :id=comment.id></update-comment>
        </v-card>
      </v-row>
    </v-container>
  </template>
  <script>
  import { mapGetters } from 'vuex';
  import UpdateComment from "@/components/Comment/UpdateComment.vue";
  import DeleteComment from "@/components/Comment/DeleteComment.vue";
  export default {
    name: "CommentList",
    components: {
      UpdateComment,DeleteComment
    },
    computed:{
      ...mapGetters({
        comments : "commentlist/getComments",
        users : "userList/getUsers"
      })
    },
    props : {
      comment : {
        type: Object,
        required: true
      },
      user : {
        type: Object,
        required: true,
      }
    }
  };
  </script>
  
  <style scoped></style>
  