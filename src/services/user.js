import request from "./axios";

export function getUserInfo() {
  return request({
    url: "/user/account"
  })
}

//获取用户详情
export function getUserDetail(uid) {
  return request({
    url: "/user/detail",
    params: {
      uid
    }
  })
}

//获取用户歌单
export function getUserPlaylist(uid) {
  return request({
    url: "/user/playlist",
    params: {
      uid
    }
  })
}

// 签到
// export function signIn() {
//   return request({
//     url: '/daily_signin?timestamp=' + Date.now()+'&type=1',
//     method: 'POST'
//   })
// }

