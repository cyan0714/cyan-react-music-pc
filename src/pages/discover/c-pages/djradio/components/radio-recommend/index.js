import React, { useEffect, memo } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { getRadioRecommend } from '../../store/slice'

import CYThemeHeaderNormal from '@/components/theme-header-normal'
import CYRadioRecomendCover from '@/components/radio-recommend-cover'
import { RecommendWrapper } from './style'

export default memo( props => {
  const { currentId, recommends } = useSelector(
    state => ({
      currentId: state.djradio.currentId,
      recommends: state.djradio.recommends,
    }),
    shallowEqual
  )
  const dispatch = useDispatch()

  useEffect(() => {
    if (currentId === 0) return
    dispatch(getRadioRecommend(currentId))
  }, [dispatch, currentId])

  return (
    <RecommendWrapper>
      <CYThemeHeaderNormal title='优秀新电台' />
      <div className='radio-list'>
        {recommends.slice(0, 5).map(item => {
          return <CYRadioRecomendCover info={item} key={item.id} />
        })}
      </div>
    </RecommendWrapper>
  )
})
