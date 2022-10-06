import request from './axios';

export const searchKeywords = (keywords) => {
  return request({
    url: "/search",
    params: {
      keywords
    },
  });
}