const db = wx.cloud.database();
const forward = db.collection('forward');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    jname:"",
    jphone:"",
    jmessage:"",
    jopenid:"",
    index:null,
    index1:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    this.data.index = e.title
    getApp().globalData.nimasile = e.title
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
  onSubmit: function (event) {
    var that= this;
    wx.showModal({
      title: '提示',
      content: '确认提交吗',
      success: function (res) {
        if (res.confirm) {
          wx.showLoading({
            title: '处理中',
            mask: true,
          })

          console.log(event.detail.value.jname)
          wx.cloud.callFunction({
            name:'add',
            data:{
              index1:that.data.index,
              jopenid: getApp().globalData.userInfo.openid,
              jname: event.detail.value.jname,
              jphone: event.detail.value.jphone,
              jmessage: event.detail.value.jmessage,
              type1: true,
            },
            success:function(res){
              wx.redirectTo({
                url: '/pages/delivery/tiaoxuan/tiaoxuan'
              })
              wx.showToast({
                title: '提交成功',
                icon: 'success',
              })
            }

          })

         
           

        }
      }
    })
  }
})