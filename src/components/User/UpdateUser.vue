<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="blue-grey darken-1" dark v-bind="attrs" v-on="on">
        Update User
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">User Update</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-text-field outlined label="User Last Name" v-model="lastName">
          </v-text-field>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">
          Close
        </v-btn>
        <v-btn color="blue darken-1" text @click="updateUser"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";

export default {
  name: "UpdateUser",
  data: () => ({
    lastName: null,
    dialog: false,
  }),
  mounted() {},
  props: {
    id: {
      type: Number,
      required: true,
    }
  },
  methods:{
    ...mapActions({
      updateUserToStore: "userlist/editUser"
    }),
    updateUser(){
      const updateUserUrl = "https://dummyjson.com/users/" + this.id;
      const data = {
        lastName : this.lastName,
      };
      axios
          .patch(updateUserUrl,data)
          .then(response => {
            if(response.status === 200) {
              this.updateUserToStore({id:this.id, lastName : this.lastName})
            } else console.log(response.data);
          })
          .catch((err) => console.log(err));
          this.dialog = false
    },
  },
}
</script>

<style scoped>

</style>