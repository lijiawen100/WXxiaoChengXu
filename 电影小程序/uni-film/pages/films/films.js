import { filmCate, filmRegion, films } from '../../services/film'
import { filmIMG } from '../../utils/http'
Page({
  data: {
    cateList: [], //类型
    regList: [], //地区
    yearList: [], //年份
    cateIndex: -1,
    regIndex: -1,
    yearIndex: -1,

    headerHeight: 0,
    filmList: [], //电影列表数据,
    page: 1,
    rows: 6,
    show: false //控制模态框状态
  },
  onLoad(options) {
    // 获取类型数据
    filmCate().then(res => this.setData({ cateList: res.data }))
    // 获取地区数据
    filmRegion().then(res => this.setData({ regList: res.data }))
    // 获取年份数据
    let d = new Date()
    let tmpArr = []
    for (let i = 2000; i <= d.getFullYear(); i++) {
      tmpArr.push(i)
    }
    this.setData({ yearList: tmpArr })

    // 获取电影列表数据
    this.getFilmList(options.keywords)
  },

  // 获取头部的高度
  onReady() {
    const query = wx.createSelectorQuery()
    query
      .select('#header')
      .boundingClientRect(res => this.setData({ headerHeight: res.height }))
      .exec()
  },

  // 点击过滤条title控制模态框
  showmodel() {
    this.setData({
      show: !this.data.show
    })
  },
  // 控制模态框
  showmodel2() {
    this.setData({
      show: !this.data.show,
      cateIndex: -1,
      regIndex: -1,
      yearIndex: -1
    })
  },

  // 选择类型
  selectCate(e) {
    this.setData({
      cateIndex: e.currentTarget.dataset.index
    })
  },
  // 选择地区
  selectReg(e) {
    this.setData({
      regIndex: e.currentTarget.dataset.index
    })
  },
  // 选择年份
  selectYear(e) {
    this.setData({
      yearIndex: e.currentTarget.dataset.index
    })
  },
  // 提交选择
  submit() {
    this.setData({ show: false, filmList: [], page: 1 })
    this.getFilmList()
  },
  // 下拉刷新
  async onPullDownRefresh() {
    this.setData({ page: 1, filmList: [] })
    await this.getFilmList()
    wx.stopPullDownRefresh()
  },

  // 触底加载新数据
  onReachBottom() {
    if (this.data.page !== -1) {
      this.setData({ page: this.data.page + 1 })
      this.getFilmList()
    }
  },
  // 获取电影列表数据
  async getFilmList(keywords = '') {
    // 处理参数
    let { page, rows } = this.data
    let cateId = this.data.cateIndex !== -1 ? this.data.cateList[this.data.cateIndex].cateId : -1
    let regionId = this.data.regIndex !== -1 ? this.data.regList[this.data.regIndex].filmReId : -1
    let year = this.data.yearIndex !== -1 ? this.data.yearList[this.data.yearIndex] : -1

    const res = await films({ page, rows, cateId, regionId, year, keywords })
    // 处理剩余数据不足一页的情况
    if (res.data.length < this.data.rows) {
      this.setData({ page: -1 })
    }
    // 处理数据
    res.data.forEach(item => {
      item.filmAvat = filmIMG + item.filmAvat
      item.filmDesc = item.filmDesc.slice(0, 13) + '...'
    })
    this.setData({ filmList: this.data.filmList.concat(res.data) })
  }
})
