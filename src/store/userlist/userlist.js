import getters from "@/store/userlist/getters";
import mutations from "@/store/userlist/mutations";
import actions from "@/store/userlist/actions";

export default {
    namespaced: true,
    state: {
        users: [],
    },
    getters,
    mutations,
    actions
}