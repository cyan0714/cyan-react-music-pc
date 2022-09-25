import React, { memo } from 'react';

import CYTopBanner from './components/top-banner';
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
    </RecommendWraper>
  )
})
