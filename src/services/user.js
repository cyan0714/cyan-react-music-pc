import request from "./axios";

export function getUserInfo() {
  return request({
    url: "/user/account"
  })
}