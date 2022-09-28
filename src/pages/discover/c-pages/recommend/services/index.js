import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const recommendApi = createApi({
  reducerPath: 'recommendApi',
  // baseQuery: fetchBaseQuery({ baseUrl: 'http://123.207.32.32:9001/' }),
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.autumnfish.cn/' }),
  endpoints: (builder) => ({
    getTopBanners: builder.query({
      query: (name) => `/banner`,
    }),
    getHotRecommends: builder.query({
      query: (name) => `/personalized`
    }),
    getNewAlbum: builder.query({
      query: (params) => `/top/album?limit=${params.limit}&offset=${params.offset}`
    })
  }),
})

export const { useGetTopBannersQuery, useGetHotRecommendsQuery, useGetNewAlbumQuery } = recommendApi