import React, { useEffect, memo } from 'react'
import { useDispatch } from 'react-redux'

import CYPlayList from './components/play-list'
// import CYMyMusicHeader from './components/ranking-header'
// import CYMyMusicList from './components/ranking-list'
import { MyMusicWrapper, MyMusicLeft, MyMusicRight } from './style'

export default memo(props => {
  const dispatch = useDispatch()

  useEffect(() => {
    // dispatch(getTops())
  }, [dispatch])

  return (
    <MyMusicWrapper className='wrap-v2'>
      <MyMusicLeft>
        <CYPlayList />
      </MyMusicLeft>
      <MyMusicRight>
        {/* <CYMyMusicHeader /> */}
        {/* <CYMyMusicList /> */}
      </MyMusicRight>
    </MyMusicWrapper>
  )
})