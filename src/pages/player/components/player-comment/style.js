import styled from 'styled-components'

export const CommentWrapper = styled.div`
  .comment-item {
    border-bottom: 1px dotted #ccc;
  } 
`

export const EditComment = styled.div`
  position: relative;
  display: flex;
  margin-top: 20px;
  margin-bottom: 40px;

  .left {
    width: 60px;
    height: 60px;
    margin-right: 14px;

    img {
      width: 100%;
    }
  }

  .right {
    flex: 1;
    
    .ant-input-textarea-show-count::after {
      position: absolute;
      right: 60px;
      top: 76px;
    }
  }

  .commit-btn {
    position: absolute;
    right: 0;
    bottom: -29px;
    width: 58px;
    font-size: 13px;
    text-align: center;
    background-position: -77px -64px;
    line-height: 24px;
    color: #fff;
    cursor: pointer !important;
    z-index: 1;
  }
`