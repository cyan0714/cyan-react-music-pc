import request from './axios';

export const getTopBanners = () => {
  return request({
    url: '/banner',
  })
}

export const getHotRecommends = () => {
  return request({
    url: '/personalized'
  })
}

export const getNewAlbum = (params) => {
  return request({
    method: 'GET',
    url: '/top/album',
    params, // { limit: '', offset: '' }
  })
}

export const getTopList = (params) => {
  return request({
    url: '/playlist/detail',
    params, // { id: '' }
  })
}

export const getArtistList = (limit, cat) => {
  return request({
    url: "/artist/list",
    params: {
      cat,
      limit
    }
  })
}