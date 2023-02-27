import getters from "@/store/commentlist/getters"
import mutations from "@/store/commentlist/mutations"
import actions from "@/store/commentlist/actions"

export default {
   namespaced: true,
    state: {
        comments:[],
    },
    getters,
    mutations,
    actions
}