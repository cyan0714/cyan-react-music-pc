import React, { memo } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

import CYAppHeader from '@/components/app-header'
import CYAppFooter from '@/components/app-footer'
import CYAppPlayBar from '@/pages/player/app-play-bar';

const App = memo(() => {
  return (
    <Provider store={store}>
      <CYAppHeader></CYAppHeader>
      <Outlet></Outlet>
      <CYAppFooter></CYAppFooter>
      <CYAppPlayBar></CYAppPlayBar>
    </Provider>
  )
})

export default App
