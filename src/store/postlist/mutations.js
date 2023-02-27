export default {
    setPosts(state,payload) {
        state.posts = payload.posts
    },
    addPost(state,payload){
      state.posts.push(payload.post)
    },
    deletePost(state,payload) {
        let deletedPostIndex = state.posts.findIndex(post => post.id === payload.id);
        if (deletedPostIndex !== -1) {
            state.posts.splice(deletedPostIndex,1);
        }
    },
    editPost(state,payload) {
        const index = state.posts.findIndex(post => post.id === payload.id);
        if (index !== -1) {
            state.posts[index].title = payload.title;
        }
    }
}