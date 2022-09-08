export const storage = {
    state: {
        inventory: [],
        cart: []
    },
    gettters: {
        getInventory(state) {
            return state.inventory
        },
        getCart(state) {
            return state.cart
        }
    }
}