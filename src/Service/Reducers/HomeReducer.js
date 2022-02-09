import { Add, Subt } from '../constants';
const initialState = 0
export default function Value(state = initialState, action) {
    switch (action.type) {
        case Add: console.log(state)
            return state + 1
        case Subt: console.log(state)
            return state - 1
        default:
            return state
    }
}