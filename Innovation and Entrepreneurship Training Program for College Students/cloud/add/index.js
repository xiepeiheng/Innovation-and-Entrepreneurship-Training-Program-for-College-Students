// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
// 云函数入口函数
//where({_id: event.index})
exports.main = async(event, context) => {
  try {
    return await db.collection('forward').doc(event.index1).update({
      data: {
        jopenid: event.jopenid,
        jname: event.jname,
        jphone: event.jphone,
        jmessage: event.jmessage,
        type1: event.type1,
      }
    })
  } catch(e){
    console.error(e)
  }
  console.log(getApp().globalData.nimasile)
}