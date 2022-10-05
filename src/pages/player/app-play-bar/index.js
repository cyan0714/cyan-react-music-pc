import React, { memo, useRef, useEffect, useState, useCallback } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Slider, message } from 'antd'

import { setCurrentLyricIndex, setPlaySequence, setIsPlaying } from '../store/slice'
import { getPlayUrl, formatMinuteSecond, getSizeImage } from '@/utils/format-utils'
import { changePlaySongAction, getSongDetailAction } from '@/utils/action'

import CYAppPlayPanel from '../app-play-panel'
import { PlaybarWrapper, Control, PlayInfo, Operator } from './style'

export default memo(function CYAppPlaybar() {
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isChanging, setIsChanging] = useState(false)
  const [showPanel, setShowPanel] = useState(false);

  const {
    isPlaying,
    currentSong,
    lyrics,
    currentLyricIndex,
    playList,
    playSequence,
  } = useSelector(state => ({
    isPlaying: state.player.isPlaying,
    currentSong: state.player.currentSong,
    lyrics: state.player.lyrics,
    currentLyricIndex: state.player.currentLyricIndex,
    playList: state.player.playList,
    playSequence: state.player.playSequence,
  }), shallowEqual)

  const dispatch = useDispatch()

  const audioRef = useRef()

  useEffect(() => {
    dispatch(getSongDetailAction(167876));
  }, [dispatch])

  useEffect(() => {
    audioRef.current.src = getPlayUrl(currentSong.id)
    audioRef.current
      .play()
      .then(res => {
        dispatch(setIsPlaying(true))
      })
      .catch(err => {
        dispatch(setIsPlaying(false))
      })
    setDuration(currentSong.dt)
  }, [dispatch, currentSong])

  const play = useCallback(() => {
    dispatch(setIsPlaying(!isPlaying))
    isPlaying
      ? audioRef.current.pause()
      : audioRef.current.play().catch(err => {
          dispatch(setIsPlaying(false))
        })
  }, [dispatch, isPlaying])

  const timeUpdate = e => {
    const currentTime = e.target.currentTime
    if (!isChanging) {
      setCurrentTime(currentTime)
      setProgress(((currentTime * 1000) / duration) * 100)
    }

    let lrcLength = lyrics.length
    let i = 0
    for (; i < lrcLength; i++) {
      const lrcTime = lyrics[i].time
      if (currentTime * 1000 < lrcTime) {
        break
      }
    }
    const finalIndex = i - 1
    if (finalIndex !== currentLyricIndex) {
      dispatch(setCurrentLyricIndex(finalIndex))
      message.open({
        content: lyrics[finalIndex].content,
        key: 'lyric',
        duration: 0,
        className: 'lyric-message',
      })
    }
  }

  const timeEnded = () => {
    if (playSequence === 2 || playList.length === 1) {
      audioRef.current.currentTime = 0
      audioRef.current.play()
    } else {
      dispatch(changePlaySongAction(1));
    }
  }

  const sliderChange = useCallback(
    value => {
      setProgress(value)
      const time = ((value / 100.0) * duration) / 1000
      setCurrentTime(time)
      setIsChanging(true)
    },
    [duration]
  )

  const sliderAfterChange = useCallback(
    value => {
      const time = ((value / 100.0) * duration) / 1000
      audioRef.current.currentTime = time
      setCurrentTime(time)
      setIsChanging(false)

      if (!isPlaying) {
        play()
      }
    },
    [duration, isPlaying, play]
  )

  return (
    <PlaybarWrapper className='sprite_playbar'>
      <div className='content wrap-v2'>
        <Control isPlaying={isPlaying}>
          <button className='sprite_playbar btn prev' onClick={e => dispatch(changePlaySongAction(-1))}></button>
          <button className='sprite_playbar btn play' onClick={e => play()}></button>
          <button className='sprite_playbar btn next' onClick={e => dispatch(changePlaySongAction(1))}></button>
        </Control>
        <PlayInfo>
          <div className='image'>
            <NavLink to='/discover/player'>
              <img src={getSizeImage(currentSong.al.picUrl, 30)} alt='' />
            </NavLink>
          </div>
          <div className='info'>
            <div className='song'>
              <span className='song-name'>{currentSong.name}</span>
              <span className='singer-name'>{currentSong.ar[0].name}</span>
            </div>
            <div className='progress'>
              <Slider
                value={progress}
                onChange={sliderChange}
                onAfterChange={sliderAfterChange}
              />
              <div className='time'>
                <span className='now-time'> {formatMinuteSecond(currentTime * 1000)} </span>
                <span className='divider'>/</span>
                <span className='total-time'> {formatMinuteSecond(duration)} </span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator sequence={playSequence}>
          <div className='left'>
            <button className='sprite_playbar btn favor'></button>
            <button className='sprite_playbar btn share'></button>
          </div>
          <div className='right sprite_playbar'>
            <button className='sprite_playbar btn volume'></button>
            <button className='sprite_playbar btn loop' onClick={e => dispatch(setPlaySequence(playSequence + 1)) }></button>
            <button className='sprite_playbar btn playlist' onClick={e => setShowPanel(!showPanel)}>{playList.length}</button>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef} onTimeUpdate={timeUpdate} onEnded={timeEnded} />
      {showPanel && <CYAppPlayPanel changePanelShow={(isShowPanel) => setShowPanel(isShowPanel)} />}
    </PlaybarWrapper>
  )
})
