export default {
    setProducts(context,payload) {
        context.commit('setProducts',payload)
    },
    addProduct(context, payload) {
        context.commit('addProduct', payload)
    },
    deleteProduct(context,payload) {
        context.commit('deleteProduct',payload)
    },
    editProduct(context,payload) {
        context.commit('editProduct',payload)
    },
}