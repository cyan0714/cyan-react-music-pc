import React from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import App from '../App'

const CYDiscover = React.lazy(() => import('@/pages/discover'))
const CYAlbum = React.lazy(() => import('@/pages/discover/c-pages/album'))
const CYArtist = React.lazy(() => import('@/pages/discover/c-pages/artist'))
const CYDjradio = React.lazy(() => import('@/pages/discover/c-pages/djradio'))
const CYRanking = React.lazy(() => import('@/pages/discover/c-pages/ranking'))
const CYRecommend = React.lazy(() =>
  import('@/pages/discover/c-pages/recommend')
)
const CYSongs = React.lazy(() => import('@/pages/discover/c-pages/songs'))
const CYPlayer = React.lazy(() => import('@/pages/player'))

const CYMine = React.lazy(() => import('@/pages/mine'))
const CYFriend = React.lazy(() => import('@/pages/friend'))
const NotFound = React.lazy(() => import('@/pages/not-found'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Navigate to='discover' />,
      },
      {
        path: 'discover',
        element: (
          <CYDiscover />
        ),
        children: [
          {
            path: '',
            element: <Navigate to='recommend' />,
          },
          {
            path: 'recommend',
            element: <CYRecommend />,
          },
          {
            path: 'album',
            element: <CYAlbum />,
          },
          {
            path: 'artist',
            element: <CYArtist />,
          },
          {
            path: 'djradio',
            element: <CYDjradio />,
          },
          {
            path: 'ranking',
            element: <CYRanking />,
          },
          {
            path: 'songs',
            element: <CYSongs />,
          },
          {
            path: 'player',
            element: <CYPlayer />,
          },
        ],
      },
      {
        path: 'mine',
        element: <CYMine />,
      },
      {
        path: 'friend',
        element: <CYFriend />,
      },
      {
        path: '*',
        element: <NotFound />,
      }
    ],
  },
])
