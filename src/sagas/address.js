import { put, call, takeEvery } from 'redux-saga/effects'
import { GET_CUSTOMER_ADDRESS, getCustomerAddressSuccess } from '../actions'
import { callApi } from '../services/api';
import endpoints from '../services/endpoints';


export function* fetchAddress() {
    const address = yield call(callApi, endpoints.ADDRESS)
    yield put(getCustomerAddressSuccess(address))
}

export function* watchFetchAddress() {
    yield takeEvery(GET_CUSTOMER_ADDRESS, fetchAddress);
}