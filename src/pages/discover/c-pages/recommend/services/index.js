import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const recommendApi = createApi({
  reducerPath: 'recommendApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://123.207.32.32:9001/' }),
  endpoints: (builder) => ({
    getTopBanners: builder.query({
      query: (name) => `/banner`,
    }),
    getHotRecommends: builder.query({
      query: (name) => `/personalized`
    })
  }),
})

export const { useGetTopBannersQuery, useGetHotRecommendsQuery } = recommendApi