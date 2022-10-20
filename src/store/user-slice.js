import { createSlice } from '@reduxjs/toolkit'

const transformState = (key, defaultVal, parse = true) => {
  return localStorage[key]
    ? parse
      ? JSON.parse(localStorage[key])
      : localStorage[key]
    : defaultVal
}

const initialState = {
  isLogin: transformState('isLogin', false),
  userProfile: {},
  allSongList: []
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsLogin(state, action) {
      state.isLogin = action.payload
    },
    setUserProfile(state, action) {
      state.userProfile = action.payload
    },
    setAllSongList(state, action) {
      state.allSongList = action.payload
    },
  },
})



// export const getTops = () => {
//   return dispatch => {
//     getTopList().then(res => {
//       dispatch(rankingSlice.actions.setTopList(res.list));
//     })
//   }
// }

export const { setIsLogin, setUserProfile, setAllSongList } = userSlice.actions
