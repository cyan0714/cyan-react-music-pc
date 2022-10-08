import React, { memo } from 'react'

import CYArtistCategory from './components/artist-category'
import CYArtistList from './components/artist-list'
import { ArtistWrapper } from './style'

export default memo(function CYArtist() {
  return (
    <ArtistWrapper>
      <div className='content wrap-v2'>
        <CYArtistCategory />
        <CYArtistList />
      </div>
    </ArtistWrapper>
  )
})
