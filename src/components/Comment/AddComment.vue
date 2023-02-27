<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="blue-grey darken-1" dark v-bind="attrs" v-on="on">
        Add Comment
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">Comment Add</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-text-field outlined label="Comment Content" v-model="commentBody">
          </v-text-field>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">
          Close
        </v-btn>
        <v-btn color="blue darken-1" text @click="addComment"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";
export default {
  name: "AddComment",

  data: () => ({
    commentBody: null,
    dialog: false,
  }),

  mounted() {},

  methods: {
    ...mapActions({
      addCommentToStore: "commentlist/addComment",
    }),
    addComment() {
      const addCommentUrl = 'https://dummyjson.com/comments/add';
      const data = {
        body: this.commentBody,
        postId:1,
        userId:1,
      };
      axios
          .post(addCommentUrl, data)
          .then((response) => {
            if (response.status === 200) {
              console.log("Added");
              this.addCommentToStore({ comment : response.data });
            } else console.log("Not Added", response.data);
          })
          .catch((err) => console.log(err));
      this.dialog = false
    },
  },
};
</script>

<style></style>
