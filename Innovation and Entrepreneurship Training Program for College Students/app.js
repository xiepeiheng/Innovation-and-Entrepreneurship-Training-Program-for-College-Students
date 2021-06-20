//app.js
App({
  
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function (e) {
    
    wx.cloud.init({
      traceUser: true,
    })
  
    const userInfo = wx.getStorageSync('userInfo') 
    if(userInfo){
      this.globalData.userInfo = userInfo
    }
  },

  
  globalData:{
    userInfo:null,
    nimasile:null
  }

})

