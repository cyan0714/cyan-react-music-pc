import React, { useEffect, memo } from 'react'
import classNames from 'classnames'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { getSizeImage } from '@/utils/format-utils'
import { setCurrentIndex, getRanking } from '../../store/slice'

import { TopRankingWrapper } from './style'

export default memo(props => {
  const { topList, currentIndex } = useSelector(
    state => ({
      topList: state.ranking.topList,
      currentIndex: state.ranking.currentIndex,
    }),
    shallowEqual
  )

  const dispatch = useDispatch()

  useEffect(() => {
    const id = topList[currentIndex] && topList[currentIndex].id
    if (!id) return
    dispatch(getRanking(id))
  }, [topList, dispatch, currentIndex])

  const hanldeItemClick = index => {
    dispatch(setCurrentIndex(index))
    const id = topList[currentIndex].id
    dispatch(getRanking(id))
  }

  return (
    <TopRankingWrapper>
      {topList.map((item, index) => {
        let header
        if (index === 0 || index === 4) {
          header = (
            <div className='header'>
              {index === 0 ? '云音乐特色榜' : '全球媒体榜'}
            </div>
          )
        }
        return (
          <div key={item.id}>
            {header}
            <div
              className={classNames('item', { active: index === currentIndex })}
              onClick={e => hanldeItemClick(index)}>
              <img src={getSizeImage(item.coverImgUrl, 40)} alt='' />
              <div className='info'>
                <div className='name'>{item.name}</div>
                <div className='update'>{item.updateFrequency}</div>
              </div>
            </div>
          </div>
        )
      })}
    </TopRankingWrapper>
  )
})
