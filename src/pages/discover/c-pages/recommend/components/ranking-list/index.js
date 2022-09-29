import React, { useEffect, memo } from 'react'
import { useDispatch, useSelector,} from 'react-redux'

import { useGetTopListQuery } from '../../services'
import { setTopUpListObj, setTopNewListObj, setTopOriginListObj } from '../../store/slice'

import CYRecommendHeader from '@/components/recommend-header'
import CYTopRanking from '@/components/top-ranking'
import { RankingWrapper } from './style'

export default memo(function CYRankingList() {
  const dispatch = useDispatch()
  const { recommend } = useSelector(state => state)
  
  const { data: topUpListObj } = useGetTopListQuery(19723756) // 飙升榜
  const { data: topNewListObj } = useGetTopListQuery(3779629) // 新歌榜
  const { data: originListObj } = useGetTopListQuery(2884035) // 原创榜

  useEffect(() => {
    dispatch(setTopUpListObj(topUpListObj && topUpListObj.playlist))
    dispatch(setTopNewListObj(topNewListObj && topNewListObj.playlist))
    dispatch(setTopOriginListObj(originListObj && originListObj.playlist))
  }, [dispatch, topUpListObj, topNewListObj, originListObj])

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
