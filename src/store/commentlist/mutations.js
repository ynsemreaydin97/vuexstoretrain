export default {
    setComments(state,payload) {
        state.comments = payload.comments
    },
    addComment(state,payload) {
        state.comments.push(payload.comment)
    },
    editComment(state, payload) {
        let editedComment = state.comments.find(comment => comment.id === payload.id);
        editedComment.body = payload.body;
        state.comments = state.comments.filter(comment => comment.id !== payload.id);
        state.comments.push(editedComment);
    },
    deleteComment(state,payload){
        let deletedComment = state.comments.findIndex(comment => comment.id === payload.id);
        if(deletedComment !== -1) {
            state.comments.splice(deletedComment,1);
        }
    },


}
