// pages/text/go/parta/parta.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //第一题
    radioItems1: [
      { name: '芥末', value: '1'},
      { name: '茄子', value: '2'},
      { name: '南瓜', value: '3'},
      { name: '芹菜', value: '4'},
    ],
    //第二题
    radioItems2: [
      { name: '绿色', value: '1' },
      { name: '红色', value: '2' },
      { name: '黄色', value: '3' },
      { name: '紫色', value: '4' },
    ],
    //第三题
    radioItems3: [
      { name: '积木', value: '1' },
      { name: '模型', value: '2' },
      { name: '旅游', value: '3' },
      { name: '听音乐', value: '4' },
    ],
    //第四题
    radioItems4: [
      { name: '英语', value: '1' },
      { name: '数学', value: '2' },
      { name: '物理', value: '3' },
      { name: '数据结构', value: '4' },
    ],
    //第五题
    radioItems5: [
      { name: '知乎', value: '1' },
      { name: '王者荣耀', value: '2' },
      { name: '哔哩哔哩', value: '3' },
      { name: '抖音', value: '4' },
    ],
    //第六题
    radioItems6: [
      { name: '钢琴', value: '1' },
      { name: '笛子', value: '2' },
      { name: '葫芦丝', value: '3' },
      { name: '吉他', value: '4' },
    ],
    //第七题
    radioItems7: [
      { name: '猫', value: '1' },
      { name: '狗', value: '2' },
      { name: '猫头鹰', value: '3' },
      { name: '鱼类', value: '4' },
    ],
    //第八题
    radioItems8: [
      { name: '手足口病', value: '1' },
      { name: '长期低烧', value: '2' },
      { name: '装病', value: '3' },
      { name: '重感冒', value: '4' },
    ],
    //第九题
    radioItems9: [
      { name: 'A', value: '1' },
      { name: 'B', value: '2' },
      { name: 'C', value: '3' },
      { name: 'D', value: '4' },
    ],
    inputValue:'',

  },
  
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
    getApp().globalData.name = e.detail.value
    console.log(getApp().globalData.name)
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

  //第一题
  radioChange1: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);
    getApp().globalData.a1 = e.detail.value;
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
    getApp().globalData.a2 = e.detail.value;
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
    getApp().globalData.a3 = e.detail.value;
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
    getApp().globalData.a4 = e.detail.value;
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
    getApp().globalData.a5 = e.detail.value;
    var radioItems5 = this.data.radioItems5;
    for (var i = 0, len = radioItems5.length; i < len; ++i) {
      radioItems5[i].checked = radioItems5[i].value == e.detail.value;
    }
    this.setData({
      radioItems5: radioItems5
    });
  },
  //第六题
  radioChange6: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);
    getApp().globalData.a6 = e.detail.value;
    var radioItems6 = this.data.radioItems6;
    for (var i = 0, len = radioItems6.length; i < len; ++i) {
      radioItems6[i].checked = radioItems6[i].value == e.detail.value;
    }
    this.setData({
      radioItems6: radioItems6
    });
  },
  //第七题
  radioChange7: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);
    getApp().globalData.a7 = e.detail.value;
    var radioItems7 = this.data.radioItems7;
    for (var i = 0, len = radioItems7.length; i < len; ++i) {
      radioItems7[i].checked = radioItems7[i].value == e.detail.value;
    }
    this.setData({
      radioItems7: radioItems7
    });
  },
  //第八题
  radioChange8: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);
    getApp().globalData.a8 = e.detail.value;
    var radioItems8 = this.data.radioItems8;
    for (var i = 0, len = radioItems8.length; i < len; ++i) {
      radioItems8[i].checked = radioItems8[i].value == e.detail.value;
    }
    this.setData({
      radioItems8: radioItems8
    });
  },
  //第九题
  radioChange9: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);
    getApp().globalData.a9 = e.detail.value;
    var radioItems9 = this.data.radioItems9;
    for (var i = 0, len = radioItems9.length; i < len; ++i) {
      radioItems9[i].checked = radioItems9[i].value == e.detail.value;
    }
    this.setData({
      radioItems9: radioItems9
    });
  },






})