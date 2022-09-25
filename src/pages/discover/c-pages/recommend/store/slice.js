import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  topBanners: [],
}
export const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    setTopBanners(state, action) {
      state.topBanners = action.payload
    },
  },
})

export const { setTopBanners } = recommendSlice.actions