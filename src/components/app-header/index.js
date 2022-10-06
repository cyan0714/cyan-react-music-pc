import React, { memo, useCallback, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { debounce } from 'lodash'

import { searchKeywords } from '@/services/common'
import { headerLinks } from '@/services/local-data'
import { AppHeaderWrapper, HeaderLeft, HeaderRight } from './style'

const CYAppHeader = memo(() => {
  const [songs, setSongs] = useState([])
  const [isShowSearchResultWrapper, setIsShowSearchResultWrapper] = useState(false)

  const showItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className='sprite_01 icon'></i>
        </NavLink>
      )
    } else {
      return (
        <a href={item.link} target='_blank' rel='noopener noreferrer'>
          {item.title}
        </a>
      )
    }
  }

  const onChange = useCallback(
    debounce(e => {
      const value = e.target.value
      searchKeywords(value).then(res => {
        setSongs(res.result.songs)
        setIsShowSearchResultWrapper(true)
      })
    }, 500),
    []
  )

  const content = (
    <div>
      {songs.map((song, index) => {
        return (
          <p key={song.id}>
            <span>{song.name}</span> - 
            <span> {song.ar[0].name || ''}</span>
          </p>
        )
      })}
    </div>
  )

  return (
    <AppHeaderWrapper>
      <div className='wrap-v1 content'>
        <HeaderLeft>
          <a className='logo sprite_01' href='#/'>
            网易云音乐
          </a>
          <div className='select-list'>
            {headerLinks.map((item, index) => {
              return (
                <div className='select-item' key={item.title}>
                  {showItem(item, index)}
                </div>
              )
            })}
          </div>
        </HeaderLeft>
        <HeaderRight isShowSearchResultWrapper={isShowSearchResultWrapper}>
          <Input
            className='search'
            placeholder='音乐/视频/电台/用户'
            onChange={e => onChange(e)}
            onBlur={() => setIsShowSearchResultWrapper(false)}
            onFocus={() => {songs.length > 0 && setIsShowSearchResultWrapper(true)}}
            prefix={<SearchOutlined />}
          />
          <div className='center'>创作者中心</div>
          <div className=''>登录</div>
          <div className='search-result-wrapper shadow'>{content}</div>
        </HeaderRight>
      </div>
      <div className='divider'></div>
    </AppHeaderWrapper>
  )
})

export default CYAppHeader
