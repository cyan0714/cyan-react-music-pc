import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { HeaderWrapper } from './style'

const CYRecommendHeader = memo(props => {
  const { title, keywords, moreLink, keywordClick } = props

  return (
    <HeaderWrapper className='sprite_02'>
      <div className='left'>
        <div className='title'>{title}</div>
        <div className='keyword'>
          {keywords.map((item, index) => {
            return (
              <div className='item' key={item}>
                <span className='link' onClick={e => keywordClick(item)}>
                  {item}
                </span>
                <span className='divider'>|</span>
              </div>
            )
          })}
        </div>
      </div>
      <div className='right'>
        <Link to={moreLink}>更多</Link>
        <i className='icon sprite_02'></i>
      </div>
    </HeaderWrapper>
  )
})

CYRecommendHeader.defaultProps = {
  keywords: [],
}

CYRecommendHeader.propTypes = {
  title: PropTypes.string.isRequired,
  keywords: PropTypes.array,
}

export default CYRecommendHeader
