import React, { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { fetchAllAlbumsAction } from '../../store/slice'

import CYThemeHeaderNormal from '@/components/theme-header-normal'
import CYAlbumCover from '@/components/album-cover'
import CYPagination from '@/components/pagination'
import { TopAlbumWrapper } from './style'

export default memo(function CYTopAlbum() {
  const [currentPage, setCurrentPage] = useState(1)
  const { allAlbums, total } = useSelector(
    state => ({
      allAlbums: state.album.allAlbums,
      total: state.album.total,
    }),
    shallowEqual
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllAlbumsAction({ limit: 30, offset: 0 }))
  }, [dispatch])

  const onPageChange = (page, pageSize) => {
    setCurrentPage(page)
    dispatch(fetchAllAlbumsAction({ limit: 30, offset: (page - 1) * 30 }))
  }

  return (
    <TopAlbumWrapper>
      <CYThemeHeaderNormal title='全部新碟' />
      <div className='album-list'>
        {allAlbums.map((item, index) => {
          return (
            <CYAlbumCover
              size={'130px'}
              width={'153px'}
              bgp={'-845px'}
              key={item.id}
              info={item}
            />
          )
        })}
      </div>
      <CYPagination
        currentPage={currentPage}
        total={total}
        pageSize={30}
        onPageChange={onPageChange}
      />
    </TopAlbumWrapper>
  )
})
