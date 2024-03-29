import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getTopBanners, getHotRecommends, getNewAlbum, getTopList, getArtistList } from '@/services/recommend'

export const fetchTopBannersAction = createAsyncThunk("recommend/topBanners", async () => await getTopBanners())
export const fetchHotRecommendsAction = createAsyncThunk("recommend/hotRecommends", async () => await getHotRecommends())
export const fetchNewAlbumAction = createAsyncThunk("recommend/newAlbum", async (params) => await getNewAlbum(params))
export const fetchTopListAction = createAsyncThunk("recommend/topList", async (params) => await getTopList(params))
export const fetchSettleSingersAction = createAsyncThunk("recommend/settleSingers", async (params) => await getArtistList(5, 5001))

const initialState = {
  topBanners: [],
  hotRecommends: [],
  newAlbum: [],
  topUpListObj: {},
  topNewListObj: {},
  topOriginListObj: {},
  settleSingers: []
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
    setSettleSingers(state, action) {
      state.settleSingers = action.payload
    }
  },
  extraReducers: {
    [fetchTopBannersAction.fulfilled](state, { payload }) {
      state.topBanners = payload.banners
    },
    [fetchHotRecommendsAction.fulfilled](state, {payload}) {
      state.hotRecommends = payload.result
    },
    [fetchNewAlbumAction.fulfilled](state, {payload}) {
      state.newAlbum = payload.weekData
    },
    [fetchTopListAction.fulfilled](state, { payload }) {
      switch (payload.playlist.name) {
        case '飙升榜':
          state.topUpListObj = payload.playlist
          break;
        case '新歌榜':
          state.topNewListObj = payload.playlist
          break;
        case '原创榜':
          state.topOriginListObj = payload.playlist
          break;
        default:
          break;
      }
    },
    [fetchSettleSingersAction.fulfilled](state, { payload }) {
      state.settleSingers = payload.artists 
    }
  }
})

export const {
  setTopBanners,
  setHotRecommends,
  setNewAlbum,
  setTopUpListObj,
  setTopNewListObj,
  setTopOriginListObj,
  setSettleSingers,
} = recommendSlice.actions
