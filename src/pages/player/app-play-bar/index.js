import React, { memo, useRef, useEffect, useState, useCallback } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import { getPlayUrl, formatMinuteSecond } from '@/utils/format-utils';

import { NavLink } from 'react-router-dom';
import { Slider } from 'antd';
import {
  PlaybarWrapper,
  Control,
  PlayInfo,
  Operator
} from './style';

export default memo(function CYAppPlaybar() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isChanging, setIsChanging] = useState(false);

  const { player } = useSelector(state => state)
  const currentSong = player.currentSong
  const dispatch = useDispatch();

  const audioRef = useRef();

  useEffect(() => {
    audioRef.current.src = getPlayUrl(currentSong.id);
    audioRef.current.play().then(res => {
      setIsPlaying(true);
    }).catch(err => {
      setIsPlaying(false);
    });
    setDuration(currentSong.dt);
  }, [currentSong]);

  // 其他业务
  const play = useCallback(() => {
    setIsPlaying(!isPlaying);
    isPlaying ? audioRef.current.pause() : audioRef.current.play().catch(err => {
      setIsPlaying(false);
    });
  }, [isPlaying]);

  const timeUpdate = (e) => {
    const currentTime = e.target.currentTime;
    if (!isChanging) {
      setCurrentTime(currentTime);
      setProgress((currentTime * 1000) / duration * 100);
    }
  }

  const timeEnded = () => {
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  }

  const sliderChange = useCallback((value) => {
    setProgress(value);
    const time = value / 100.0 * duration / 1000;
    setCurrentTime(time);
    setIsChanging(true);
  }, [duration])

  const sliderAfterChange = useCallback((value) => {
    const time = value / 100.0 * duration / 1000;
    audioRef.current.currentTime = time;
    setCurrentTime(time);
    setIsChanging(false);

    if (!isPlaying) {
      play();
    }
  }, [duration, isPlaying, play]);

  return (
    <PlaybarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          <button className="sprite_playbar btn prev"></button>
          <button className="sprite_playbar btn play" onClick={e => play()}></button>
          <button className="sprite_playbar btn next"></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to="/discover/player">
              <img src="https://p2.music.126.net/OVkXDNmbk2uj6wE1KTZIwQ==/109951165203334337.jpg?param=34y34" alt="" />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <span className="singer-name">{currentSong.ar[0].name}</span>
            </div>
            <div className="progress">
              <Slider value={progress} onChange={sliderChange} onAfterChange={sliderAfterChange} />
              <div className="time">
                <span className="now-time">{formatMinuteSecond(currentTime * 1000)}</span>
                <span className="divider">/</span>
                <span className="total-time">{formatMinuteSecond(duration)}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator>
          <div className="left">
            <button className="sprite_playbar btn favor"></button>
            <button className="sprite_playbar btn share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="sprite_playbar btn volume"></button>
            <button className="sprite_playbar btn loop"></button>
            <button className="sprite_playbar btn playlist"></button>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef} onTimeUpdate={timeUpdate} onEnded={timeEnded}/>
    </PlaybarWrapper>
  )
})
