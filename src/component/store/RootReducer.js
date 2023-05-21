
const initState = {
    products: [],
    cart: []
}
export const root = (state = initState, action) => {
    switch (action.type) {
        case "product/load": {
            return {
                ...state,
                products: action.payload
            }
        }
        case "cart/add": {
            let cart  =state.cart;
            localStorage.setItem('cart', cart);
            return {
                ...state,
                cart: [
                    ...state.cart,
                    action.payload
                ]
            }
        }
        case "cart/remove": {
            let cart = state.cart.filter(p => p.id !== action.payload.id);
            return {
                ...state,
                cart: [
                    ...
                        cart
                ]
            }
        }
        default:
            return state;
    }
}