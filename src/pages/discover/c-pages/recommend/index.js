import React, { memo } from 'react';

import CYTopBanner from './components/top-banner';
import CYHotRecommend from './components/hot-recommend';
import CYNewAlbum from './components/new-album';
import CYRankingList from './components/ranking-list';
import CYUserLogin from './components/user-login';
import CYSettleSinger from './components/settle-singer';
import CYHotRadio from './components/hot-radio';
import {
  RecommendWraper,
  Content,
  RecommendLeft,
  RecommendRight
} from "./style";

export default memo(function CYRecommend() {
  return (
    <RecommendWraper>
      <CYTopBanner/>
      <Content className="wrap-v2">
        <RecommendLeft>
          <CYHotRecommend />
          <CYNewAlbum />
          <CYRankingList />
        </RecommendLeft>
        <RecommendRight>
          <CYUserLogin />
          <CYSettleSinger />
          <CYHotRadio />
        </RecommendRight>
      </Content>
    </RecommendWraper>
  )
})
