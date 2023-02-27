<template>
  <v-container>
    <v-row>
      <v-card
        class="mx-auto my-12 d-block"
        max-width="374"
        color="grey darken-2"
      >
        <v-img height="250" :src="user.image"> </v-img>
        <v-card-title class="white--text">
          {{ user.firstName }} {{ user.lastName }}
        </v-card-title>
        <v-card-text>
          <p>Age : {{ user.age }}</p>
          <p>Gender : {{ user.gender }}</p>
          <p>Email : {{ user.email }}</p>
          <p>Phone : {{ user.phone }}</p>
        </v-card-text>
        <delete-user :id="user.id"></delete-user>
        <update-user :id="user.id"></update-user>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import DeleteUser from "@/components/User/DeleteUser.vue";
import UpdateUser from "@/components/User/UpdateUser.vue";
export default {
  name: "UserList",
  components:{
    DeleteUser,
    UpdateUser
  },
  computed: {
    ...mapGetters({
      users: "userlist/getUsers",
    }),
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
p {
  color: white;
}
</style>
