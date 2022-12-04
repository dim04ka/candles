import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
// import { Payload } from './types'

interface Payload {
  id?: number
}


interface State {
  orders: Order[],
  amount: number | null
}

export interface Order {
  count: number,
  id: number
}

const initialState: State = {
  orders: [],
  amount: null
}

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    increase: (state: State, action): void => {
      const { payload } = action;
      const order = findOrder(state, payload.id)
      if (order){
        order.count = order.count + 1
      } else {
        state.orders.push({ id: payload.id, count: 1})
      }
    },
    deсrease: (state, { payload }) => {
      const order = findOrder(state, payload.id) as Order
      
      if (order.count === 1) {
        state.orders = state.orders.filter(el => el.id !== payload.id)
      } else {
        order.count = order.count - 1
      }
    },
    remove: (state, { payload }) => {
      state.orders = state.orders.filter(el => el.id !== payload.id)
    },
    setTotal: (state, { payload: { amount } }) => {
      state.amount = amount
    },
    reset: (state) => {
      state.orders = []
      state.amount = null
    }
  },
})

const findOrder = (state: State, id: number) => {
  return state.orders.find(el => el.id === id)
}

export const { increase, deсrease, remove, setTotal, reset } = ordersSlice.actions

export default ordersSlice.reducer