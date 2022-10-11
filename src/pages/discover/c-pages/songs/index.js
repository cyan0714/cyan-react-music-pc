import React, { useEffect, memo } from 'react'
import { useDispatch } from 'react-redux'

import { getCategory, getSongList } from '@/utils/action'

import CYSongsHeader from './components/songs-header'
import CYSongsList from './components/songs-list'
import { SongsWrapper } from './style'

export default memo(props => {
  // redux-hooks
  const dispatch = useDispatch()

  // react-hooks
  useEffect(() => {
    dispatch(getCategory())
    dispatch(getSongList(0))
  }, [dispatch])

  return (
    <SongsWrapper className='wrap-v2'>
      <CYSongsHeader />
      <CYSongsList />
    </SongsWrapper>
  )
})
