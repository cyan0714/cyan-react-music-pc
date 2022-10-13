import { createSlice } from '@reduxjs/toolkit'
import { 
  getDjRadioCatelist,
  getDjRadioRecommend,
  getDjRadios
} from "@/services/djradio";

const initialState = {
  categories: [],
  currentId: 0,
  recommends: [],
  radios: []
}

export const djradioSlice = createSlice({
  name: 'djradio',
  initialState,
  reducers: {
    setCategories(state, { payload }) {
      state.categories = payload
    },
    setCurrentId(state, { payload }) {
      state.currentId = payload
    },
    setRecommends(state, { payload }) {
      state.recommends = payload
    },
    setRadios(state, { payload }) {
      state.radios = payload
    },
  },
})

export const { setCategories, setCurrentId, setRecommends, setRadios } = djradioSlice.actions

export const getRadioCategories = () => {
  return dispatch => {
    getDjRadioCatelist().then(res => {
      dispatch(setCategories(res.categories));
      const currentId = res.categories[0].id;
      dispatch(setCurrentId(currentId));
    })
  }
}

export const getRadioRecommend = (currentId) => {
  return dispatch => {
    getDjRadioRecommend(currentId).then(res => {
      dispatch(setRecommends(res.djRadios));
    })
  }
}

export const getRadios = (currentId, offset) => {
  return dispatch => {
    getDjRadios(currentId, 30, offset).then(res => {
      dispatch(setRadios(res.djRadios));
    })
  }
}

