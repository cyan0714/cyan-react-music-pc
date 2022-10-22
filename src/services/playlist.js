import request from './axios';
// 获取歌单所有数据
export const getPlaylistAllDetail = (params) => {
  return request({
    url: '/playlist/track/all',
    params: { ...params, timestamp: Date.now() },
  })
}