import React, { useEffect, memo } from 'react'
import { useDispatch } from 'react-redux'

import { getTops } from './store/slice'

import CYTopRanking from './components/top-ranking'
import CYRankingHeader from './components/ranking-header'
import CYRankingList from './components/ranking-list'
import { RankingWrapper, RankingLeft, RankingRight } from './style'

export default memo(props => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTops())
  }, [dispatch])

  return (
    <RankingWrapper className='wrap-v2'>
      <RankingLeft>
        <CYTopRanking />
      </RankingLeft>
      <RankingRight>
        <CYRankingHeader />
        <CYRankingList />
      </RankingRight>
    </RankingWrapper>
  )
})
