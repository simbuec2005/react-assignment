import { put, call, takeEvery } from 'redux-saga/effects'
import { GET_CUSTOMERS, getCustomersSuccess } from '../actions';
import { callApi } from '../services/api';
import endpoints from '../services/endpoints';

export function* fetchCustomers() {
    const customers = yield call(callApi, endpoints.CUSTOMER);
    yield put(getCustomersSuccess(customers))
}

export function* watchFetchCustomers() {    
        yield takeEvery(GET_CUSTOMERS, fetchCustomers);
}
