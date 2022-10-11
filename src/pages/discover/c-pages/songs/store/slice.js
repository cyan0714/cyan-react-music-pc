import { createSlice } from '@reduxjs/toolkit'

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

export const { setCategory, setCurrentCategory, setCategorySongs } = songsSlice.actions
