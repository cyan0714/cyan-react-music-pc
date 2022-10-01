import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  topBanners: [],
  hotRecommends: [],
  newAlbum: [],
  topUpListObj: {},
  topNewListObj: {},
  topOriginListObj: {},
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
    setTopUpListObj(state, action) {
      state.topUpListObj = action.payload
    },
    setTopNewListObj(state, action) {
      state.topNewListObj = action.payload
    },
    setTopOriginListObj(state, action) {
      state.topOriginListObj = action.payload
    },
  },
})

export const {
  setTopBanners,
  setHotRecommends,
  setNewAlbum,
  setTopUpListObj,
  setTopNewListObj,
  setTopOriginListObj,
} = recommendSlice.actions
