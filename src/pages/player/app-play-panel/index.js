import React, { memo } from 'react';

import CYPlayHeader from './components/play-header';
import CYPlayList from './components/play-list';
import CYLyricPanel from './components/lyric-panel';
import { PanelWrapper } from './style';

export default memo(function HYAppPlayList() {
  return (
    <PanelWrapper>
      <CYPlayHeader/>
      <div className="main">
        <img className="image" src="https://p4.music.126.net/qeN7o2R3_OTPhghmkctFBQ==/764160591569856.jpg" alt=""/>
        <CYPlayList/>
        <CYLyricPanel/>
      </div>
    </PanelWrapper>
  )
})
