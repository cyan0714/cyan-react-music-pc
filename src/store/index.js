import { configureStore } from '@reduxjs/toolkit'
import { recommendSlice } from '@/pages/discover/c-pages/recommend/store/slice'
import { recommendApi } from '@/pages/discover/c-pages/recommend/services'
import { playerSlice } from '@/pages/player/store/slice'
import { playerApi } from '@/pages/player/services'

const store = configureStore({
  reducer: {
    recommend: recommendSlice.reducer,
    [recommendApi.reducerPath]: recommendApi.reducer,
    player: playerSlice.reducer,
    [playerApi.reducerPath]: playerApi.reducer,
  },
})

export default store
