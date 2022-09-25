import { configureStore } from '@reduxjs/toolkit'
import { recommendSlice } from '@/pages/discover/c-pages/recommend/store/slice'
import { recommendApi } from '@/pages/discover/c-pages/recommend/services'

const store = configureStore({
  reducer: {
    recommend: recommendSlice.reducer,
    [recommendApi.reducerPath]: recommendApi.reducer
  },
})

export default store
