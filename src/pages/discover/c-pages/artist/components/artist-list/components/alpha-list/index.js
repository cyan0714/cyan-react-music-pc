import React, { memo, useState, useEffect } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import classNames from 'classnames'

import { singerAlphas } from '@/utils/handle-data'
import { fetchArtistListAction } from '../../../../store/slice'

import { AlphaListWrapper } from './style'

export default memo(function CYAlphaList() {
  const [currentAlpha, setCurrentAlpha] = useState('-1')

  const { currentType, currentArea } = useSelector(
    state => ({
      currentType: state.artist.currentType,
      currentArea: state.artist.currentArea,
    }),
    shallowEqual
  )
  const dispatch = useDispatch()

  useEffect(() => {
    setCurrentAlpha('-1')
  }, [currentType, currentArea])
  useEffect(() => {
    dispatch(fetchArtistListAction({ area: currentArea, type: currentType.type, initial: currentAlpha }))
  }, [currentAlpha, currentType, currentArea, dispatch])

  return (
    <AlphaListWrapper hasTop={currentArea !== -1}>
      {currentArea !== -1 &&
        singerAlphas.map((item, index) => {
          const isActive = currentAlpha === item
          if (item === '0') item = '其他'
          if (item === '-1') item = '热门'
          return (
            <div
              key={item}
              className={classNames('item', { active: isActive })}>
              <span onClick={e => setCurrentAlpha(item)}>
                {item.toUpperCase()}
              </span>
            </div>
          )
        })}
    </AlphaListWrapper>
  )
})
