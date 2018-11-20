const initailState = {
    user: {},
    foodMenu: [],
    drinkMenu: [],
    cart: [],
    orders: [],
    total: 0
}

const UPDATE_FOOD_MENU = "UPDATE_FOOD_MENU"
const UPDATE_DRINK_MENU = "UPDATE_DRINK_MENU"
const UPDATE_CART = "UPDATE_CART"
const UPDATE_TOTAL = "UPDATE_TOTAL"

export default function (state = initailState, action) {
    switch (action.type) {
        case UPDATE_FOOD_MENU:
            return { ...state, foodMenu: action.payload }
        case UPDATE_DRINK_MENU:
            return { ...state, drinkMenu: action.payload }
        case UPDATE_CART:
            return { ...state, cart: action.payload }
        case UPDATE_TOTAL:
            return { ...state, total: action.payload }
        default:
            return state
    }
}

export function updateFoodMenu(menu){
    return {
        type: UPDATE_FOOD_MENU,
        payload: menu
    }
}
export function updateDrinkMenu(menu){
    return {
        type: UPDATE_DRINK_MENU,
        payload: menu
    }
}

export function updateCart(cart){
    return {
        type: UPDATE_CART,
        payload: cart
    }
}
export function updateTotal(total){
    return {
        type: UPDATE_TOTAL,
        payload: total
    }
}

