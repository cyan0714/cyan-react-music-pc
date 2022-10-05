import React, { useEffect, memo } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { fetchSettleSingersAction } from '../../store/slice'
import { getSizeImage } from '@/utils/format-utils'

import CYThemeHeaderSmall from '@/components/theme-header-small'
import { SetterSongerWrapper } from './style'

export default memo(function CYSettleSinger() {
  const dispatch = useDispatch()
  const { settleSingers } = useSelector(
    state => ({ settleSingers: state.recommend.settleSingers }),
    shallowEqual
  )

  useEffect(() => {
    dispatch(fetchSettleSingersAction())
  }, [dispatch])

  return (
    <SetterSongerWrapper>
      <CYThemeHeaderSmall title='入驻歌手' more='查看全部>' />
      <div className='singer-list'>
        {settleSingers.map((item, index) => {
          return (
            <a href='/singer' key={item.id} className='item'>
              <img src={getSizeImage(item.img1v1Url, 62)} alt='' />
              <div className='info'>
                <div className='title'>{item.alias.join('') || item.name}</div>
                <div className='name'>{item.name}</div>
              </div>
            </a>
          )
        })}
      </div>
      <div className='apply-for'>
        <a href='/abc'>申请成为网易音乐人</a>
      </div>
    </SetterSongerWrapper>
  )
})
