import React, { memo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import { formatMonthDay } from '@/utils/format-utils'

import CYSongOperationBar from '@/components/song-operation-bar'
import { RankingHeaderWrapper } from './style'

export default memo(props => {
  const { playList } = useSelector(
    state => ({
      playList: state.ranking.playList,
    }),
    shallowEqual
  )

  return (
    <RankingHeaderWrapper>
      <div className='image'>
        <img src={playList.coverImgUrl} alt='' />
        <span className='image_cover'>封面</span>
      </div>
      <div className='info'>
        <div className='title'>{playList.name}</div>
        <div className='time'>
          <i className='clock sprite_icon2'></i>
          <div>最近更新：{formatMonthDay(playList.updateTime)}</div>
          <div className='update-f'>（{'每日更新:TODO'}）</div>
        </div>
        <CYSongOperationBar
          favorTitle={`(${playList.subscribedCount})`}
          shareTitle={`(${playList.shareCount})`}
          downloadTitle='下载'
          commentTitle={`(${playList.commentCount})`}
        />
      </div>
    </RankingHeaderWrapper>
  )
})
