import { watchInfo } from '../../services/cinema'
import { filmIMG } from '../../utils/http'
Page({
  data: {
    film: null, //电影信息
    cinema: null, //影院信息
    watch: null, //座位
    filmIMG,
    selectList: [] //选座信息
  },
  // 读取电影信息，影院信息，座位数据
  async onLoad(options) {
    // console.log(options.wtId) //"202107300630423"
    let wtId = options.wtId
    const res = await watchInfo(wtId)
    res.data[0].wtCostSites = JSON.parse(res.data[0].wtCostSites)
    this.setData({ film: res.data[2], cinema: res.data[1], watch: res.data[0] })
  },
  // 选座
  selected(e) {
    //获取到点击的座位（排，列）
    let rows = e.currentTarget.dataset.rows
    let cols = e.currentTarget.dataset.cols
    //提取座位信息
    let site = this.data.watch.wtCostSites[rows].colums[cols]

    let isAdd = true //true要添加，false要删除
    //selectList已有的情况，需删除
    for (let i = 0; i < this.data.selectList.length; i++) {
      if (site.site_no === this.data.selectList[i].site_no) {
        this.data.selectList.splice(i, 1)
        isAdd = false
        this.data.watch.wtCostSites[rows].colums[cols].checked = false
        break
      }
    }
    if (isAdd) {
      this.data.watch.wtCostSites[rows].colums[cols].checked = true
      this.data.selectList.push(site)
    }
    this.setData({ selectList: this.data.selectList, watch: this.data.watch })
  },
  // 购买电影票
  pay() {
    //1
    /* wx.requestPayment({
      nonceStr: 'nonceStr',
      package: 'package',
      paySign: 'paySign',
      timeStamp: 'timeStamp',
    }) */
    //2. 请求我方服务器接口（无），跟新数据库的座位信息
    //3. 跳转到订单
    wx.setStorageSync('cinema', this.data.cinema)
    wx.setStorageSync('film', this.data.film)
    wx.setStorageSync('selectList', this.data.selectList)
    wx.setStorageSync('watch', this.data.watch)
    wx.reLaunch({
      url: '/pages/orders/orders'
    })
  }
})
