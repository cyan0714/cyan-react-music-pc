import request from './axios';

// 二维码 key 生成接口
export function getQrCode() {
  return request({
    url: '/login/qr/key?timestamp=' + new Date().getTime(),
  });
}

// 二维码生成
export function getQrCodeImg(key) {
  // console.log('key: ', key);
  return request({
    url: `/login/qr/create?key=${key}&timestamp=${new Date().getTime()}&qrimg=true`,
  });
}

// 二维码检查扫码状态
export function getQrCodeStatus(key) {
  return request({
    url: `/login/qr/check?key=${key}&timestamp=${new Date().getTime()}`,
  });
}

// 退出登录
export function logout() {
  return request({
    url: '/logout?timestamp=' + new Date().getTime(),
  });
}
