// pages/text/go/partc/partc.js
const db = wx.cloud.database();
const _ = db.command;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    radioItems1: [
      { name: '参観', value: '1' },
      { name: '検診', value: '2' },
      { name: '観測', value: '3' },
      { name: '点検', value: '4' },
    ],
    //第二题
    radioItems2: [
      { name: '前进后出', value: '1' },
      { name: '前出后进', value: '2' },
      { name: '前进前出', value: '3' },
      { name: '后进后出', value: '4' },
    ],
    //第三题
    radioItems3: [
      { name: '坂本', value: '1' },
      { name: '博士', value: '2' },
      { name: '云乃', value: '3' },
      { name: '佑子', value: '4' },
    ],
    //第四题
    radioItems4: [
      { name: '青岛', value: '1' },
      { name: '大连', value: '2' },
      { name: '上海', value: '3' },
      { name: '济南', value: '4' },
    ],
    //第五题
    radioItems5: [
      { name: '球球', value: '1' },
      { name: '肉肉', value: '2' },
      { name: '点点', value: '3' },
      { name: '乖乖', value: '4' },
    ],

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
    console.log(getApp().globalData.apart);
    console.log(getApp().globalData.b1);
    console.log(getApp().globalData.cpart);
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


  radioChange1: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);
    getApp().globalData.c1 = e.detail.value;
    var radioItems1 = this.data.radioItems1;
    for (var i = 0, len = radioItems1.length; i < len; ++i) {
      radioItems1[i].checked = radioItems1[i].value == e.detail.value;
    }
    this.setData({
      radioItems1: radioItems1
    });
  },
  //第二题
  radioChange2: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);
    getApp().globalData.c2 = e.detail.value;
    var radioItems2 = this.data.radioItems2;
    for (var i = 0, len = radioItems2.length; i < len; ++i) {
      radioItems2[i].checked = radioItems2[i].value == e.detail.value;
    }
    this.setData({
      radioItems2: radioItems2
    });
  },
  //第三题
  radioChange3: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);
    getApp().globalData.c3 = e.detail.value;
    var radioItems3 = this.data.radioItems3;
    for (var i = 0, len = radioItems3.length; i < len; ++i) {
      radioItems3[i].checked = radioItems3[i].value == e.detail.value;
    }
    this.setData({
      radioItems3: radioItems3
    });
  },
  //第四题
  radioChange4: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);
    getApp().globalData.c4 = e.detail.value;
    var radioItems4 = this.data.radioItems4;
    for (var i = 0, len = radioItems4.length; i < len; ++i) {
      radioItems4[i].checked = radioItems4[i].value == e.detail.value;
    }
    this.setData({
      radioItems4: radioItems4
    });
  },
  //第五题
  radioChange5: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);
    getApp().globalData.c5 = e.detail.value;
    var radioItems5 = this.data.radioItems5;
    for (var i = 0, len = radioItems5.length; i < len; ++i) {
      radioItems5[i].checked = radioItems5[i].value == e.detail.value;
    }
    this.setData({
      radioItems5: radioItems5
    });
  },



  onSubmit: function (event) {

    if (getApp().globalData.a1 == 1) { getApp().globalData.apart = getApp().globalData.apart + 10 };
    if (getApp().globalData.a2 == 4) { getApp().globalData.apart = getApp().globalData.apart + 10 };
    if (getApp().globalData.a3 == 4) { getApp().globalData.apart = getApp().globalData.apart + 10 };
    if (getApp().globalData.a4 == 1) { getApp().globalData.apart = getApp().globalData.apart + 10 };
    if (getApp().globalData.a5 == 4) { getApp().globalData.apart = getApp().globalData.apart + 10 };
    if (getApp().globalData.a6 == 1) { getApp().globalData.apart = getApp().globalData.apart + 10 };
    if (getApp().globalData.a7 == 1) { getApp().globalData.apart = getApp().globalData.apart + 10 };
    if (getApp().globalData.a8 == 3) { getApp().globalData.apart = getApp().globalData.apart + 10 };
    if (getApp().globalData.a9 == 3) { getApp().globalData.apart = getApp().globalData.apart + 10 };
    if (getApp().globalData.b1.length == null) { getApp().globalData.b1 = 0}
    else { getApp().globalData.b1 = getApp().globalData.b1.length}

    
    if (getApp().globalData.c1 == 3) { getApp().globalData.cpart = getApp().globalData.cpart + 1 };
    if (getApp().globalData.c2 == 2) { getApp().globalData.cpart = getApp().globalData.cpart + 1 };
    if (getApp().globalData.c3 == 1) { getApp().globalData.cpart = getApp().globalData.cpart + 1 };
    if (getApp().globalData.c4 == 2) { getApp().globalData.cpart = getApp().globalData.cpart + 1 };
    if (getApp().globalData.c5 == 2) { getApp().globalData.cpart = getApp().globalData.cpart + 1 };
    getApp().globalData.total = getApp().globalData.apart + getApp().globalData.b1 + getApp().globalData.cpart;
    








    wx.showModal({
      title: '提示',
      content: '确认结束作答吗',
      success: function (res) {
        if (res.confirm) {
          //这里是点击了确定以后
          wx.showLoading({
            title:'处理中',
            mask:true,
          })
          db.collection('grade').add({
            data: {
              name: getApp().globalData.name,
              total: getApp().globalData.total,
              apart: getApp().globalData.apart,
              cpart: getApp().globalData.cpart,
              a1: getApp().globalData.a1,
              a2: getApp().globalData.a2,
              a3: getApp().globalData.a3,
              a4: getApp().globalData.a4,
              a5: getApp().globalData.a5,
              a6: getApp().globalData.a6,
              a7: getApp().globalData.a7,
              a8: getApp().globalData.a8,
              a9: getApp().globalData.a9,
              b1: getApp().globalData.b1,
              c1: getApp().globalData.c1,
              c2: getApp().globalData.c2,
              c3: getApp().globalData.c3,
              c4: getApp().globalData.c4,
              c5: getApp().globalData.c5,
            }
          }).then(res => {
            wx.showToast({
              title: '提交成功',
              icon: 'success',
            })
            wx.reLaunch({
              url: '/pages/text/go/end/end',
            })



          })
          wx.showToast({
            title: '提交成功',
            icon: 'success',
          })
        }
      }
    })
  }







})