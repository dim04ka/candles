import { createSlice } from '@reduxjs/toolkit'


interface State {
  isShow: boolean
}

const initialState: State = {
  isShow: false
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    displayModal: (state: State, { payload: { isShow }}) => {
      state.isShow = isShow
    },
  },
})


export const { displayModal } = modalSlice.actions

export default modalSlice.reducer