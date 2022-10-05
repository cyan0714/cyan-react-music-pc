import React, { memo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import { HeaderWrapper, HeaderLeft, HeaderRight } from './style'

export default memo(function CYPlayHeader(props) {
  const { playList, currentSong } = useSelector(state => ({
    playList: state.player.playList,
    currentSong: state.player.currentSong,
  }), shallowEqual)
  return (
    <HeaderWrapper>
      <HeaderLeft>
        <h3>播放列表({playList.length})</h3>
        <div className='operator'>
          <button> <i className='sprite_playlist icon favor'></i> 收藏全部 </button>
          <button> <i className='sprite_playlist icon remove'></i> 清除 </button>
        </div>
      </HeaderLeft>
      <HeaderRight>
        <span>{currentSong.name}</span>
        <span className="close" onClick={() => props.changePanelShow(false)}>X</span>
      </HeaderRight>
    </HeaderWrapper>
  )
})
