import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

import CYDiscover from '@/pages/discover';
import CYMine from '@/pages/mine';
import CYFriend from '@/pages/friend';
import App from '../App'


export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "",
        element: <Navigate to="discover"/>
      },
      {
        path: "discover",
        element: <CYDiscover />
      },
      {
        path: "mine",
        element: <CYMine />
      },
      {
        path: "friend",
        element: <CYFriend />
      },
    ]
  },
])