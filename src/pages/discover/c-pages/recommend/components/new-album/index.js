import React, { useEffect, useRef, memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { useGetNewAlbumQuery } from '../../services'
import { setNewAlbum } from '../../store/slice'

import { Carousel } from 'antd'
import { AlbumWrapper } from './style'
import CYRecommendHeader from '@/components/recommend-header'
import CYAlbumCover from '@/components/album-cover'

export default memo(function CYNewAlbum(props) {
  const dispatch = useDispatch()
  const { recommend } = useSelector(state => state)
  const carouselRef = useRef()

  const { data } = useGetNewAlbumQuery({limit: 10, offset: 0 })

  useEffect(() => {
    dispatch(setNewAlbum(data && data.weekData))
  }, [dispatch, data])

  return (
    <AlbumWrapper>
      <CYRecommendHeader title='新碟上架' moreLink='/discover/album' />
      <div className='content'>
        <div
          className='arrow arrow-left sprite_02'
          onClick={e => carouselRef.current.prev()}></div>
        <div className='album'>
          <Carousel ref={carouselRef} dots={false}>
            {[0, 1].map(item => {
              return (
                <div key={item} className='page'>
                  {recommend.newAlbum
                    ?.slice(item * 5, (item + 1) * 5)
                    ?.map(item => {
                      return <CYAlbumCover key={item.id} info={item} />
                    })}
                </div>
              )
            })}
          </Carousel>
        </div>
        <div
          className='arrow arrow-right sprite_02'
          onClick={e => carouselRef.current.next()}></div>
      </div>
    </AlbumWrapper>
  )
})
