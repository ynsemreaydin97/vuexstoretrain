export default {
    setUsers(context,payload) {
        context.commit('setUsers',payload)
    },
    addUser(context,payload) {
        context.commit('addUser',payload)
    },
    deleteUser(context,payload) {
        context.commit('deleteUser',payload)
    },
    editUser(context,payload) {
        context.commit('editUser',payload)
    },
}