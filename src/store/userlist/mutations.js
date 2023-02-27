export default {
    setUsers(state,payload) {
        state.users = payload.users
    },
    addUser(state,payload){
        state.users.push(payload.user)
    },
    deleteUser(state,payload){
        let deletedUserIndex = state.users.findIndex(user => user.id === payload.id);
        if(deletedUserIndex !== -1) {
            state.users.splice(deletedUserIndex,1);
        }
    },
    editUser(state, payload) {
        let addedUser = state.users.find(user => user.id === payload.id);
        addedUser.lastName = payload.lastName
        state.users = state.users.filter(user => user.id !== payload.id)
        state.users.push(addedUser)
    },

}