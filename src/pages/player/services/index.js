import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const playerApi = createApi({
  reducerPath: 'playerApi',
  // baseQuery: fetchBaseQuery({ baseUrl: 'http://123.207.32.32:9001/' }),
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.autumnfish.cn/' }),
  endpoints: (builder) => ({
    getSongDetail: builder.query({
      query: (id) => `/song/detail/?id=${id}`,
    }),
    getLyric: builder.query({
      query: (id) => `/lyric/?id=${id}`
    }),
    getSimiPlaylist: builder.query({
      query: (id) => `/simi/playlist`
    }),
    getSimiSong: builder.query({
      query: (id) => `/simi/song`
    })
  }),
})

export const {
  useGetSongDetailQuery,
  useGetLyricQuery,
  useGetSimiPlaylistQuery,
  useGetSimiSongQuery
} = playerApi