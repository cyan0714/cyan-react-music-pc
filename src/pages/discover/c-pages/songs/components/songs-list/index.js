import React, { useState, memo } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { PER_PAGE_NUMBER } from '@/utils/constants'
import { getSongList } from '@/utils/action'

import CYThemeCover from '@/components/theme-cover'
import CYPagination from '@/components/pagination'
import { SongListWrapper } from './style'

export default memo(props => {
  // state-hooks
  const [currentPage, setCurrentPage] = useState(1)

  // redux-hooks
  const { categorySongs } = useSelector(
    state => ({
      categorySongs: state.songs.categorySongs,
    }),
    shallowEqual
    )
  const dispatch = useDispatch()

  // others
  const songList = categorySongs.playlists || []
  const total = categorySongs.total || 0

  const onPageChange = (page, pageSize) => {
    setCurrentPage(page)
    dispatch(getSongList(page))
  }

  return (
    <SongListWrapper>
      <div className='songs-list'>
        {songList.map((item, index) => {
          return <CYThemeCover info={item} key={item.id} right='30px' />
        })}
      </div>
      <CYPagination
        currentPage={currentPage}
        total={total}
        pageSize={PER_PAGE_NUMBER}
        onPageChange={onPageChange}
      />
    </SongListWrapper>
  )
})
