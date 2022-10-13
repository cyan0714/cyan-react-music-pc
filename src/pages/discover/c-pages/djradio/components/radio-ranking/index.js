import React, { useEffect, memo, useState } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { getRadios } from '../../store/slice'

import CYThemeHeaderNormal from '@/components/theme-header-normal'
import CYRadioRankingCover from '@/components/radio-ranking-cover'
import CYPagination from '@/components/pagination'
import { RankingWraper } from './style'

export default memo(props => {
  const [currentPage, setCurrentPage] = useState(1)

  const { currentId, radios } = useSelector(
    state => ({
      currentId: state.djradio.currentId,
      radios: state.djradio.radios,
    }),
    shallowEqual
  )
  const dispatch = useDispatch()

  useEffect(() => {
    if (currentId === 0) return
    dispatch(getRadios(currentId, 0))
  }, [dispatch, currentId])

  const onPageChange = (page, pageSize) => {
    setCurrentPage(page)
    dispatch(getRadios(currentId, page * 30))
  }

  return (
    <RankingWraper>
      <CYThemeHeaderNormal title='电台排行榜' />
      <div className='ranking-list'>
        {radios.map((item, index) => {
          return <CYRadioRankingCover key={item.id} radio={item} />
        })}
      </div>
      <CYPagination
        currentPage={currentPage}
        total={1000}
        pageSize={30}
        onPageChange={onPageChange}
      />
    </RankingWraper>
  )
})
