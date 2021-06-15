import request from '../../network/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cloneRecordList: [],  //搜索框的数据
    recordList: [],  //搜索历史记录数据
    hotSearchList: [],  //热搜数据
    musicList: [], //搜索列表
    addMusicList: [], //列表总数据
    offset : 1, //分页
    musicId: '' //音乐ID
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    request({
      url: '/search/hot'
    }).then(res=> {
      const hotSearchList = res.data.result.hots
      this.setData({
        hotSearchList : hotSearchList
      })
    }).catch(err => {
      return
    })
  },
  hotList (e) {
    this.questMusicList()
    this.setData({
      recordList : e.detail.params,
      searchInputList: e.detail.cloneRecordList
    })
  },
  questMusicList () {
    request({
      url: `/cloudsearch?keywords=${this.data.cloneRecordList}&offset=${this.data.offset}`
    }).then(res => {
      const musicList = res.data.result.songs
      let addMusicList = this.data.addMusicList.concat(musicList)
      this.setData({
        musicList : musicList,
        addMusicList : addMusicList
      })
      console.log(this.data.musicList);
    })
  },
  hasList(e) {
    this.setData ({
      cloneRecordList : e.detail.hasList
    })
    if (!this.data.cloneRecordList.length) {
      this.setData ({
        musicList : []
      })
    }
  },
  upLoading() {
    console.log('加载更多');
  },
  onReachBottom: function()  {
    this.data.offset++
    this.questMusicList()
  }
})