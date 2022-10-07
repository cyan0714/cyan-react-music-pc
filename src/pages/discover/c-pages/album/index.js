import React, { memo } from 'react';

import CYHotAlbum from './components/hot-album';
import CYAllAlbum from './components/all-album';
import {
  AlbumWrapper
} from './style';

export default memo(function CYAlbum() {
  return (
    <AlbumWrapper className="wrap-v2">
      <CYHotAlbum/>
      <CYAllAlbum/>
    </AlbumWrapper>
  )
})