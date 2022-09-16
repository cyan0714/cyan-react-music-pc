import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'

import CYDiscover from '@/pages/discover'
import CYFriend from '@/pages/friend'
import CYMine from '@/pages/mine'

import '@/assets/css/base.css'

import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <HashRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='' element={<CYDiscover />}></Route>
        <Route path='discover' element={<CYDiscover />}></Route>
        <Route path='friend' element={<CYFriend />}></Route>
        <Route path='mine' element={<CYMine />}></Route>
      </Route>
    </Routes>
  </HashRouter>
)
