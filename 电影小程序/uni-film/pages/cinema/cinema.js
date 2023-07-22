import { cinema } from '../../services/cinema'
import { cmaIMG } from '../../utils/http'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    cinema: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    const res = await cinema(options.cmaId)
    let cinemaData = res.data[0]
    // 处理数据
    if (cinemaData.cmaImgs) {
      cinemaData.cmaImgs = cmaIMG + cinemaData.cmaImgs
    }
    if (cinemaData.cmaSepcial) {
      cinemaData.cmaSepcial = JSON.parse(cinemaData.cmaSepcial)
    }
    if (cinemaData.cmaService) {
      cinemaData.cmaService = JSON.parse(cinemaData.cmaService)
    }
    this.setData({ cinema: cinemaData })
  },
  call() {
    wx.makePhoneCall({
      phoneNumber: this.data.cinema.cmaPhone,
      fail: () =>
        wx.showToast({
          title: '需要您的授权',
          icon: 'error'
        })
    })
  }
})
