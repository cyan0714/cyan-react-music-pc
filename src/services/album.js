import request from './axios';

export const getHotAlbums = () => {
  return request({
    url: "/top/album",
    params: {
      type: 'hot'
    }
  })
}

export const getAllAlbums = (params) => {
  return request({
    url: "/album/new",
    params
  })
}