import React, { memo } from 'react'

import { HeaderWrapper } from './style'

export default memo(props => {
  const { title, text } = props

  return (
    <HeaderWrapper>
      <div className='title'>{title}</div>
      <div className='text'>{text}</div>
    </HeaderWrapper>
  )
})
