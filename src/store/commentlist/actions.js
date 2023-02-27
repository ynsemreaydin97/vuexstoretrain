export default {
    setComments(context,payload){
        context.commit('setComments',payload)
    },
    addComment(context,payload) {
        context.commit('addComment',payload)
    },
    editComment(context,payload) {
        context.commit('editComment',payload)
    },
    deleteComment(context,payload) {
        context.commit('deleteComment',payload)
    }
}