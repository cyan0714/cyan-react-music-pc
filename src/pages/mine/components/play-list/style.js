import styled from 'styled-components'

export const SongListLeftWrapper = styled.div`
  max-height: calc(100vh - 122px);
  overflow: auto;
  ::-webkit-scrollbar {
    // chrome
    display: none;
  }
  .ant-collapse-content-box {
    padding: 0;
    padding-top: 10px;
  }
`
