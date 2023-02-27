import getters from "@/store/productlist/getters"
import mutations from "@/store/productlist/mutations"
import actions from "@/store/productlist/actions"

export default {
    namespaced: true,
    state: {
        products: [],
    },
    getters,
    mutations,
    actions
}