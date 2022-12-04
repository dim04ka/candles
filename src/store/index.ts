import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './products'
import ordersReducer from './orders'
import modalReducer from './modal'

import createSagaMiddleware from 'redux-saga'


import { RootSaga } from './sagas'

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    products: productsReducer,
    orders: ordersReducer,
    modal: modalReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
    thunk: false
  }).concat(sagaMiddleware)
})

sagaMiddleware.run(RootSaga);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
