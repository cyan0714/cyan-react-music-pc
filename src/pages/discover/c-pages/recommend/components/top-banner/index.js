import React, { memo, useEffect, useCallback, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useGetTopBannersQuery } from '../../services'
import { setTopBanners } from '../../store/slice'

import { Carousel } from 'antd'
import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from './style'

export default memo(function CYTopBanner() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const dispatch = useDispatch()
  const { recommend } = useSelector(state => state)
  const bannerRef = useRef()

  const { data } = useGetTopBannersQuery()
  // console.log('data', data)

  useEffect(() => {
    dispatch(setTopBanners(data && data.banners))
  }, [dispatch, data])

  const bannerChange = useCallback((from, to) => {
    setCurrentIndex(to)
  }, [])

  const bgImage =
    recommend.topBanners?.[currentIndex] &&
    recommend.topBanners?.[currentIndex].imageUrl + '?imageView&blur=40x20'

  return (
    <BannerWrapper bgImage={bgImage}>
      <div className='banner wrap-v2'>
        <BannerLeft>
          <Carousel
            autoplay
            effect='fade'
            beforeChange={bannerChange}
            ref={bannerRef}>
            {recommend.topBanners?.map((item, index) => {
              return (
                <div className='banner-item' key={item.imageUrl}>
                  <img
                    className='image'
                    src={item.imageUrl}
                    alt={item.typeTitle}
                  />
                </div>
              )
            })}
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl className='control'>
          <button
            className='btn left'
            onClick={e => bannerRef.current.prev()}></button>
          <button
            className='btn right'
            onClick={e => bannerRef.current.next()}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
})
