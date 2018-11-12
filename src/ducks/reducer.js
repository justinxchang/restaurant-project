const initailState = {
    user: {},
    food: ''
}

const GET_DATA = "GET_DATA"
const FOOD = 'FOOD'

export default function (state = initailState, action) {
    switch (action.type) {
        case FOOD:
            return { ...state, food: action.payload }
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

export function addFOOD(food) {
    return {
        type: FOOD,
        payload: food
    }
}