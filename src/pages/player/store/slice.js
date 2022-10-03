import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  playList: [
    {
      name: '有何不可',
      id: 167876,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 5771,
          name: '许嵩',
          tns: [],
          alias: [],
        },
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: '600902000007916021',
      fee: 8,
      v: 49,
      crbt: null,
      cf: '',
      al: {
        id: 16953,
        name: '自定义',
        picUrl:
          'https://p1.music.126.net/Md3RLH0fe2a_3dMDnfqoQg==/18590542604286213.jpg',
        tns: [],
        pic_str: '18590542604286213',
        pic: 18590542604286212,
      },
      dt: 241840,
      h: {
        br: 320000,
        fid: 0,
        size: 9675799,
        vd: -21099,
      },
      m: {
        br: 192000,
        fid: 0,
        size: 5805497,
        vd: -18400,
      },
      l: {
        br: 128000,
        fid: 0,
        size: 3870346,
        vd: -16900,
      },
      a: null,
      cd: '1',
      no: 3,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 2,
      s_id: 0,
      mark: 8192,
      originCoverType: 0,
      single: 0,
      noCopyrightRcmd: null,
      mv: 0,
      mst: 9,
      cp: 14026,
      rtype: 0,
      rurl: null,
      publishTime: 1231516800000,
    },
    {
      name: '雅俗共赏',
      id: 411214279,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 5771,
          name: '许嵩',
          tns: [],
          alias: [],
        },
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: null,
      fee: 8,
      v: 31,
      crbt: null,
      cf: '',
      al: {
        id: 34749138,
        name: '青年晚报',
        picUrl:
          'https://p1.music.126.net/Wcs2dbukFx3TUWkRuxVCpw==/3431575794705764.jpg',
        tns: [],
        pic: 3431575794705764,
      },
      dt: 249621,
      h: {
        br: 320000,
        fid: 0,
        size: 9987177,
        vd: -22200,
      },
      m: {
        br: 192000,
        fid: 0,
        size: 5992323,
        vd: -19600,
      },
      l: {
        br: 128000,
        fid: 0,
        size: 3994896,
        vd: -17800,
      },
      a: null,
      cd: '1',
      no: 2,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 8192,
      originCoverType: 0,
      single: 0,
      noCopyrightRcmd: null,
      mv: 5302271,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 14026,
      publishTime: 1461723397683,
    },
    {
      "name": "乌鸦",
      "id": 1842784921,
      "pst": 0,
      "t": 0,
      "ar": [
          {
              "id": 5771,
              "name": "许嵩",
              "tns": [],
              "alias": []
          }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 12,
      "crbt": null,
      "cf": "",
      "al": {
          "id": 126996669,
          "name": "呼吸之野",
          "picUrl": "https://p1.music.126.net/EepVxZ_7Z0qAiW_UYcC7EA==/109951165954048759.jpg",
          "tns": [],
          "pic_str": "109951165954048759",
          "pic": 109951165954048750
      },
      "dt": 329130,
      "h": {
          "br": 320001,
          "fid": 0,
          "size": 13167848,
          "vd": -45292,
          "sr": 44100
      },
      "m": {
          "br": 192001,
          "fid": 0,
          "size": 7900726,
          "vd": -42671,
          "sr": 44100
      },
      "l": {
          "br": 128001,
          "fid": 0,
          "size": 5267165,
          "vd": -40958,
          "sr": 44100
      },
      "sq": {
          "br": 1475353,
          "fid": 0,
          "size": 60697996,
          "vd": -45289,
          "sr": 44100
      },
      "hr": null,
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 1,
      "s_id": 0,
      "mark": 8192,
      "originCoverType": 1,
      "originSongSimpleData": null,
      "tagPicList": null,
      "resourceState": true,
      "version": 12,
      "songJumpInfo": null,
      "entertainmentTags": null,
      "awardTags": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 22036,
      "mv": 14286362,
      "publishTime": 1620921600000
  }
  ],
  currentSong: {
    "name": "有何不可",
    "id": 167876,
    "pst": 0,
    "t": 0,
    "ar": [
      {
        "id": 5771,
        "name": "许嵩",
        "tns": [],
        "alias": []
      }
    ],
    "alia": [],
    "pop": 100,
    "st": 0,
    "rt": "600902000007916021",
    "fee": 8,
    "v": 49,
    "crbt": null,
    "cf": "",
    "al": {
      "id": 16953,
      "name": "自定义",
      "picUrl": "https://p2.music.126.net/Md3RLH0fe2a_3dMDnfqoQg==/18590542604286213.jpg",
      "tns": [],
      "pic_str": "18590542604286213",
      "pic": 18590542604286212
    },
    "dt": 241840,
    "h": {
      "br": 320000,
      "fid": 0,
      "size": 9675799,
      "vd": -21099
    },
    "m": {
      "br": 192000,
      "fid": 0,
      "size": 5805497,
      "vd": -18400
    },
    "l": {
      "br": 128000,
      "fid": 0,
      "size": 3870346,
      "vd": -16900
    },
    "a": null,
    "cd": "1",
    "no": 3,
    "rtUrl": null,
    "ftype": 0,
    "rtUrls": [],
    "djId": 0,
    "copyright": 2,
    "s_id": 0,
    "mark": 8192,
    "originCoverType": 0,
    "single": 0,
    "noCopyrightRcmd": null,
    "mv": 0,
    "rtype": 0,
    "rurl": null,
    "mst": 9,
    "cp": 14026,
    "publishTime": 1231516800000
  },
  lyrics: [],
  currentLyricIndex: -1,
  playSequence: 0, // 0 顺序播放 1 随机播放 2 单曲循环
  currentSongIndex: [],
  simiPlaylist: [],
  simiSongs: [],
}
export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setCurrentSong(state, action) {
      state.currentSong = action.payload
    },
    setPlayList(state, action) {
      state.playList = action.payload
    },
    setLyrics(state, action) {
      state.lyrics = action.payload
    },
    setCurrentLyricIndex(state, action) {
      state.currentLyricIndex = action.payload
    },
    setPlaySequence(state, action) {
      state.playSequence = action.payload
    },
    setCurrentSongIndex(state, action) {
      state.currentSongIndex = action.payload
    },
    setSimiPlayList(state, action) {
      state.simiPlaylist = action.payload
    },
    setSimiSongs(state, action) {
      state.simiSongs = action.payload
    }
  },
})

export const {
  setCurrentSong,
  setPlayList,
  setLyrics,
  setCurrentLyricIndex,
  setPlaySequence,
  setCurrentSongIndex,
  setSimiPlayList,
  setSimiSongs,
} = playerSlice.actions
