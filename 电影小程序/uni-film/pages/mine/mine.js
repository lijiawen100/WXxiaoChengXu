const app = getApp()
Page({
  data: {
    user: null
  },
  onLoad() {
    //获取全局用户信息
    const user = app.globalData.userInfo
    if (!user.hasAuthorize) {
      wx.redirectTo({
        url: '/pages/authorize/authorize'
      })
    } else {
      this.setData({ user })
    }
  },
  getPhoneNumber(e) {
    console.log('mine', e)
    // 个人版（不支持了）
    if (e.detail.errMsg === 'getPhoneNumber:fail no permission') {
      wx.navigateTo({
        url: '/pages/phone/phone'
      })
    }

    //企业版（管理员微信账号是企业账号）（允许）
    // updateUser({...app.globalData.userInfo,tel:e.detail.phone})
  }
})
