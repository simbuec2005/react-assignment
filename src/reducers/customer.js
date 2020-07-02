
import {
    GET_CUSTOMERS, GET_CUSTOMERS_SUCCESS
} from '../actions'

function customer(state = {
    data: [],
    loading: false
}, action) {
    switch (action.type) {
        case GET_CUSTOMERS:
            return {
                ...state,
                loading: true,
            }
        case GET_CUSTOMERS_SUCCESS:
            return {
                ...state,
                data: action.customers,
                loading: false
            }
        default:
            return state
    }
}

export default customer;