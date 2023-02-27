<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="error" dark v-bind="attrs" v-on="on">
        Delete User
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">User Delete</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <p> ARE YOU SURE FOR DELETE THAT USER?</p>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">
          Close
        </v-btn>
        <v-btn color="blue darken-1" text @click="deleteUser"> Delete </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";
import {mapActions} from "vuex";

export default {
  name: "DeleteUser",

  data : () => ({
    userName: null,
    dialog: false,
  }),
  props:{
    id: {
      type:Number,
      required:true
    }
  },
  mounted() {},
  methods:{
    ...mapActions({
      deleteUserToStore: "userlist/deleteUser"
    }),
    deleteUser(){
      const deleteUserUrl = "https://dummyjson.com/users/" + this.id;
      axios.delete(deleteUserUrl)
          .then((response) => {
            if(response.status === 200) {
              console.log("User is  Deleted!!!")
              this.deleteUserToStore({id:this.id,name:this.userName});
            }
          })
          .catch((err) => console.log(err));
      this.dialog = false
    }
  },

}
</script>

<style scoped>

</style>