import React, { memo } from 'react'

import CYRadioCategory from './components/radio-category'
import CYRadioRecommend from './components/radio-recommend'
import CYRadioRanking from './components/radio-ranking'
import { DjRadioWrapper } from './style'

export default memo( props => {
  return (
    <DjRadioWrapper className='wrap-v2'>
      <CYRadioCategory />
      <CYRadioRecommend />
      <CYRadioRanking />
    </DjRadioWrapper>
  )
})
