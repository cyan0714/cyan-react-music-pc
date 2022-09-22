import React, { memo } from 'react'
import { Outlet, NavLink } from 'react-router-dom'

import { discoverMenu } from '@/services/local-data'
import { DiscoverWrapper, TopMenu } from './style'

const CYDiscover = memo(() => {
  return (
    <DiscoverWrapper>
      <div className='top'>
        <TopMenu className='wrap-v1'>
          {discoverMenu.map((item, index) => {
            return (
              <div className='item' key={item.title}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </div>
            )
          })}
        </TopMenu>
      </div>
      <Outlet></Outlet>
    </DiscoverWrapper>
  )
})

export default CYDiscover
