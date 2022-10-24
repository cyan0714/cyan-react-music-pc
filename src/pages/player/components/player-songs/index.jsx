import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { fetchSimiPlayListAction } from '../../store/slice';

import { getSizeImage } from '@/utils/format-utils';
import { PlayerSongsWrapper } from './style';
import CYThemeHeaderPlayer from '@/components/theme-header-player';

export default memo(() => {
  const { currentSong, simiPlaylist } = useSelector(state => ({
    currentSong: state.player.currentSong,
    simiPlaylist: state.player.simiPlaylist,
  }), shallowEqual);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSimiPlayListAction(currentSong?.id || 0))
  }, [dispatch, currentSong]);

  return (
    <PlayerSongsWrapper>
      <CYThemeHeaderPlayer title="包含这首歌的歌单" />
      <div className="songs">
        {
          simiPlaylist?.map((item, index) => {
            return (
              <div className="song-item" key={item.id}>
                <a className="image" href="/#">
                  <img src={getSizeImage(item.coverImgUrl, 50)} alt="" />
                </a>
                <div className="info text-nowrap">
                  <a href="#/" className="name">{item.name}</a>
                  <div className="auchor">
                    by 
                    <a href="#/" className="nickname">{item.creator.nickname}</a>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </PlayerSongsWrapper>
  )
})
