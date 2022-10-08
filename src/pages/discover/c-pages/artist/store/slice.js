import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getArtistList } from '@/services/artist'

export const fetchArtistListAction = createAsyncThunk(
  'artist/artistList',
  async params => await getArtistList(params)
)

const initialState = {
  currentArea: 7,
  currentType: {
    name: '推荐歌手',
    type: 1,
  },
  artistList: [],
}

export const artistSlice = createSlice({
  name: 'artist',
  initialState,
  reducers: {
    setCurrentArea(state, action) {
      state.currentArea = action.payload
    },
    setCurrentType(state, action) {
      state.currentType = action.payload
    },
  },
  extraReducers: {
    [fetchArtistListAction.fulfilled](state, { payload }) {
      state.artistList = payload.artists
    },
  },
})

export const { setCurrentArea, setCurrentType } = artistSlice.actions
