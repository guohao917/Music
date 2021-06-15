// components/leader-board/leaderBoard.js
import request from '../../network/index.js'
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    boardList:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  created() {
    request({
      url: '/toplist/detail'
    }).then(res => {
      const boardList = res.data.list.filter(item => 
        item.name == '飙升榜' ||
        item.name == '新歌榜' ||
        item.name == '原创榜' || 
        item.name =='热歌榜');
        this.setData({
          boardList : boardList
        })
    })
  }
})
