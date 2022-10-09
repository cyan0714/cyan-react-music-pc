import React, { memo } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import classNames from 'classnames'

import { artistCategories } from '@/services/local-data'

import { setCurrentArea, setCurrentType } from '../../store/slice'
import { CategoryWrapper, CategoryItem } from './style'

export default memo(function CYArtistCategory(props) {
  const { currentArea, currentType } = useSelector(
    state => ({
      currentArea: state.artist.currentArea,
      currentType: state.artist.currentType,
    }),
    shallowEqual
  )
  const dispatch = useDispatch()

  const selectArtist = (area, type) => {
    dispatch(setCurrentArea(area))
    dispatch(setCurrentType(type))
  }

  const renderArtist = (artists, area) => {
    return (
      <div>
        {artists.map((artist, index) => {
          const isSelect = currentArea === area && currentType.type === artist.type
          return (
            <CategoryItem
              key={artist.name}
              className={classNames({ active: isSelect })}>
              <span onClick={e => selectArtist(area, artist)}>{artist.name}</span>
            </CategoryItem>
          )
        })}
      </div>
    )
  }

  return (
    <CategoryWrapper>
      {artistCategories.map((item, index) => {
        return (
          <div className='section' key={item.area}>
            <h2 className='title'>{item.title}</h2>
            {renderArtist(item.artists, item.area)}
          </div>
        )
      })}
    </CategoryWrapper>
  )
})
