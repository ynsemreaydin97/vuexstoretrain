<template>
    <v-container>
      <add-user></add-user>
        <v-row>
            <v-col md="6" sm="12" lg="4" v-for="user in users" :key="user.id">
                <user-list :user="user"> </user-list>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from "axios";
import { mapActions, mapGetters } from "vuex";
import UserList from "@/components/User/UserList.vue";
import AddUser from "@/components/User/AddUser.vue";

export default {
    name: "UserView",

    components: {
        UserList,
        AddUser
    },
    computed: {
        ...mapGetters({
            users: "userlist/getUsers",
        }),
    },
    mounted() {
        this.fetchUsers();
    },
    methods: {
        ...mapActions({
            setUsers: "userlist/setUsers",
        }),
        fetchUsers() {
            const userUrl = "https://dummyjson.com/users";
            axios
                .get(userUrl)
                .then((response) => {
                    if (response.status === 200) {
                        this.setUsers({ users: response.data.users });
                    } else console.log(response);
                })
                .catch((err) => console.log(err));
        },
    },
};
</script>
