// third lib
import React, { memo, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'

// third components

// utils

// api

// local components
import { HeaderWrapper } from './style'

export default memo(props => {
  // props
  const { title, more } = props

  // state-hooks

  // redux-hooks
  const dispatch = useDispatch()

  // others

  return (
    <HeaderWrapper>
      <h3>{title}</h3>
      <a href='/abc'>{more}</a>
    </HeaderWrapper>
  )
})

CYThemeHeaderSmall.defaultProps = {}

CYThemeHeaderSmall.propTypes = {
  title: PropTypes.string.isRequired,
  more: PropTypes.string,
}


