const initailState = {
    user: {},
    food: '',
    menu: [],
    cart: [],
    orders: [],
    total: 0
}

const GET_DATA = "GET_DATA"
const UPDATE_CART = "UPDATE_CART"
const UPDATE_MENU = "UPDATE_MENU"
const FOOD = 'FOOD'
const ADD_TO_CART = "ADD_TO_CART"
const GET_FROM_CART = "GET FROM CART"
const DELETE_FROM_CART = "DELETE_FROM_CART"
const GET_FROM_ORDERS = "GET_FROM_ORDERS"
const UPDATE_TOTAL = "UPDATE_TOTAL"

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
        case GET_FROM_ORDERS:
            return { ...state, orders: action.payload }
        case UPDATE_CART:
            return { ...state, cart: action.payload }
        case UPDATE_MENU:
            return { ...state, menu: action.payload }
        case UPDATE_TOTAL:
            return { ...state, total: action.payload }
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

// export function getFromCart(cart){
//     return {
//         type: GET_FROM_CART,
//         payload: cart
//     }
// }

export function getFromOrders(order){
    return {
        type: GET_FROM_ORDERS,
        payload: order
    }
}
export function updateCart(cart){
    return {
        type: UPDATE_CART,
        payload: cart
    }
}

export function updateMenu(menu){
    return {
        type: UPDATE_MENU,
        payload: menu
    }
}
export function updateTotal(total){
    return {
        type: UPDATE_TOTAL,
        payload: total
    }
}

// export function addFood(food) {
//     return {
//         type: FOOD,
//         payload: food
//     }
// }  