import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { productsList } from './productList'

import { Product } from '../../types'

export interface State {
  products: Product[]
}

const initialState: State = {
  products: productsList
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    increment: (state) => {
      // state.value += 1
    },
    decrement: (state) => {
      // state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      // state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = productsSlice.actions

export default productsSlice.reducer