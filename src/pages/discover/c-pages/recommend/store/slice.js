import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  topBanners: [],
  hotRecommends: [],
  newAlbum: []
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
    },
    setNewAlbum(state, action) {
      state.newAlbum = action.payload
    }
  },
})

export const { setTopBanners, setHotRecommends, setNewAlbum } = recommendSlice.actions