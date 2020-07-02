
import {GET_CUSTOMER_ADDRESS,
    GET_CUSTOMER_ADDRESS_SUCCESS
} from '../actions'

function address(state = {
    data: [],
    loading: false
}, action) {
    switch (action.type) {
        case GET_CUSTOMER_ADDRESS:
            return {
                ...state,
                loading: true,
            }
        case GET_CUSTOMER_ADDRESS_SUCCESS:
            return {
                ...state,
                data: action.address,
                loading: false,
            }
        default:
            return state
    }
}

export default address;