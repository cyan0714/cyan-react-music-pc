// third lib
import React, { memo, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// third components

// utils

// api

// local components

export default memo(props => {
  // props

  // state-hooks

  // redux-hooks
  const { currentPlayListObj } = useSelector(state => ({
    currentPlayListObj: state.mine.currentPlayListObj,
  }))
  const dispatch = useDispatch()
  // others

  return (
    <div>
      <img src={currentPlayListObj?.coverImgUrl} alt="" /> 
    </div>
  )
})

