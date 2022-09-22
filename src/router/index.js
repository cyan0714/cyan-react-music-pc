import React, { Suspense } from 'react'
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

const CYMine = React.lazy(() => import('@/pages/mine'))
const CYFriend = React.lazy(() => import('@/pages/friend'))

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
          <Suspense fallback={<div>Loading...</div>}>
            <CYDiscover />
          </Suspense>
        ),
        children: [
          {
            path: '',
            element: <Navigate to='recommend' />,
          },
          {
            path: 'recommend',
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <CYRecommend />
              </Suspense>
            ),
          },
          {
            path: 'album',
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <CYAlbum />
              </Suspense>
            ),
          },
          {
            path: 'artist',
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <CYArtist />
              </Suspense>
            ),
          },
          {
            path: 'djradio',
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <CYDjradio />
              </Suspense>
            ),
          },
          {
            path: 'ranking',
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <CYRanking />
              </Suspense>
            ),
          },
          {
            path: 'songs',
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <CYSongs />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: 'mine',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <CYMine />
          </Suspense>
        ),
      },
      {
        path: 'friend',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <CYFriend />
          </Suspense>
        ),
      },
    ],
  },
])
