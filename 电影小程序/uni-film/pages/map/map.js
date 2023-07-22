const QQMap = require('../../utils/qqmap-wx-jssdk')
const qqmap = new QQMap({
  key: '63IBZ-NS3WG-SJAQ2-QAA4S-LBEKT-LDBBC' //前置条件创建的秘钥
})

Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 经纬度
    lng: null,
    lat: null,
    // 标记点地址
    markers: [],
    // 文字地址
    address: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // console.log(options.cmaAddress)
    // 需求：将地址转化为经纬度
    qqmap.geocoder({
      address: options.cmaAddress,
      success: res => {
        // console.log('qqmap res', res)
        this.setData({
          lng: res.result.location.lng,
          lat: res.result.location.lat,
          address: options.cmaAddress,
          markers: [
            {
              id: 0,
              longitude: res.result.location.lng,
              latitude: res.result.location.lat,
              iconPath: '../../images/mark.png',
              width: 40,
              height: 40
            }
          ]
        })
      }
    })
  },
  gotomap() {
    let key = '63IBZ-NS3WG-SJAQ2-QAA4S-LBEKT-LDBBC' //使用在腾讯位置服务申请的key
    let referer = '喵喵3012' //调用插件的app的名称
    let endPoint = JSON.stringify({
      //终点
      name: this.data.address,
      latitude: this.data.lat,
      longitude: this.data.lng
    })
    wx.navigateTo({
      url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint
    })
  }
})
