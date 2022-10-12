import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getRankingList, getTopList } from '@/services/ranking'

const initialState = {
  topList: [],
  currentIndex: 0,
  playList: {}
}

export const rankingSlice = createSlice({
  name: 'ranking',
  initialState,
  reducers: {
    setTopList(state, action) {
      state.topList = action.payload
    },
    setCurrentIndex(state, action) {
      state.currentIndex = action.payload
    },
    setPlayList(state, action) {
      state.playList = action.payload
    }
  },
})

export const getRanking = (id) => {
  return dispatch => {
    getRankingList(id).then(res => {
      dispatch(rankingSlice.actions.setPlayList(res.playlist))
    })
  }
}

export const getTops = () => {
  return dispatch => {
    getTopList().then(res => {
      dispatch(rankingSlice.actions.setTopList(res.list));
    })
  }
}

export const { setTopList, setCurrentIndex, setPlayList} = rankingSlice.actions
