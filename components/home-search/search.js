// components/home-search/search.js
import request from '../../network/index'
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
    cloneList: [], //判断是否显示搜索列表关键字
    cloneRecordList: [],  //搜索关键字
    recordList: [],   //历史记录
    musicList: []   //搜索返回列表
  },
  /**
   * 组件的方法列表
   */
  methods: {
    bindconfirm(e) {
      this.setData({
        cloneRecordList : e.detail.value,
        recordList : this.data.recordList
      })
      if (this.data.cloneRecordList) {
        this.data.recordList.push(this.data.cloneRecordList)
      }
      this.triggerEvent('hotList',
        {params: this.data.recordList,
        cloneRecordList:this.data.cloneRecordList},{})
    },
    bindinput (e) {
      this.setData ({
        cloneList : e.detail.value
      })
      this.triggerEvent('hasRecordList',{hasList:this.data.cloneList}, {})
    },
    musicList (e) {
      this.setData ({
        musicList : e.detail.value
      })
      console.log(this.data.music,'hhh');
    }
  }
})
