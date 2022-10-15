import styled from 'styled-components'

export const LoginModalWrapper = styled.div`
  .txt {
    cursor: pointer;
  }
  .ant-modal-header {
    background-color: #2d2d2d;
    .ant-modal-title {
      color: #fff;
      font-weight: bold;
    }
  }
  .ant-modal-close-x {
    color: #fff;
  }
  .ant-modal-body {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .ant-modal-footer {
    display: none;
  }
`
