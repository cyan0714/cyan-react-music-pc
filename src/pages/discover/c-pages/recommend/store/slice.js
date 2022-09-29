import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  topBanners: [],
  hotRecommends: [],
  newAlbum: [],
  topUpList: {},
  topNewList: {},
  topOriginList: {},
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
    },
    setTopUpList(state, action) {
      state.topUpList = action.payload
    },
    setTopNewList(state, action) {
      state.topNewList = action.payload
    },
    setTopOriginList(state, action) {
      state.topOriginList = action.payload
    },
  },
})

export const {
  setTopBanners,
  setHotRecommends,
  setNewAlbum,
  setTopUpList,
  setTopNewList,
  setTopOriginList,
} = recommendSlice.actions
