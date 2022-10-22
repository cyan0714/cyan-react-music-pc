import React, { memo } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'

import { getSizeImage, formatMinuteSecond } from '@/utils/format-utils.js'
import { getSongDetailAction } from '@/utils/action'

import CYThemeHeaderSong from '@/components/theme-header-song'
import { RankingListWrapper } from './style'

export default memo(props => {
  const {playList} = useSelector(
    state => ({
      playList: state.ranking.playList,
    }),
    shallowEqual
  )

  const dispatch = useDispatch()

  const tracks = playList?.tracks || []

  const playMusic = id => {
    dispatch(getSongDetailAction(id))
  }

  return (
    <RankingListWrapper>
      <CYThemeHeaderSong trackCount={playList?.trackCount} playCount={playList?.playCount} />
      <div className='play-list'>
        <table>
          <thead>
            <tr className='header'>
              <th className='ranking'></th>
              <th className='title'>标题</th>
              <th className='duration'>时长</th>
              <th className='singer'>歌手</th>
            </tr>
          </thead>
          <tbody>
            {tracks.map((item, index) => {
              return (
                <tr className='' key={item.id}>
                  <td>
                    <div className='rank-num'>
                      <span className='num'>{index + 1}</span>
                      <span className='new sprite_icon2'></span>
                    </div>
                  </td>
                  <td>
                    <div className='song-name'>
                      {index < 3 ? (
                        <img src={getSizeImage(item.al.picUrl, 50)} alt='' />
                      ) : null}
                      <span className='play sprite_table' onClick={() => playMusic(item.id)} ></span>
                      <span className='name'>{item.name}</span>
                    </div>
                  </td>
                  <td>{formatMinuteSecond(item.dt)}</td>
                  <td>{item.ar[0].name}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </RankingListWrapper>
  )
})
