import { put, takeEvery, select } from 'redux-saga/effects'
import { increase } from '../orders/actions'
// const delay = (ms) => new Promise(res => setTimeout(res, ms))
import * as Actions from '../orders/types';
// ...
import { selectSelf } from '../products/selectors'




// Our worker Saga: will perform the async increment task
export function* incrementAsync() {

  const state = yield select();

  const products = state.products.products

  const amount = state.orders.orders.reduce((acc, item) => {

    const product = products.find(el => el.id === item.id)
    return acc + (+product.price * item.count)
  }, 0)

  yield put({ type: 'orders/setTotal', payload: { amount } })
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* RootSaga() {
  yield takeEvery(['orders/increase', 'orders/deсrease', 'orders/remove'], incrementAsync)
}