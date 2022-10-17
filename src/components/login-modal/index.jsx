// third lib
import React, { memo, useCallback, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// third components
import { Button, Modal, message, Result, Avatar } from 'antd'

// utils
import { setIsLogin, setUserProfile } from '@/store/user-slice'

// api
import { getQrCode, getQrCodeImg, getQrCodeStatus } from '@/services/login'
import { getUserDetail, getUserInfo, getUserPlaylist } from '@/services/user';

// local components
import { LoginModalWrapper } from './style'

export default memo(props => {
  // props

  // state-hooks
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [qrCodeKey, setQrCodeKey] = useState('')
  const [qrCodeImg, setQrCodeImg] = useState('')
  const [statusCode, setStatusCode] = useState(0) // 800(二维码已过期), 801(等待扫码), 802(扫码成功), 803(授权登录成功)
  const [isLoadingQrCodeImg, setIsLoadingQrCodeImg] = useState(true)
  const [userId, setUserId] = useState('')
  const [avatarUrl, setAvatarUrl] = useState('')

  let timer = ''
  const loopGetQrCodeStatus = key => {
    timer = setInterval(async () => {
      const res = await getQrCodeStatus(key)
      setStatusCode(res.code)
      // 避免当定时器清空时,多余的回调执行
      if (timer === undefined) return
      if (res.code === 803) {
        clearInterval(timer)
        message.success('授权登录成功')
        setIsModalOpen(false)
        getUserInfo().then(res => {
          setUserId(res.profile.userId)
          setAvatarUrl(res.profile.avatarUrl)
        })
        localStorage.isLogin = true
        dispatch(setIsLogin(true))
        timer = undefined
        return
      }
      if (res.code === 800) {
        clearInterval(timer)
        // message.warning('二维码已过期,请重新获取')
        timer = undefined
      }
    }, 1000)
  }

  const fetchQrCodeImg = () => {
    getQrCode().then(res => {
      setQrCodeKey(res.data.unikey)
      getQrCodeImg(res.data.unikey).then(result => {
        setQrCodeImg(result.data.qrimg)
        setIsLoadingQrCodeImg(false)
      })
      loopGetQrCodeStatus(res.data.unikey)
    })
  }
  const showModal = () => {
    setIsModalOpen(true)
    fetchQrCodeImg()
  }
  const refreshQrCode = () => {
    fetchQrCodeImg()
  }

  // redux-hooks
  const dispatch = useDispatch()
  const { isLogin, userProfile } = useSelector(state => ({
    isLogin: state.user.isLogin,
    userProfile: state.user.userProfile,
  }))
  useEffect(() => {
    console.log('isLogin改变了', isLogin);
    if (isLogin) {
      getUserProfile()
    }
  }, [isLogin])

  // 获取用户详情数据
  const getUserDetailInfo = (uid) => {
    getUserDetail(uid).then(res => {
      console.log('获取用户详情数据',res);
      if (res.code === 200) {
        dispatch(setUserProfile(res))
        localStorage.userProfile = JSON.stringify(res)
      }
    })
  }

  // 获取用户歌单
  const getUserPlayListInfo = (uid) => {
    getUserPlaylist(uid).then(res => {
      console.log('歌单', res);
    })
  }
  // 获取用户账号数据
  const getUserProfile = () => {
    // 如果已经设置过,则从 store 读取 userId
    if (userProfile.profile?.userId) {
      getUserDetailInfo(userProfile.profile.userId)
      getUserPlayListInfo(userProfile.profile.userId)
    } else {
      getUserInfo().then(res => {
        console.log('获取用户账号数据', res);
        getUserDetailInfo(res.profile.userId)
        getUserPlayListInfo(res.profile.userId)
      })
    }
  }

  return (
    <LoginModalWrapper>
      {!userId && (
        <div className='txt' onClick={showModal}>
          登录
        </div>
      )}
      {userId && <Avatar src={avatarUrl} />}
      {isModalOpen && (
        <Modal title='登录' getContainer={false} open={isModalOpen}>
          {statusCode !== 802 && (
            <div>
              <p className='text-lg text-center mb-2'>扫码登录</p>
              {isLoadingQrCodeImg ? (
                <div className='w-44 h-44'>加载二维码中...</div>
              ) : (
                <div className='relative'>
                  <img className='w-44 h-44' src={qrCodeImg} alt='' />
                  {statusCode === 800 && (
                    <div className='qrcode-expired w-44 h-44 flex absolute inset-0 justify-center items-center bg-black/70'>
                      <div className='text-white'>
                        <p>二维码已失效</p>
                        <button
                          className='mt-4 px-4 py-1 bg-gradient-to-b from-green-400 to-green-700 border-0'
                          onClick={refreshQrCode}>
                          点击刷新
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
              <p className='mt-6'>
                <span>使用</span>
                <span className='text-sky-500'>网易云音乐APP</span>
                <span>扫码登录</span>
              </p>
            </div>
          )}
          {/* 扫码待确认登录 */}
          {statusCode === 802 && (
            <div className='mt-2'>
              <Result
                status='success'
                title='扫码成功!'
                subTitle='请在手机上确认登录'
              />
            </div>
          )}
        </Modal>
      )}
    </LoginModalWrapper>
  )
})
