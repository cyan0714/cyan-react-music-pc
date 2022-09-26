import React, { memo } from 'react';

import CYTopBanner from './components/top-banner';
import CYHotRecommend from './components/hot-recommend';
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
        </RecommendLeft>
        <RecommendRight>
        </RecommendRight>
      </Content>
    </RecommendWraper>
  )
})