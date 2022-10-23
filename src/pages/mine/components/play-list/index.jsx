// third lib
import React, { memo, useCallback, useState, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

// third components
import { Collapse } from 'antd'

// utils
import { setCurrentPlayListObj } from '../../store/slice'

// api

// local components
import { SongListLeftWrapper } from './style'

export default memo(props => {
  // props

  // state-hooks
  const [myCreatePlayList, setMyCreatePlayList] = useState([])
  const [collectPlayList, setCollectPlayList] = useState([])

  // redux-hooks
  const dispatch = useDispatch()

  const { userProfile, allSongList } = useSelector(
    state => ({
      userProfile: state.user.userProfile,
      allSongList: state.user.allSongList,
    }),
    shallowEqual
  )
  useEffect(() => {
    const { myCreatePlayList = [], collectPlayList = [] } = allSongList.length !== 0 && classifySongsList(allSongList)
    setMyCreatePlayList(myCreatePlayList)
    setCollectPlayList(collectPlayList)
    dispatch(setCurrentPlayListObj(myCreatePlayList[0]))
  }, [allSongList])

  // others
  const mySingers = 1
  const myVideos = 1
  const myDJs = 1
  const songListItem = item => {
    return (
      <div
        key={item?.id}
        onClick={() => dispatch(setCurrentPlayListObj(item))}
        className='flex mb-2 px-4 py-0.5 cursor-pointer hover:bg-slate-100'>
        <img src={item?.coverImgUrl} alt='' className='w-10 h-10' />
        <div className='flex flex-col justify-between ml-2 w-40'>
          <span className='text-xs single-row-ellip'>{item?.name}</span>
          <span className='text-xs text-slate-400'>{item?.trackCount}首</span>
        </div>
      </div>
    )
  }
  
  const classifySongsList = playlist => {
    return playlist.reduce(
      (prev, currentValue, index) => {
        if (currentValue.creator?.userId === userProfile.profile?.userId) {
          prev.myCreatePlayList.push(currentValue)
        } else {
          prev.collectPlayList.push(currentValue)
        }
        return prev
      },
      { myCreatePlayList: [], collectPlayList: [] }
    )
  }
  const { Panel } = Collapse

  return (
    <SongListLeftWrapper>
      <Collapse defaultActiveKey={['1']}>
        <Panel header='创建的歌单' key='1'>
          {myCreatePlayList?.map(item => songListItem(item))}
        </Panel>
        <Panel header='收藏的歌单' key='2'>
          {collectPlayList?.map(item => songListItem(item))}
        </Panel>
      </Collapse>
    </SongListLeftWrapper>
  )
})
