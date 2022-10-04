import { configureStore } from '@reduxjs/toolkit'
import { recommendSlice } from '@/pages/discover/c-pages/recommend/store/slice'
import { playerSlice } from '@/pages/player/store/slice'

const store = configureStore({
  reducer: {
    recommend: recommendSlice.reducer,
    player: playerSlice.reducer,
  },
})

export default store
