// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    sweiperList: [
      {
        url: '/assets/img/01.jpg',
        name: '1'
      },
      {
        url: '/assets/img/02.jpg',
        name: '2'
      },
      {
        url: '/assets/img/03.jpg',
        name: '3'
      },
      {
        url: '/assets/img/04.jpg',
        name: '4'
      },
      {
        url: '/assets/img/05.jpg',
        name: '5'
      },
      {
        url: '/assets/img/06.jpg',
        name: '6'
      }
  ]
  },
  handleSearch() {
    wx.navigateTo({
      url: '../search/index'
    })
  }
})
