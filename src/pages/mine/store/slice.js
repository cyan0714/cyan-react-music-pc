import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentPlayListObj: {}
}

export const mineSlice = createSlice({
  name: 'mine',
  initialState,
  reducers: {
    setCurrentPlayListObj(state, action) {
      state.currentPlayListObj = action.payload
    },
  },
})



export const { setCurrentPlayListObj } = mineSlice.actions
