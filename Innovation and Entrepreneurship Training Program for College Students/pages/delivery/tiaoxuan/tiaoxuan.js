// pages/delivery/tiaoxuan/tiaoxuan.js
const db = wx.cloud.database();
const forward = db.collection('forward');
const _ = db.command
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mark:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.showLoading({
      title: '处理中',
      mask: true,
    })
    forward.where(_.and([
      { copenid: _.neq(getApp().globalData.userInfo.openid)},
      { type1: false},
      { type2: false}
    ])).get().then(res => {
      this.setData({
        mark: res.data,
      })
    })
    wx.showToast({
      title: '加载成功',
      icon: 'success',
    })
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
    wx.showLoading({
      title: '处理中',
      mask: true,
    })
    forward.where(_.and([
      { copenid: _.neq(getApp().globalData.userInfo.openid) },
      { type1: false },
      { type2: false }
    ])).get().then(res => {
      this.setData({
        mark: res.data,
      })
    })
    wx.showToast({
      title: '加载成功',
      icon: 'success',
    })
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

  },

})