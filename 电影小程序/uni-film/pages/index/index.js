import { index } from '../../services/index'
import { indexIMG } from '../../utils/http'
Page({
  data: {
    swiperList: [],
    hotList: [],
    readyList: [],
    commData: [],
    headerHeight: 0,
    indexIMG: indexIMG,
    isShow: false
  },
  async onLoad() {
    const res = await index()
    this.setData(res)
  },
  onReady() {
    const query = wx.createSelectorQuery()
    query.select('#header').boundingClientRect()
    query.exec(res => this.setData({ headerHeight: res[0].height }))
  },
  onPageScroll({ scrollTop }) {
    if (scrollTop > 300) {
      this.setData({ isShow: true })
    } else {
      this.setData({ isShow: false })
    }
  },
  gotop() {
    wx.pageScrollTo({ scrollTop: 0, duration: 300 })
  }
})
