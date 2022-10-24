import React, { memo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import { UserLoginWrapper } from './style'
import LoginModal from '@/components/login-modal'

export default memo(() => {
  const { isLogin } = useSelector(
    state => ({
      isLogin: state.user.isLogin,
    }),
    shallowEqual
  )
  return (
    <UserLoginWrapper className='sprite_02'>
      {!isLogin ? (
        <div>
          <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
          <LoginModal loginBtn={<span className='sprite_02 login-txt'>用户登录</span>} />
        </div>
      ) : (
        <div>已登录</div>
      )}
    </UserLoginWrapper>
  )
})
