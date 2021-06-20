// pages/itellyou/itellyou.js
var app = getApp()
Page({


  /**
   * 页面的初始数据
   */
  data: {
    nickname: "",
    condition1:false,
    condition2:true,
    word: {
      xph: "您好，亲爱的。",
      xry: "爷爷奶奶，你们高中照顾我三年，大学又给了我那么大的坚持，你们辛苦了，祝愿你们健康长寿。",
      nn: "爷爷奶奶，你们高中照顾我三年，大学又给了我那么大的坚持，你们辛苦了，祝愿你们健康长寿。",
      xhb: "亲爱的父亲，出现这句话说明一切正常。按钮起到了应该起到的作用。",
      whx: "亲爱的母亲，出现这句话说明一切正常。按钮起到了应该起到的作用。",
      whb: "舅舅您好，感谢您一直以来在我的学习上的关心和大力支持。祝愿事业稳步上升，一切顺利。",
      xf:"妗子您好，感谢您一直以来在我的学习上的关心和大力支持。祝愿我们祝愿弟弟妹妹都能取得应得的成就，家庭与事业都一切顺利。",
      wyr: "祝你高考取得理应取得的成绩！",
      zxf: "感谢姥姥姥爷对我的学习和生活的大力支持，祝愿你们健康长寿",
      cmy: "我忘了有没有告诉你这件事，一段时间后有个女生告诉我说你在刚到宿舍的时候用严肃的态度提醒室友不要“嘲笑（相信也没有人会恶意的笑）”我的口吃。这或许是理所当然的事情，互换位置我们可能都会这样做。只是我知道这件事（还有另一件）的时候正值各项计划不顺利，颇有种“没人爱我”的感受。因此受到了很强烈的震动。明明有那么多人默默的帮助和支持自己，怎么会有这样的想法呢。你们是真正的后盾，永远支持我去做出自己想要的选择。最后，再次向你致谢，虽然已经说不上几件具体的事情，但我不会忘记这些曾经发生过。",
      zfh: "我觉得吧其实我什么也不说，这才是最吼的。",
      zyh: "感谢你在过去的半个多月的时间里的辛苦，陪我做了这么一件“奇奇怪怪”的事情。但愿它能对你的生活产生积极的影响，且就因此可能产生的对于你的生活的打扰向你说声对不起。我一直认为任何朋友关系都应该能互相有积极的影响，在过去对我来说是如此。希望以后我也可以做到这一点。",
      qp: "亲爱的同志，感谢你一直以来给予我的支持和信任。祝愿大创顺利结束，以及在将来可预见的复杂环境下能做出最有利于自己的选择。",
      why: "亲爱的同志，感谢你一直以来为大创所做出的付出，以及对我的信任和支持。您辛苦了。",
      jsk:"亲爱的同志，谨向你致意，祝愿你在军营过得还好。我记得咱们去湖南那次在你立场坚定的制止了司机多绕路的行径。话说那种时候我的性格就是宁愿多走路也强硬不起来。所以还是挺佩服有你这样的人的。感谢你过去的关心。未来也是如此。",
      jg:"很遗憾，这里没有你的留言。可能是我没有预留，或者是某个错误导致的。请您到第二页反馈给我，我将为您解决。"
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },



  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function(res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
    }
    return {
      title: 'xiepeiheng',
      path: '/pages/itellyou/itellyou',
      imageUrl: '/images/sakamoto.png',
    }
  },


  onGotUserInfo: function(e) {

    var that = this;
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function(res) {
              that.data.nickname = res.userInfo.nickName;
            }
          })
          that.setData({
            condition1: that.data.condition1 = true,
            condition2: that.data.condition2 = false,
          })
        }
      }
    })
    if (e.detail.userInfo.nickName == "法国航空公司") {
      this.setData({
        count: this.data.word.xph,
      })
    }
    else if (e.detail.userInfo.nickName == "老来乐") {
      this.setData({
        count: this.data.word.xry,
      })
    }
    else if (e.detail.userInfo.nickName == "开心") {
      this.setData({
        count: this.data.word.nn,
      })
    }
    else if (e.detail.userInfo.nickName == "5945") {
      this.setData({
        count: this.data.word.xhb,
      })
    }
    else if (e.detail.userInfo.nickName == "夕颜含笑") {
      this.setData({
        count: this.data.word.whx,
      })
    }
    else if (e.detail.userInfo.nickName == "宝贝乐") {
      this.setData({
        count: this.data.word.whb,
      })
    }
    else if (e.detail.userInfo.nickName == "想") {
      this.setData({
        count: this.data.word.xf,
      })
    }
    else if (e.detail.userInfo.nickName == "wyr。。。") {
      this.setData({
        count: this.data.word.wyr,
      })
    }
    else if (e.detail.userInfo.nickName == "温馨") {
      this.setData({
        count: this.data.word.zxf,
      })
    }
    else if (e.detail.userInfo.nickName == "不知道诶") {
      this.setData({
        count: this.data.word.cmy,
      })
    }
    else if (e.detail.userInfo.nickName == "DOG BEAR") {
      this.setData({
        count: this.data.word.zfh,
      })
    }
    else if (e.detail.userInfo.nickName == "祖国的小蘑菇") {
      this.setData({
        count: this.data.word.zyh,
      })
    }
    else if (e.detail.userInfo.nickName == "纯白") {
      this.setData({
        count: this.data.word.qp,
      })
    }
    else if (e.detail.userInfo.nickName == "木有乐悠悠") {
      this.setData({
        count: this.data.word.why,
      })
    }
    else if (e.detail.userInfo.nickName == "无所谓") {
      this.setData({
        count: this.data.word.jsk,
      })
    }
    else {this.setData({
      count: this.data.word.jg,
    })
    }
    
  }

})