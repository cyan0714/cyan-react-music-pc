import React, { useEffect, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchTopListAction } from '../../store/slice'

import CYRecommendHeader from '@/components/recommend-header'
import CYTopRanking from '@/components/top-ranking'
import { RankingWrapper } from './style'

export default memo(function CYRankingList() {
  const dispatch = useDispatch()
  const { recommend } = useSelector(state => state)

  useEffect(() => {
    dispatch(fetchTopListAction({ id: 19723756 })) // 飙升榜
    dispatch(fetchTopListAction({ id: 3779629 })) // 新歌榜
    dispatch(fetchTopListAction({ id: 2884035 })) // 原创榜
  }, [dispatch])

  return (
    <RankingWrapper>
      <CYRecommendHeader title='榜单' moreLink='/discover/ranking' />
      <div className='tops'>
        <CYTopRanking info={recommend.topUpListObj} />
        <CYTopRanking info={recommend.topNewListObj} />
        <CYTopRanking info={recommend.topOriginListObj} />
      </div>
    </RankingWrapper>
  )
})
