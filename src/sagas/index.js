import { fork, all } from 'redux-saga/effects'
import { watchFetchCustomers } from './customer';
import { watchFetchAddress } from './address';


export default function* root() {
    yield all([
      fork(watchFetchCustomers),
      fork(watchFetchAddress)
    ])
  }