import React, { useEffect, memo, useCallback } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { fetchHotRecommendsAction } from '../../store/slice'

import { RecommendWrapper } from './style'
import CYRecommendHeader from '@/components/recommend-header'
import CYThemeCover from '@/components/theme-cover'

export default memo(function CYHotRecommend() {
  const dispatch = useDispatch()
  const hotRecommends = useSelector(state => state.recommend.hotRecommends, shallowEqual)
  const history = useNavigate()

  useEffect(() => {
    dispatch(fetchHotRecommendsAction())
  }, [dispatch])

  const keywordClick = useCallback(
    keyword => {
      history('/discover/songs')
    },
    [history]
  )

  return (
    <RecommendWrapper>
      <CYRecommendHeader
        title='热门推荐'
        keywords={['华语', '流行', '摇滚', '民谣', '电子']}
        moreLink='/discover/songs'
        keywordClick={keywordClick}
      />
      <div className='recommend-list'>
        {hotRecommends?.slice(0, 8).map((item, index) => {
          return <CYThemeCover info={item} key={item.id} />
        })}
      </div>
    </RecommendWrapper>
  )
})
