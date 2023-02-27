<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="blue-grey darken-1" dark v-bind="attrs" v-on="on">
        Update Comment
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">Comment Update</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-text-field outlined label="Comment Body" v-model="commentBody">
          </v-text-field>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">
          Close
        </v-btn>
        <v-btn color="blue darken-1" text @click="updateComment"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";
export default {
  name: "UpdateComment",

  data: () => ({
    commentBody: null,
    dialog: false,
  }),

  mounted() {},

  props: {
    id: {
      type: Number,
      required: true
    }
  },


  methods: {
    ...mapActions({
      updateCommentToStore: "commentlist/editComment",
    }),
    updateComment() {
      const updateCommentUrl = "https://dummyjson.com/comments/" + this.id;
      const data = {
        body: this.commentBody,
      };
      axios
          .patch(updateCommentUrl, data)
          .then(response => {
            if (response.status === 200) {
              this.updateCommentToStore({id: this.id, body: this.commentBody})
            } else console.log(response.data);
          })
          .catch((err) => console.log(err));
      this.dialog = false
    },
  },
};
</script>


