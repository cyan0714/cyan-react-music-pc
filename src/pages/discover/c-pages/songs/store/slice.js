import { createSlice } from '@reduxjs/toolkit'

import { PER_PAGE_NUMBER } from '@/utils/constants'
import { handleSongsCategory } from '@/utils/handle-data'

import { getSongCategory, getSongCategoryList } from '@/services/songs'

const initialState = {
  category: [],
  currentCategory: "全部",
  categorySongs: {}
}

export const songsSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    setCategory(state, { payload }) {
      state.category = payload
    },
    setCurrentCategory(state, { payload }) {
      state.currentCategory = payload
    },
    setCategorySongs(state, { payload }) {
      state.categorySongs = payload
    }
  },
})

export const getSongList = page => {
  return (dispatch, getState) => {
    // 1.获取currentCategory
    const name = getState().songs.currentCategory

    // 2.获取数据
    getSongCategoryList(name, page * PER_PAGE_NUMBER).then(res => {
      dispatch(songsSlice.actions.setCategorySongs(res))
    })
  }
}

export const getCategory = () => {
  return dispatch => {
    getSongCategory().then(res => {
      const categoryData = handleSongsCategory(res)
      dispatch(songsSlice.actions.setCategory(categoryData))
    })
  }
}

export const { setCategory, setCurrentCategory, setCategorySongs } = songsSlice.actions
