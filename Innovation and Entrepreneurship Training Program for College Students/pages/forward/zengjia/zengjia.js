// pages/forward/zengjia/zengjia.js
const db = wx.cloud.database();
const _ = db.command;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    copenid:"",
    cname: "",
    cphone:"",
    fplace:"",
    ftime:"",
    splace:"",
    stime:"",
    describe:"",
    money:"",

    jopenid:"",
    jname:"",
    jphone:"",
    jmessage:"",

    type1:false,
    type2:false,

    year:0,
    month:0,
    day:0,
    content:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var timestamp = Date.parse(new Date()); 
    var date = new Date(timestamp);  
    this.data.year =date.getFullYear();  
    this.data.month = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    this.data.day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate(); 
    this.setData({
      count1: this.data.year,
      count2: this.data.month,
      count3: this.data.day,
    })
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

  },
  bindDateChange1: function (e) {
    this.setData({
      ftime: e.detail.value
    })
  },
  bindDateChange2: function (e) {
    this.setData({
      stime: e.detail.value
    })
  },
  onSubmit: function (event) {
    var that = this;
    wx.showModal({
      title: '提示',
      content: '确认提交吗',
      success: function (res) {
        if (res.confirm) {
          wx.showLoading({
            title: '处理中',
            mask: true,
          })
          //这里是点击了确定以后
          db.collection('forward').add({
            data: {
              copenid: getApp().globalData.userInfo.openid,
              cname: event.detail.value.cname,
              cphone: event.detail.value.cphone,
              fplace: event.detail.value.fplace,
              ftime: that.data.ftime,
              splace: event.detail.value.splace,
              stime: that.data.stime,
              describe: event.detail.value.describe,
              money: event.detail.value.money,

              jopenid: "",
              jname: "",
              jphone: "",
              jmessage: "",

              type1: false,
              type2: false,
            }
          }).then(res => {
            that.setData({
              content: '',
            })
            wx.showToast({
              title: '提交成功',
              icon: 'success',
            })
          })
        }
      }
    })
  }
})