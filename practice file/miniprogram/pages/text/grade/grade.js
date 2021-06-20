const db = wx.cloud.database();
const grade = db.collection('grade');
const _ = db.command
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mark: '',
    index: '',
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


  
  onSubmit: function (event) {
    wx.showLoading({
      title: '处理中',
      mask: true,
    })
    grade.where({ name: event.detail.value.index }).get().then(res => {
      console.log(res)
      this.setData({
        mark: res.data
      })
    })
    wx.showToast({
      title: '加载成功',
      icon: 'success',
    })
  }
})