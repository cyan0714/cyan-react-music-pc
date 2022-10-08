import React, { memo } from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import CYThemeHeaderNormal from '@/components/theme-header-normal';
import CYAlphaList from './components/alpha-list';
import CYArtistItem from './components/artist-item';

import {
  ArtistListWrapper
} from './style';

export default memo(function CYArtistList() {
  const { currentType, artistList } = useSelector(state => ({
    currentType: state.artist.currentType,
    artistList: state.artist.artistList
  }), shallowEqual);

  return (
    <ArtistListWrapper>
      <CYThemeHeaderNormal title={currentType.name} />
      <CYAlphaList/>
      <div className="artist-list">
        {
          artistList.map((item, index) => {
            return <CYArtistItem key={item.id} index={index} info={item}/>
          })
        }
      </div>
    </ArtistListWrapper>
  )
})
