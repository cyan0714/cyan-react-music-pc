import { getSongDetail, getLyric, getSimiPlaylist, getSimiSong } from '@/services/player';
import {
  setCurrentSongIndex,
  setCurrentSong,
  setPlayList,
  setLyrics,
} from '@/pages/player/store/slice'
import { parseLyric } from './lyric-parse'

export const changePlaySongAction = (tag) => {
  return (dispatch, getState) => {
    // 1.获取当前的index
    let currentSongIndex = getState().player.currentSongIndex;
    const playSequence = getState().player.playSequence;
    const playList = getState().player.playList;

    // 2.判断当前播放列表
    switch (playSequence) {
      case 1:
        currentSongIndex = Math.floor(Math.random() * playList.length);
        break;
      default:
        currentSongIndex += tag;
        if (currentSongIndex === playList.length) currentSongIndex = 0; 
        if (currentSongIndex === -1) currentSongIndex = playList.length - 1;
    }

    // 3.处理修改数据
    const currentSong = playList[currentSongIndex];
    dispatch(setCurrentSongIndex(currentSongIndex));
    dispatch(setCurrentSong(currentSong));

    // 获取当前的歌词,并且解析
    getLyric(currentSong.id).then(res => {
      const lrcString = res.lrc.lyric;
      const lyrics = parseLyric(lrcString);
      dispatch(setLyrics(lyrics));
    });
  }
}

export const getSongDetailAction = (ids) => {
  return (dispatch, getState) => {
    // 1.判断是否歌曲存在playList中
    const playList = getState().player.playList;

    const songIndex = playList.findIndex(song => song.id === ids);
    if (songIndex !== -1) { // 找到数据
      const currentSong = playList[songIndex];
      dispatch(setCurrentSongIndex(songIndex));
      dispatch(setCurrentSong(currentSong));
    } else { // 未找到数据
      getSongDetail(ids).then(res => {
        const song = res.songs && res.songs[0];
        if (!song) return;
        // 1.添加到playList中
        const newPlayList = [...playList];
        newPlayList.push(song);
        dispatch(setPlayList(newPlayList));
        // 2.改变当前index
        dispatch(setCurrentSongIndex(newPlayList.length - 1));
        dispatch(setCurrentSong(song));
      });
    }

    // 获取当前的歌词,并且解析
    getLyric(ids).then(res => {
      const lrcString = res.lrc.lyric;
      const lyrics = parseLyric(lrcString);
      dispatch(setLyrics(lyrics));
    });
  }
}
