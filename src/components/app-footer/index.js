import React, { memo, Fragment } from 'react'

import { footerLinks, footerImages } from '@/services/local-data'

import { AppFooterWrapper, FooterLeft, FooterRight } from './style'

const CYAppFooter = memo(() => {
  return (
    <AppFooterWrapper>
      <div className='wrap-v2 content'>
        <FooterLeft className='left'>
          <div className='link'>
            {footerLinks.map(item => {
              return (
                <Fragment key={item.title}>
                  <a href={item.link} target='_blank' rel='noopener noreferrer'>
                    {item.title}
                  </a>
                  <span className='line'>|</span>
                </Fragment>
              )
            })}
          </div>
          <div className='copyright'>
            <span>网易公司版权所有©1997-2022</span>
            <span>
              杭州乐读科技有限公司运营：
              <a
                href='https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png'
                rel='noopener noreferrer'
                target='_blank'>
                浙网文[2021]1186-054号
              </a>
            </span>
          </div>
          <div className='info'>
            <span>粤B2-20090191-18 </span>
            <a
              href='http://www.beian.miit.gov.cn/publish/query/indexFirst.action'
              rel='noopener noreferrer'
              target='_blank'>
              工业和信息化部备案管理系统网站
            </a>
          </div>
          <div className='report'>
            <span>互联网宗教信息服务许可证：浙（2022）0000120</span>
            <span>
              监督举报邮箱：
              <a
                href='mailto:ncm5990@163.com'
                target='_blank'
                rel='noopener noreferrer'>
                51jubao@service.netease.com
              </a>
            </span>
          </div>
        </FooterLeft>
        <FooterRight className='right'>
          {footerImages.map((item, index) => {
            return (
              <li className='item' key={item.link}>
                <a
                  className='link'
                  href={item.link}
                  rel='noopener noreferrer'
                  target='_blank'>
                  {' '}
                </a>
                <span className='title'>{item.title}</span>
              </li>
            )
          })}
        </FooterRight>
      </div>
    </AppFooterWrapper>
  )
})

export default CYAppFooter
