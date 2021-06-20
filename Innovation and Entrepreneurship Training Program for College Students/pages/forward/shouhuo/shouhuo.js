const db = wx.cloud.database();
const forward = db.collection('forward');
const _ = db.command
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mark:null,
    index:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {

    this.data.index = e.title
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
      { _id: this.data.index },
      { type1: true },
      { type2: false }
    ])).get().then(res => {
      this.setData({
        mark: res.data,
      })
      console.log(this.data.mark)
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
  submit:function(){
    var that = this;
    wx.showModal({
      title: '提示',
      content: '确认收货吗',
      success: function (res) {
        if (res.confirm) {
          wx.showLoading({
            title: '处理中',
            mask: true,
          })

          //这里是点击了确定以后
          forward.where({
            _id: that.data.index
          }).update({
            data: {
               type2: true,
            }
          }).then(res => {
            wx.redirectTo({
              url: '/pages/forward/jinxing/jinxing'
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