
import { combineReducers } from 'redux';
import customer from './customer';
import address from './address';

const rootReducer = combineReducers({
    customer,
    address
})

export default rootReducer;
