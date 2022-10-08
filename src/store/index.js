import { configureStore } from '@reduxjs/toolkit'
import { recommendSlice } from '@/pages/discover/c-pages/recommend/store/slice'
import { albumSlice } from '@/pages/discover/c-pages/album/store/slice'
import { artistSlice } from '@/pages/discover/c-pages/artist/store/slice'
import { playerSlice } from '@/pages/player/store/slice'

const store = configureStore({
  reducer: {
    recommend: recommendSlice.reducer,
    album: albumSlice.reducer,
    artist: artistSlice.reducer,
    player: playerSlice.reducer,
  },
})

export default store
