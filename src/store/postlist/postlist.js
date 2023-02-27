import getters from "@/store/postlist/getters";
import mutations from "@/store/postlist/mutations";
import actions from "@/store/postlist/actions";
export default {
    namespaced: true,
    state:{
        posts: [],
    },
    getters,
    mutations,
    actions
}