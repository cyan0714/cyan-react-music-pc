import React, { memo } from 'react'

import CYPlayList from './components/play-list'
import CYMyMusicHeader from './components/play-header'
import CYMyMusicList from './components/song-list'
import { MyMusicWrapper, MyMusicLeft, MyMusicRight } from './style'

export default memo(props => {
  return (
    <MyMusicWrapper className='wrap-v2'>
      <MyMusicLeft>
        <CYPlayList />
      </MyMusicLeft>
      <MyMusicRight>
        <CYMyMusicHeader />
        <CYMyMusicList />
      </MyMusicRight>
    </MyMusicWrapper>
  )
})