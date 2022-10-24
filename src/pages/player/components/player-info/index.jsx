import React, { memo, useState } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import classNames from 'classnames';

import { getSizeImage } from '@/utils/format-utils'

import CYSongOperationBar from '@/components/song-operation-bar'
import { InfoWrapper, InfoLeft, InfoRight } from './style'

export default memo(() => {
  const [isSpread, setIsSpread] = useState(false)

  const { isPlaying, currentSong, lyrics } = useSelector(
    state => ({
      isPlaying: state.player.isPlaying,
      currentSong: state.player.currentSong,
      lyrics: state.player.lyrics,
    }),
    shallowEqual
  )

  const totalLyricCount = isSpread ? lyrics.length : 13

  return (
    <InfoWrapper>
      <InfoLeft>
        <div className='image'>
          <img className={classNames('disk', {"running": isPlaying, 'paused': !isPlaying })} src={getSizeImage(currentSong.al.picUrl, 130)} alt='' />
          <span className='cover image_cover'></span>
        </div>
        <div className='link'>
          <i className='sprite_icon2'></i>
          <a href='#/'>生成外联播放器</a>
        </div>
      </InfoLeft>
      <InfoRight isSpread={isSpread}>
        <div className='header'>
          <i className='sprite_icon2'></i>
          <div className='title'>{currentSong.name}</div>
        </div>
        <div className='singer'>
          <span className='label'>歌手：</span>
          <a href='/#' className='name'>{currentSong.ar[0].name}</a>
        </div>
        <div className='album'>
          <span className='label'>所属专辑：</span>
          <a href='/#' className='name'>{currentSong.al.name}</a>
        </div>

        <CYSongOperationBar
          favorTitle='收藏'
          shareTitle='分享'
          downloadTitle='下载'
          commentTitle='(167366)'
        />

        <div className='lyric'>
          <div className='lyric-info'>
            {lyrics.slice(0, totalLyricCount).map((item, index) => {
              return <p key={item.time} className='text'>{item.content}</p>
            })}
          </div>
          <button
            className='lyric-control'
            onClick={e => setIsSpread(!isSpread)}>
            <span>{isSpread ? '收起' : '展开'}</span>
            <i className='sprite_icon2'></i>
          </button>
        </div>
      </InfoRight>
    </InfoWrapper>
  )
})
