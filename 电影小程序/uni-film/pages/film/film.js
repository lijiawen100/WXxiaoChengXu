import { comments, film } from '../../services/film'
import { filmIMG, actIMG, custIMG, fIMG, attrIMG } from '../../utils/http'
const app = getApp()
Page({
  data: {
    film: null, //电影详情

    // 评论数据
    commentList: [],
    page: 1, //-1代表数据不足
    rows: 6,

    // 图片服务器基础链接
    filmIMG, //电影
    actIMG, //演员
    custIMG, //头像
    fIMG, //电影宣传图片（剧照）
    attrIMG, //影片属性图标

    showDesc: false //简介展开状态
  },
  async onLoad(options) {
    // 获取电影详情数据
    const filmId = options.filmId
    const res = await film(filmId)
    // 处理数据
    // 演员
    if (res.data[0].filmActors) {
      res.data[0].filmActors = JSON.parse(res.data[0].filmActors)
    }
    // 电影属性
    if (res.data[0].filmAttribute) {
      res.data[0].filmAttribute = JSON.parse(res.data[0].filmAttribute)
    }
    // 剧照
    if (res.data[0].filmImgs) {
      res.data[0].filmImgs = JSON.parse(res.data[0].filmImgs)
    }
    this.setData({ film: res.data[0] })
    // 获取评论数据
    this.getComments()
  },
  // 获取评论数据
  async getComments() {
    let { page, rows } = this.data
    let filmId = this.data.film.filmId
    const res = await comments({ filmId, page, rows })
    // 数据不足
    if (res.data.length < rows) {
      this.setData({ page: -1 })
    }
    this.setData({ commentList: this.data.commentList.concat(res.data) })
  },
  // 下拉加载新数据
  onReachBottom() {
    if (this.data.page !== -1) {
      this.setData({ page: this.data.page + 1 })
      this.getComments()
    }
  },
  // 控制电影描述的展开状态
  controShowDesc() {
    this.setData({ showDesc: !this.data.showDesc })
  },
  // 特惠购票
  topay() {
    app.globalData.film = this.data.film
    wx.navigateTo({
      url: '/pages/ticketing-cinema/ticketing-cinema'
    })
  },
  // 预览电影高清图
  showImage(e) {
    let urls = []
    this.data.film.filmImgs.forEach(item => {
      urls.push(this.data.fIMG + item.img_url)
    })
    let current = urls[e.currentTarget.dataset.index]
    wx.previewImage({
      urls, // 需要预览的图片http链接列表
      current // 当前显示图片的http链接
    })
  }
})
