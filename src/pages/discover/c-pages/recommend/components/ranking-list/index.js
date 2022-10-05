import React, { useEffect, memo } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { fetchTopListAction } from '../../store/slice'

import CYRecommendHeader from '@/components/recommend-header'
import CYTopRanking from '@/components/top-ranking'
import { RankingWrapper } from './style'

export default memo(function CYRankingList() {
  const dispatch = useDispatch()
  const { topUpListObj, topNewListObj, topOriginListObj } = useSelector(state => ({
    topUpListObj: state.recommend.topUpListObj,
    topNewListObj: state.recommend.topNewListObj,
    topOriginListObj: state.recommend.topOriginListObj
  }), shallowEqual)

  useEffect(() => {
    dispatch(fetchTopListAction({ id: 19723756 })) // 飙升榜
    dispatch(fetchTopListAction({ id: 3779629 })) // 新歌榜
    dispatch(fetchTopListAction({ id: 2884035 })) // 原创榜
  }, [dispatch])

  return (
    <RankingWrapper>
      <CYRecommendHeader title='榜单' moreLink='/discover/ranking' />
      <div className='tops'>
        <CYTopRanking info={topUpListObj} />
        <CYTopRanking info={topNewListObj} />
        <CYTopRanking info={topOriginListObj} />
      </div>
    </RankingWrapper>
  )
})
