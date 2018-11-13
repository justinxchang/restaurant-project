const initailState = {
    user: {},
    food: '',
    cart: []
}

const GET_DATA = "GET_DATA"
const FOOD = 'FOOD'
const ADD_TO_CART = "ADD_TO_CART"

export default function (state = initailState, action) {
    switch (action.type) {
        case FOOD:
            return { ...state, food: action.payload }
        case ADD_TO_CART:
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
        type: GET_DATA,
        payload: item
    }
}

export function addFood(food) {
    return {
        type: FOOD,
        payload: food
    }
}