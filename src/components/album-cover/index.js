// third lib
import React, { memo, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// third components

// utils
import { getSizeImage } from '@/utils/format-utils'

// api

// local components
import { AlbumWrapper } from './style'

export default memo(props => {
  // props
  const { info, size = '100px', width = '118px', bgp = '-570px' } = props

  // state-hooks

  // redux-hooks
  const dispatch = useDispatch()

  // others

  return (
    <AlbumWrapper size={size} width={width} bgp={bgp}>
      <div className='album-image'>
        <img src={getSizeImage(info.picUrl, 150)} alt='' />
        <a href='/abc' className='cover sprite_covor'>{info.name}</a>
      </div>
      <div className='album-info'>
        <div className='name'>{info.name}</div>
        <div className='artist single-row-ellip'>{info.artist.name}</div>
      </div>
    </AlbumWrapper>
  )
})

