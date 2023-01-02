# React18实战之云音乐项目

> 如果觉得不错，或者对你有帮助，点一个star~ cyan0714

## 灵感来自

[coderwhy/hy-react-web-music](https://github.com/coderwhy/hy-react-web-music)

[Binaryify/NeteaseCloudMusicApi](https://github.com/Binaryify/NeteaseCloudMusicApi)

## 项目简介

* 该项目是使用 React18 + Hooks + Redux Toolkit + React Router v6 编写的云音乐PC Web项目
* 项目中的样式代码大部分来自[coderwhy/hy-react-web-music](https://github.com/coderwhy/hy-react-web-music)
* 项目已部署到阿里云服务器[http://119.23.214.219:80](http://119.23.214.219:80), 欢迎访问~

## 目前已完成的功能：

推荐页面：

* 轮播图
* 热门推荐
* 新碟上架
* 榜单
* 等等

![推荐页面](https://raw.githubusercontent.com/cyan0714/cyan-react-music-pc/master/src/assets/imgs/readme/recommend1.png)

![推荐页面](https://raw.githubusercontent.com/cyan0714/cyan-react-music-pc/master/src/assets/imgs/readme/recommend2.png)

歌曲播放：

* 可以点击榜单中的歌曲进行播放；
* 事实上其他页面只要将歌曲的 id 传入到 redux 中就可以，整个逻辑已经打通；
* 做了歌曲的各种控制（暂停、播放、上一首、下一首、进度改变）；
* 做了播放循序切换：顺序播放、随机播放、单曲循环；
* 做了歌词的解析、展示、滚动；

![歌曲播放](https://raw.githubusercontent.com/cyan0714/cyan-react-music-pc/master/src/assets/imgs/readme/playlist.png)

歌手页面：

* 各种歌手分类
* 歌手字母分类、对应歌手展示；

![歌手页面](https://raw.githubusercontent.com/cyan0714/cyan-react-music-pc/master/src/assets/imgs/readme/artist.png)

新碟上架页面：

* 热门新碟；
* 全部新碟、分页展示；

![新碟上架页面](https://raw.githubusercontent.com/cyan0714/cyan-react-music-pc/master/src/assets/imgs/readme/album.png)

歌曲播放页面：

* 歌曲搜索
* 歌词展示
* 相似歌曲
* 包含这首歌的歌单
* 最新评论

![歌曲播放页面](https://raw.githubusercontent.com/cyan0714/cyan-react-music-pc/master/src/assets/imgs/readme/player-page.png)

我的音乐页面：

* 支持扫码登录
* 我创建的歌单
* 我收藏的歌单

![我的音乐页面](https://raw.githubusercontent.com/cyan0714/cyan-react-music-pc/master/src/assets/imgs/readme/my-created-list.png)

## 项目规范
* 1.文件夹、文件名称统一小写、多个单词以连接符（-）连接；
* 2.JavaScript 变量名称采用小驼峰标识，常量全部使用大写字母，组件采用大驼峰；
* 3.CSS采用普通 CSS 和 styled-component 结合来编写（全局采用普通 CSS、局部采用 styled-component）;
* 4.整个项目不再使用 class 组件，统一使用函数式组件，并且全面使用 Hooks；
* 5.所有的函数式组件，为了避免不必要的渲染，全部使用 memo 进行包裹；
* 6.组件内部的状态，使用 useState、useReducer；业务数据 90% 都放在redux中管理；
* 7.redux 代码规范如下：
  * redux 的封装不需要从头开始写，直接使用官方的 redux-toolkit
  * 每个模块就是一个 slice，最后通过 configureStore 进行合并；
  * 异步请求代码使用 redux-toolkit 的 createAsyncThunk；
  * redux 直接采用 redux hooks 方式编写，不再使用 connect；
* 9.网络请求采用 axios
  * 对 axios 进行二次封装；
  * 各个模块请求的 api 都会放到对应的请求文件中单独管理；
* 10.项目使用 AntDesign
  * 为了方便，部分地方会用到 AntDesign 中的组件；
* 其他规范在项目中根据实际情况决定和编写；

## 项目运行
**用前须知**：由于接口服务器还未部署，本项目的接口来源于[Binaryify/NeteaseCloudMusicApi](https://github.com/Binaryify/NeteaseCloudMusicApi)的接口，要想使用接口，应先 clone 该项目，安装好依赖后，在终端输入 node app.js，服务就可以启动了。

clone项目：

```
git clone https://github.com/cyan0714/cyan-react-music-pc.git
```

安装项目依赖：

```shell
npm install || yarn install || pnpm install
```

项目运行：

```shell
npm start || yarn start || pnpm start
```



