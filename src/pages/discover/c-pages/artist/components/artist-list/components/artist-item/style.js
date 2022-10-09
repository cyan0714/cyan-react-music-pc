import styled from 'styled-components';

export const ItemWrapper = styled.div`
  width: 130px;
  &:nth-child(-n + 10) {
    .info {
      margin: 10px 0;
    }
  }

  .image {
    img {
      width: 130px;
      height: 130px;
    }
  }

  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 34px;

    .name {
      cursor: pointer;

      &:hover {
        color: red;
        text-decoration: underline;
      }
    }

    .icon {
      display: inline-block;
      width: 17px;
      height: 18px;
      background-position: 0 -740px;
    }
  }
`