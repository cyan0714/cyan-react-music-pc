import React, { useEffect, useRef, memo } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import classnames from 'classnames'

import { Carousel } from 'antd'

import { getRadioCategories, setCurrentId } from '../../store/slice'

import { CategoryWrapper, CategoryContent, CategoryItemImage } from './style'

const PAGE_SIZE = 16

export default memo(props => {
  const dispatch = useDispatch()
  const { categories, currentId } = useSelector(
    state => ({
      categories: state.djradio.categories,
      currentId: state.djradio.currentId,
    }),
    shallowEqual
    )
  console.log('categories: ', categories);

  const page = Math.ceil(categories.length / PAGE_SIZE) || 1

  useEffect(() => {
    dispatch(getRadioCategories())
  }, [dispatch])

  const carouselRef = useRef()

  const getSize = (index) => {
    return index * PAGE_SIZE > categories.length
      ? index * PAGE_SIZE
      : categories.length
  }

  return (
    <CategoryWrapper>
      <div
        className='arrow arrow-left'
        onClick={e => carouselRef.current.prev()}></div>
      <CategoryContent>
        <Carousel dots={{ className: 'dots' }} ref={carouselRef}>
          {Array(page)
            .fill(0)
            .map((_, index) => {
              return (
                <div key={index} className='category-page'>
                  {categories?.slice(index * PAGE_SIZE, getSize(index + 1))
                    .map((item, indey) => {
                      return (
                        <div
                          key={item.id}
                          onClick={e => dispatch(setCurrentId(item.id))}
                          className={classnames('category-item', {
                            active: currentId === item.id,
                          })}>
                          <CategoryItemImage
                            className='image'
                            imgUrl={item.picWebUrl}></CategoryItemImage>
                          <span>{item.name}</span>
                        </div>
                      )
                    })}
                </div>
              )
            })}
        </Carousel>
      </CategoryContent>
      <div
        className='arrow arrow-right'
        onClick={e => carouselRef.current.next()}></div>
    </CategoryWrapper>
  )
})
