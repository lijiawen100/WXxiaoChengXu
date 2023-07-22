import moment from 'moment'
import { updateUser } from '../../services/user'
const app = getApp()
Page({
  async userAuthorize() {
    //授权 wx.getUserProfile
    try {
      //1.获取用户信息
      const { userInfo } = await wx.getUserProfile({
        desc: '用户完善会员资料'
      })
      console.log('mine', userInfo)
      //2. 合并到我方数据库，同步到app的userInfo
      let user = {
        ...app.globalData.userInfo,
        ...userInfo,
        hasAuthorize: true,
        authorizeTime: moment().format('YYYY-MM-DD HH:mm:ss')
      }
      await updateUser(user)
      app.globalData.userInfo = user
      //3. 跳转到之前（我的）
      wx.switchTab({
        url: '/pages/mine/mine'
      })
    } catch (error) {
      wx.showToast({
        title: '需要你的授权',
        icon: 'error'
      })
    }
  }
})
