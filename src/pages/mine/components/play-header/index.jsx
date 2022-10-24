// third lib
import React, { memo, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import dayjs from 'dayjs'

// third components

// utils

// api

// local components
import CYSongOperationBar from '@/components/song-operation-bar'

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
    <div className="flex p-5">
      <img className="w-48 h-48 p-1 border border-solid border-slate-300" src={currentPlayListObj?.coverImgUrl} alt='' />
      <div className="ml-4">
        <div className='flex items-center mb-2'>
          <i className='sprite_icon2 w-16 h-6 inline-block bg-[left_0_top_-243px]'></i>
          <span className='text-lg'>{currentPlayListObj?.name}</span>
        </div>
        <div className="mb-4 flex items-center">
          <img className="w-10 h-10 rounded-full mr-2" src={currentPlayListObj?.creator?.avatarUrl} alt='' />
          <span className="text-blue-600 mr-2">{currentPlayListObj?.creator?.nickname}</span>
          <span className="text-stone-400">{dayjs(currentPlayListObj?.createTime).format('YYYY-MM-DD HH:mm:ss')} 创建</span>
        </div>
        <CYSongOperationBar
          favorTitle='收藏'
          shareTitle='分享'
          downloadTitle='下载'
          commentTitle='评论'
        />
      </div>
    </div>
  )
})
