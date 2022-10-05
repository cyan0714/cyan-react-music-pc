import React, { memo } from 'react'

import { hotRadios } from '@/services/local-data'

import CYThemeHeaderSmall from '@/components/theme-header-small'
import { HotRadioWrapper } from './style'

export default memo(function CYHotRadio() {
  return (
    <HotRadioWrapper>
      <CYThemeHeaderSmall title='热门主播' />
      <div className='radio-list'>
        {hotRadios.map((item, index) => {
          return (
            <div className='item' key={item.picUrl}>
              <a href='/abc' className='image'>
                <img src={item.picUrl} alt='' />
              </a>
              <div className='info'>
                <div className='name'>{item.name}</div>
                <div className='position single-row-ellip'>{item.position}</div>
              </div>
            </div>
          )
        })}
      </div>
    </HotRadioWrapper>
  )
})
