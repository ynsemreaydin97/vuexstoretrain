import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import commentlist from "@/store/commentlist/commentlist";
import postlist from "@/store/postlist/postlist";
import productlist  from "@/store/productlist/productlist";
import userlist from "@/store/userlist/userlist"

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    commentlist,
    postlist,
    productlist,
    userlist
  }
})
