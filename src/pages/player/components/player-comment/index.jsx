import React, { memo, useState, useEffect } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { Comment, List, Tooltip, Input } from 'antd'

import { getComments } from '@/services/player'

import CYThemeHeaderNormal from '@/components/theme-header-normal'
import CYThemeHeaderPlayer from '@/components/theme-header-player'
import { CommentWrapper, EditComment } from './style'

export default memo(function CYPlayerComment() {
  const [comments, setComments] = useState([])
  const [total, setTotal] = useState(0)

  const { currentSong } = useSelector(state => ({
    currentSong: state.player.currentSong
  }), shallowEqual)

  const { TextArea } = Input

  useEffect(() => {
    getComments({ id: currentSong.id }).then(res => {
      setComments(res.comments)
      setTotal(res.total)
    })
  }, [currentSong])

  const onChange = e => {
    console.log('Change:', e.target.value)
  }
  return (
    <CommentWrapper>
      <CYThemeHeaderNormal title={'评论'} text={`共${total}条评论`} />
      <EditComment>
        <div className='left'>
          <img src={require('@/assets/imgs/default_avatar.jpg')} alt='' />
        </div>
        <div className='right'>
          <TextArea
            showCount
            placeholder='评论'
            maxLength={100}
            style={{
              height: 70,
              resize: 'none',
            }}
            onChange={onChange}
          />
        </div>
        <span className='commit-btn sprite_button2'>评论</span>
      </EditComment>
      <CYThemeHeaderPlayer title='精彩评论' />
      <List
        className='comment-list'
        itemLayout='horizontal'
        dataSource={comments}
        renderItem={item => (
          <li className={'comment-item'}>
            <Comment
              // actions={item.actions}
              author={item.user.nickname}
              avatar={item.user.avatarUrl}
              content={item.content}
              datetime={item.timeStr}
            />
          </li>
        )}
      />
    </CommentWrapper>
  )
})
