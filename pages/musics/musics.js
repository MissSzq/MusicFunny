// pages/music/music.js
var util = require("../utils/util.js");
var musicList = require("../../data/newmusics.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    recommend: "active",
    hot: "",
    search: "",
    musicList :{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(musicList)
    
  },

  onNavbar: function (event) {
    var musicData = event.target.dataset.navbar;
    switch (musicData) {
      case "recommend":
        this.setData({
          recommend: "active",
          hot: "",
          search: ""
        })

        break;
      case "hot":
        this.setData({
          recommend: "",
          hot: "active",
          search: ""
        })
        break;
      case "search":
        this.setData({
          recommend: "",
          hot: "",
          search: "active"
        })
        break;
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
      musicList: musicList
    })
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