import React, { memo, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import { scrollTo } from "@/utils/ui-helper";

import { PannelWrapper } from './style';

export default memo(function CYLyricPanel() {
  const { lyrics, currentLyricIndex } = useSelector(state => state.player)
  const panelRef = useRef();

  useEffect(() => {
    if (currentLyricIndex > 0 && currentLyricIndex < 3) return;
    scrollTo(panelRef.current, (currentLyricIndex - 3) * 32, 300)
  }, [currentLyricIndex]);

  return (
    <PannelWrapper ref={panelRef}>
      <div className="lrc-content">
        {
          lyrics.map((item, index) => {
            return (
              <div key={item.time}
                className={classNames("lrc-item", { "active": index === currentLyricIndex })}>
                {item.content}
              </div>
            )
          })
        }
      </div>
    </PannelWrapper>
  )
})
