// components/search-list/index.js
import request from '../../network/index'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    musicList: {
      type: Array,
      default: () => []
    },
  },
  

  /**
   * 组件的初始数据
   */
  data: {
    auth: [], //歌曲作者数据
    musicList: [], //搜索列表
    musicId: [], //歌曲ID
    musicUrl: '', //歌曲Url
    musicImage: '' //封面图片
  },

  /**
   * 组件的方法列表
   */
  methods: {
    hanldePlayVedio (e) {
      let valueImage = encodeURIComponent(e.currentTarget.dataset.image);
      let id = e.currentTarget.dataset.id
      let index = e.currentTarget.dataset.index
      let valueId = encodeURIComponent(id)
      this.data.musicImage = e.currentTarget.dataset.image
      console.log(e);
      console.log(index, '789789');
      request ({
        url: `/song/url?id=${id}`
      }).then (res => {
       let musicUrl =  res.data.data.map(ele => {
          return ele.url
        });
      let valueUrl = encodeURIComponent(musicUrl)
        wx.navigateTo({
          url: `/pages/playMusic/index?Url=${valueUrl}&image=${valueImage}&id=${valueId}&index=${index}`,
        });
      }).catch (err => {
        return
      })
    }
  },
})
