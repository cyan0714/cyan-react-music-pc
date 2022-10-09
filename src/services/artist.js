import request from './axios';

// 可选参数 :
// limit : 返回数量 , 默认为 30
// offset : 偏移数量，用于分页 , 如 : 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0 initial: 按首字母索引查找参数,如 /artist/list?type=1&area=96&initial=b 返回内容将以 name 字段开头为 b 或者拼音开头为 b 为顺序排列, 热门传-1,#传 0

// type 取值:
// -1:全部
// 1:男歌手
// 2:女歌手
// 3:乐队

// area 取值:
// -1:全部
// 7华语
// 96欧美
// 8:日本
// 16韩国
// 0:其他

// 接口地址 : /artist/list
// 调用例子 : /artist/list?type=1&area=96&initial=b /artist/list?type=2&area=2&initial=b

export function getArtistList({ area, type, initial }) {
  let url = "";
  let params = {}

  if (area === -1 && type === 1) { // 推荐歌手
    url = "/top/artists"
    params = {limit: 100}
  } else {
    url = "/artist/list"
    if (area === -1) {
      params = {limit: 100, cat: 5001} // 入驻歌手
    } else {
      params = { // 华语、欧美、韩国、日本、其他歌手
        type,
        area,
        initial,
        limit: 100
      }
    }
  }

  return request({
    url,
    params
  })
}

