<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="error" dark v-bind="attrs" v-on="on">
        Delete Comment
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">Comment Delete</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <p> ARE YOU SURE FOR DELETE THAT COMMENT?</p>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">
          Close
        </v-btn>
        <v-btn color="blue darken-1" text @click="deleteComment"> Delete </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";

export default {
  name: "DeleteComment",

  data: () => ({
    postId:null,
    dialog: false,
  }),

  props: {
    id: {
      type: Number,
      required: true,
    },
  },

  methods: {
    ...mapActions({
      deleteCommentToStore: "commentlist/deleteComment",
    }),

    deleteComment() {
      const deleteCommentUrl = "https://dummyjson.com/comments/" + this.id;
      axios
          .delete(deleteCommentUrl)
          .then((response) => {
            if (response.status === 200) {
              console.log("isDeleted");
              this.deleteCommentToStore({ id: this.id});
            } else {
              console.log(response.data);
            }
          })
          .catch((err) => console.log(err));
      this.dialog = false;
    },
  },
};
</script>
