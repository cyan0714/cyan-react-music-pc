import React, { useEffect, memo } from 'react'
import { useDispatch, useSelector,} from 'react-redux'

import { useGetTopListQuery } from '../../services'
import { setTopUpList, setTopNewList, setTopOriginList } from '../../store/slice'

import CYRecommendHeader from '@/components/recommend-header'
import CYTopRanking from '@/components/top-ranking'
import { RankingWrapper } from './style'

export default memo(function CYRankingList() {
  const dispatch = useDispatch()
  const { recommend } = useSelector(state => state)
  
  const { data: data1 } = useGetTopListQuery(19723756) // 飙升榜
  const { data: data2 } = useGetTopListQuery(3779629) // 新歌榜
  const { data: data3 } = useGetTopListQuery(2884035) // 原创榜

  useEffect(() => {
    dispatch(setTopUpList(data1 && data1.playlist))
    dispatch(setTopNewList(data2 && data2.playlist))
    dispatch(setTopOriginList(data3 && data3.playlist))
  }, [dispatch, data1, data2, data3])

  return (
    <RankingWrapper>
      <CYRecommendHeader title='榜单' moreLink='/discover/ranking' />
      <div className='tops'>
        <CYTopRanking info={recommend.topUpList} />
        <CYTopRanking info={recommend.topNewList} />
        <CYTopRanking info={recommend.topOriginList} />
      </div>
    </RankingWrapper>
  )
})
