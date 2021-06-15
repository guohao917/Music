// pages/playMusic/index.js
import request from "../../network/index"
import {formatTime} from "../../utils/util"
Page({
  /**
   * 页面的初始数据
   */
  data: {
    musicUrl : '',
    image: '',
    id: '',
    commonList: [], //评论信息
    commentTime: '', //评论时间
    currentIndex : '',  //点击的列表
    commentTimeList: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this
    let Url = decodeURIComponent(options.Url)
    let image = decodeURIComponent(options.image)
    let id =  decodeURIComponent(options.id)
    let index = options.index
    console.log(Url);
    console.log(image);
    console.log(id);
    console.log(index);
    this.setData ({
      musicUrl : Url,
      image: image,
      id : id,
      currentIndex: index
    })
    request ({
      url: `/comment/new?type=0&id=${id}&sortType=2&pageSize=50`
    }).then(res => {
      let index = this.data.currentIndex
      this.setData ({
        commonList : res.data.data.comments,
        commentTime: res.data.data.comments[index].time
      })
      console.log(this.data.commentTime, '222555');
      let myDate = new Date(this.data.commentTime)
      let time =  formatTime(myDate);
      this.setData ({
        commentTimeList : time
      })
      // console.log(index, 99999);
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady (e) {
     this.audioContext = wx.createAudioContext('myAudio');
     this.audioContext.setSrc(this.data.musicUrl)
     this.audioContext.play()
  },
  handlePalyAudio () {
    this.audioContext.play()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})