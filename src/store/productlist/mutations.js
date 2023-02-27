export default {
    setProducts(state,payload) {
        state.products = payload.products
    },
    addProduct(state, payload) {
        state.products.push(payload.product)
    },
    editProduct(state, payload) {
        let addedProduct = state.products.find(product => product.id === payload.id);
        addedProduct.title = payload.title
        state.products = state.products.filter(product => product.id !== payload.id)
        state.products.push(addedProduct)
    },
    deleteProduct(state,payload) {
        let deletedProductIndex = state.products.findIndex(product => product.id === payload.id);
        if (deletedProductIndex !== -1) {
        state.products.splice(deletedProductIndex, 1);
     }
    },
}
