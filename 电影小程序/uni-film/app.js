import { request } from './utils/http'
import { getUser } from './services/user'
App({
  globalData: {
    keywords: '', //搜索页留下的关键字
    film: null, //选中的电影
    userInfo: {} //用户信息（是否微信授权登录过）
  },
  async onLaunch() {
    //微信服务器：微信和用户账号数据 , 可以作为小程序用户账号使用，无需注册，只需授权登录
    //自有服务器： 微信用户数据 + 额外用户数据(订单，我的)要合并
    //需要判断是否授权登录过，把用户信息存入全局userInfo和我方服务器，给其他页面用

    //1.判断是否通过微信登录的小程序（避免用户伪装）
    //2.请求微信服务器,抓取微信服务器上的用户信息(openId)
    //3.作为参数请求我方服务器（有这个用户|没这个用户,就创建）
    //4. 写入userInfo 供其他页面使用

    // 1.调用接口获取登录凭证（code）
    const { code, errMsg } = await wx.login()
    if (!code) {
      console.log('异常登录', errMsg)
      return
    }
    console.log(code)

    // 2.通过凭证进而换取用户登录态信息(openId)
    const {
      data: { openid }
    } = await request({
      url: 'https://api.weixin.qq.com/sns/jscode2session',
      data: {
        appid: 'wxc548f450dbfe3acd', //你的小程序的appId
        secret: '88de4a5c021c0ed60550aeb6a8b7e045', //你小程序的秘钥
        js_code: code,
        grant_type: 'authorization_code'
      }
    })
    console.log(openid)

    // 3.作为参数请求我方服务器（有这个用户|没这个用户,就创建）
    const { data } = await getUser(openid)
    console.log(data)

    // 4.写入userInfo 供其他页面使用
    this.globalData.userInfo = data
  }
})
