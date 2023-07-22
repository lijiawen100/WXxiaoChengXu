import { updateUser } from '../../services/user'

const app = getApp()
let regx = /^1[3-9]\d{9}/
Page({
  tel: null, //电话
  data: {
    code: null //验证码
  },

  setTel(e) {
    this.tel = e.detail.value //自定义
  },
  // 获取验证码
  async getYzm() {
    console.log(this.tel)
    // 1.校验手机号的合法性
    // 2.//2. 把手机号作为参数==》发送接口请求==》第三方短信服务器接口（电信、移动、联通）
    // 3.//3. 第三方短信服务器会: 下发含有验证码的短信到手机,在把验证码返回给小程序

    // 1
    if (regx.test(this.tel)) {
      // 2
      // const {code} = await request({url:'/付费的地方短信接口',data:{key:this.tel}})
      // 3假的短信接口返回值（为什么是假，因为穷)
      let str = '0123456789'
      let resStr = ''
      for (let i = 0; i < 6; i++) {
        let index = parseInt(Math.random() * str.length)
        resStr += str[index]
      }
      const code = resStr
      const err = 0
      this.setData({ code })

      if (err === 0) {
        wx.showToast({
          title: '发送成功',
          icon: 'success'
        })
      } else {
        wx.showToast({
          title: '发送失败',
          icon: 'error'
        })
      }
    } else {
      wx.showToast({
        title: '手机号有误',
        icon: 'error'
      })
    }
  },
  async formSubmit(e) {
    console.log(e)
    const { tel, yzm } = e.detail.value
    //1.校验用户输入的验证码和手机上的验证码是否一致
    if (tel && regx.test(tel) && yzm === this.data.code) {
      //2. 手机号码入库 && 同步到全局(globalData.userInfo)
      let user = { ...app.globalData.userInfo, tel }
      const { data } = await updateUser(user)
      console.log(data) //我服务器接口问题，tel没写入
      app.globalData.userInfo = user
      // 3.跳转我的
      wx.reLaunch({
        url: '/pages/mine/mine'
      })
    } else {
      wx.showToast({
        title: '手机号和验证码有误',
        icon: 'error'
      })
    }
  }
})
