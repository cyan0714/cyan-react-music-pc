import React, { memo } from 'react'
import { Link, Outlet } from 'react-router-dom'

import CYAppHeader from '@/components/app-header'
import CYAppFooter from '@/components/app-footer'

const App = memo(() => {
  return (
    <div>
      <CYAppHeader></CYAppHeader>
      <Outlet></Outlet>
      <CYAppFooter></CYAppFooter>
    </div>
  )
})

export default App
