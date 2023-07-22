const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    keywords: '', //搜索关键字,需要和全局app的keywords同步
    record: [], //搜索历史记录，需要和手机缓存同步
    //选项
    classify: [
      { cid: 1, name: '电影', page: 'films' },
      { cid: 2, name: '影人', page: 'films' },
      { cid: 3, name: '影院', page: 'cinemas' },
      { cid: 4, name: '活动', page: 'cinemas' }
    ],
    classifyIndex: 0 //当前激活的选项索引
  },

  /**
   * 生命周期函数--监听页面加载
   */

  //进入搜索页面时，获取上一次的搜索关键字和之前所有的搜索记录
  onLoad() {
    this.setData({ keywords: app.globalData.keywords })
    if (wx.getStorageSync('record')) {
      this.setData({ record: wx.getStorageSync('record') })
    }
  },
  //获取输入框的值，设置搜索关键字
  setKeywords(e) {
    this.setData({ keywords: e.detail.value })
  },
  //选项激活状态的修改
  setClassifyIndex(e) {
    this.setData({ classifyIndex: e.currentTarget.dataset.index })
  },
  //从记录选择关键字，修改keywords
  setKeywordsFromRecord(e) {
    let index = e.currentTarget.dataset.index
    this.setData({ keywords: this.data.record[index] })
  },

  // 搜索业务
  submit() {
    //输入框不为空
    if (this.data.keywords !== '') {
      //把keywords 添加到record,record记录同步到手机缓存
      if (this.data.record.indexOf(this.data.keywords) === -1) {
        //不重复的情况下，才追加到record
        this.data.record.push(this.data.keywords)
        wx.setStorageSync('record', this.data.record)
      }
    }
    // 再把输入框的值与全局数据keywords同步
    app.globalData.keywords = this.data.keywords
    //跳转到对应页面，传递数据，让其完成显示
    let page = this.data.classify[this.data.classifyIndex].page
    wx.reLaunch({
      url: `/pages/${page}/${page}?keywords=${this.data.keywords}`
    })
  },
  // //清空记录
  clear() {
    this.setData({ record: [] })
    wx.removeStorageSync('record')
  }
})
