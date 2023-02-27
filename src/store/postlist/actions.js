export default {
    setPosts(context,payload) {
        context.commit('setPosts',payload)
    },
    addPost(context,payload) {
        context.commit('addPost',payload)
    },
    deletePost(context,payload) {
        context.commit('deletePost',payload)
    },
    editPost(context,payload) {
        context.commit('editPost',payload)
    },
}