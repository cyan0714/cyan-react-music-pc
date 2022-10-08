import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getHotAlbums, getAllAlbums} from '@/services/album';

export const fetchHotAlbumsAction = createAsyncThunk('album/hotAlbums', async () => await getHotAlbums())
export const fetchAllAlbumsAction = createAsyncThunk('album/allAlbums', async (params) => await getAllAlbums(params))

const initialState = {
  hotAlbums: [],
  allAlbums: [],
  total: 0,
}

export const albumSlice = createSlice({
  name: 'album',
  initialState,
  reducers: {
    setHotAlbums(state, { payload }) {
      state.hotAlbums = payload
    },
    setAllAlbums(state, { payload }) {
      state.allAlbums = payload
    },
  },
  extraReducers: {
    [fetchHotAlbumsAction.fulfilled](state, { payload }) {
      state.hotAlbums = payload.weekData.slice(0,10)
    },
    [fetchAllAlbumsAction.fulfilled](state, { payload }) {
      state.allAlbums = payload.albums
      state.total = payload.total
    }
  }
})

export const {
  setHotAlbums,
  setAllAlbums,
} = albumSlice.actions
