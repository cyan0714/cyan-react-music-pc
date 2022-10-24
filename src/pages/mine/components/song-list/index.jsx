// third lib
import React, { memo, useCallback, useState, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

// third components
import { Spin } from 'antd'

// utils
import { formatMinuteSecond } from '@/utils/format-utils.js'
import { getSongDetailAction } from '@/utils/action'

// api
import { getPlaylistAllDetail } from '@/services/playlist'

// local components
import CYThemeHeaderSong from '@/components/theme-header-song'
import CYPagination from '@/components/pagination'
import { RankingListWrapper } from './style'

export default memo(props => {
  // props

  // state-hooks
  const [currentPage, setCurrentPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [songs, setSongs] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  // redux-hooks
  const { currentPlayListObj } = useSelector(
    state => ({
      currentPlayListObj: state.mine.currentPlayListObj,
    }),
    shallowEqual
  )
  useEffect(() => {
    fetchPlaylistAllDetail()
  }, [currentPlayListObj])
  const dispatch = useDispatch()

  // others
  const fetchPlaylistAllDetail = offset => {
    setIsLoading(true)
    getPlaylistAllDetail({
      id: currentPlayListObj?.id,
      limit: 20,
      offset: offset || 0,
    }).then(res => {
      setIsLoading(false)
      setSongs(res.songs)
      setTotal(currentPlayListObj?.trackCount)
    })
  }
  const onPageChange = (page, pageSize) => {
    setCurrentPage(page)
    fetchPlaylistAllDetail((page - 1) * 20)
  }

  return (
    <RankingListWrapper>
      <CYThemeHeaderSong
        trackCount={currentPlayListObj?.trackCount}
        playCount={currentPlayListObj?.playCount}
      />
      {isLoading ? (
        <div className="text-center pt-5">
          <Spin />
        </div>
      ) : (
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
              {songs?.map((item, index) => {
                return (
                  <tr key={item?.id}>
                    <td>
                      <div className='rank-num'>
                        <span className='num'>{index + 1}</span>
                      </div>
                    </td>
                    <td>
                      <div className='song-name'>
                        <span className='play sprite_table' onClick={() => dispatch(getSongDetailAction(item?.id))}></span>
                        <span className='name'>{item?.name}</span>
                      </div>
                    </td>
                    <td>{formatMinuteSecond(item?.dt)}</td>
                    <td>{item?.ar[0]?.name}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}
      <CYPagination
        currentPage={currentPage}
        total={total}
        pageSize={20}
        onPageChange={onPageChange}
      />
    </RankingListWrapper>
  )
})
