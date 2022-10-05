import React, { memo } from 'react';

import CYPlayerInfo from './components/player-info';
import CYPlayerComment from './components/player-comment';
import CYPlayerSongs from './components/player-songs';
import CYPlayerRelevant from './components/player-relevant';
import {
  PlayerWrapper,
  PlayerLeft,
  PlayerRight
} from './style';

export default memo(function CYPlayer() {
  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>
          <CYPlayerInfo/>
          <CYPlayerComment/>
        </PlayerLeft>
        <PlayerRight>
          <CYPlayerSongs/>
          <CYPlayerRelevant/>
        </PlayerRight>
      </div>
    </PlayerWrapper>
  )
})
