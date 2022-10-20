import React, { memo, useCallback, useState, useMemo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { debounce } from 'lodash'

import { getSongDetailAction } from '@/utils/action'
import { setIsLogin, setUserProfile, setAllSongList } from '@/store/user-slice'

import { searchKeywords } from '@/services/common'
import { headerLinks } from '@/services/local-data'
import { getUserDetail, getUserInfo, getUserPlaylist } from '@/services/user'

import { AppHeaderWrapper, HeaderLeft, HeaderRight } from './style'
import LoginModal from '../login-modal'

const CYAppHeader = memo(() => {
  const [songs, setSongs] = useState([])
  const [isShowSearchResultWrapper, setIsShowSearchResultWrapper] = useState(false)
  const dispatch = useDispatch()
  const history = useNavigate()

  const { isLogin, userProfile } = useSelector(state => ({
    isLogin: state.user.isLogin,
    userProfile: state.user.userProfile,
  }))

  useEffect(() => {
    if (isLogin) {
      getUserProfile()
    }
  }, [isLogin])

  // 获取用户账号数据
  const getUserProfile = () => {
    // 如果已经设置过,则从 store 读取 userId
    if (userProfile.profile?.userId) {
      getUserDetailInfo(userProfile.profile.userId)
      getUserPlayListInfo(userProfile.profile.userId)
    } else {
      getUserInfo().then(res => {
        getUserDetailInfo(res.profile.userId)
        getUserPlayListInfo(res.profile.userId)
      })
    }
  }

  // 获取用户详情数据
  const getUserDetailInfo = uid => {
    getUserDetail(uid).then(res => {
      if (res.code === 200) {
        dispatch(setUserProfile(res))
        localStorage.userProfile = JSON.stringify(res)
      }
    })
  }

  // 获取用户歌单
  const getUserPlayListInfo = uid => {
    getUserPlaylist(uid).then(res => {
      dispatch(setAllSongList(res.playlist))
    })
  }

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

  const debounceSearch = useMemo(
    () =>
      debounce(val => {
        searchKeywords(val).then(res => {
          const resSongs = res.result.songs
          setSongs(resSongs || [])
          if (resSongs) {
            setIsShowSearchResultWrapper(true)
          }
        })
      }, 500),
    []
  )

  const onChange = useCallback(
    e => {
      const value = e.target.value
      debounceSearch(value)
    },
    [debounceSearch]
  )

  const playMusic = id => {
    dispatch(getSongDetailAction(id))
    history('/discover/player')
  }

  const content = (
    <div>
      {songs.map((song, index) => {
        return (
          <p key={index} onClick={() => playMusic(song.id)}>
            <span>{song.name}</span> - <span>{song.ar[0].name || ''}</span>
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
            onBlur={() => {
              setTimeout(() => setIsShowSearchResultWrapper(false), 100)
            }}
            onFocus={() => {
              songs.length > 0 && setIsShowSearchResultWrapper(true)
            }}
            prefix={<SearchOutlined />}
          />
          <div className='center'>创作者中心</div>
          <LoginModal />
          <div className='search-result-wrapper shadow'>{content}</div>
        </HeaderRight>
      </div>
      <div className='divider'></div>
    </AppHeaderWrapper>
  )
})

export default CYAppHeader
