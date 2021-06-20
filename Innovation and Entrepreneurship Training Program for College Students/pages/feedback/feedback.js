const db = wx.cloud.database();
const _ = db.command;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    noteMaxLen: 400,//备注最多字数
    content1: "",//姓名
    content2: "",//内容
    noteNowLen: 0,//备注当前字数
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
  bindTextAreaChange: function (e) {
    var that = this
    var value = e.detail.value, len = parseInt(value.length);
    if (len > that.data.noteMaxLen) return;
    that.setData({
      info: value,
      noteNowLen: len
    })
  },

  //如果确认提交就上传到数据库并清空表格
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
          db.collection('yijian').add({
            data: {
              title1: event.detail.value.title1,
              title2: event.detail.value.title2,
            }
          }).then(res => {
            that.setData({
              content1: '',
              content2: '',
              noteNowLen: 0,
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