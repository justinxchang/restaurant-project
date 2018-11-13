const initailState = {
    user: {},
    food: '',
    cart: []
}

const GET_DATA = "GET_DATA"
const FOOD = 'FOOD'
const ADD_TO_CART = "ADD_TO_CART"
const GET_FROM_CART = "GET FROM CART"
const DELETE_FROM_CART = "DELETE_FROM_CART"

export default function (state = initailState, action) {
    switch (action.type) {
        case FOOD:
            return { ...state, food: action.payload }
        // case ADD_TO_CART:
        //     return { ...state, cart: action.payload }
        case GET_FROM_CART:
            return { ...state, cart: action.payload }
        case DELETE_FROM_CART:
            return { ...state, cart: action.payload }
        default:
            return state
    }
}

export function getData(data) {
    return {
        type: GET_DATA,
        payload: data
    }
}

export function addToCart(item){
    return {
        type: ADD_TO_CART,
        payload: item
    }
} 

export function deleteFromCart(item){
    return {
        type: DELETE_FROM_CART,
        payload: item
    }
}

export function getFromCart(cart){
    return {
        type: GET_FROM_CART,
        payload: cart
    }
}

// export function addFood(food) {
//     return {
//         type: FOOD,
//         payload: food
//     }
// }  