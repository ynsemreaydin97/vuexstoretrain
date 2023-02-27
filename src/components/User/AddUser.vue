<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="blue-grey darken-1" dark v-bind="attrs" v-on="on">
        Add User
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">User Add</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-text-field outlined label="User Name" v-model="postUserName">
          </v-text-field>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">
          Close
        </v-btn>
        <v-btn color="blue darken-1" text @click="addUser"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";
import {mapActions} from "vuex";

export default {
  name: "AddUser",
  data: () => ({
    postUserName: null,
    dialog: false,
  }),
  mounted() {},
  methods:{
    ...mapActions({
      addUserToStore: "userlist/addUser"
    }),
    addUser(){
      const addUserUrl = "https://dummyjson.com/users/add";
      const data = {
        firstName : this.postUserName,
        lastName : 'AYDIN',
        age : 26
      };
      axios
          .post(addUserUrl,data)
          .then((response) => {
            if(response.status === 200) {
              console.log("User Added!")
              this.addUserToStore({user: response.data});
            } else console.log("User Not Added!!!",response.data);
          })
          .catch((err) => console.log(err));
          this.dialog = false
    },
  },
};
</script>

<style scoped>

</style>