import styled from 'styled-components';

export const InfoWrapper = styled.div`
  display: flex;
  padding: 47px 30px 40px 39px;
`

export const InfoLeft = styled.div`
  @keyframes rotating {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  width: 206px;

  .image {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 198px;
    height: 198px;

    .disk {
      animation: rotating 20s linear infinite;
    }

    .running {
      animation-play-state: running;
    }

    .paused {
      animation-play-state: paused;
    }

    .cover {
      background-position: -140px -580px;
      width: 206px;
      height: 205px;
      top: -4px;
      left: -4px;
    }
  }

  .link {
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    i {
      display: inline-block;
      width: 16px;
      height: 16px;
      background-position: -34px -863px;
    }

    a {
      color: #0c73c2;
      text-decoration: underline;
    }
  }
`

export const InfoRight = styled.div`
  width: 414px;
  margin-left: 20px;

  .header {
    display: flex;
    align-items: center;
    i {
      display: inline-block;
      width: 54px;
      height: 24px;
      background-position: 0 -463px;
    }

    .title {
      font-size: 24px;
      font-weight: 400;
      margin-left: 10px;
    }
  }

  .singer, .album {
    margin: 10px;

    a {
      color: #0c73c2;
    }
  }

  .lyric {
    padding: 30px 0 50px;

    .lyric-info {
      .text {
        margin: 6px 0;
      }
    }

    .lyric-control {
      position: relative;
      color: #0c73c2;
      background-color: #fff;
      cursor: pointer;

      i {
        position: absolute;
        width: 11px;
        height: 14px;
        right: -14px;
        top: 2px;
        margin-left: 14px;
        background-position: ${props => props.isSpread ? "-45px": "-65px"} -514px;
      }
    }
  }
`