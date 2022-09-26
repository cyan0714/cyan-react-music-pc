import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  topBanners: [],
  hotRecommends: [],
}
export const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    setTopBanners(state, action) {
      state.topBanners = action.payload
    },
    setHotRecommends(state, action) {
      state.hotRecommends = action.payload
    }
  },
})

export const { setTopBanners, setHotRecommends } = recommendSlice.actions