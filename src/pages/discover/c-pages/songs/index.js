import React, { useEffect, memo } from 'react'
import { useDispatch } from 'react-redux'

import { getCategory, getSongList } from './store/slice'

import CYSongsHeader from './components/songs-header'
import CYSongsList from './components/songs-list'
import { SongsWrapper } from './style'

export default memo(props => {
  const dispatch = useDispatch()

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
