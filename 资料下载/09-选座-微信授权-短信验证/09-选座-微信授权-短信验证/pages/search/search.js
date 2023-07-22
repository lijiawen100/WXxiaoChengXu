let app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    //选项
    classify: [
      { cid: 1, name: "电影", page: "films" },
      { cid: 2, name: "影人", page: "films" },
      { cid: 3, name: "影院", page: "cinemas" },
      { cid: 4, name: "活动", page: "cinemas" },
    ],
    classifyIndex: 0, //当前激活的选项索引
    record: [], //搜索历史记录，需要和手机缓存同步
    keywords: "", //搜索关键字,需要和全局app的keywords同步
  },

  //获取输入框的值，设置搜索关键字
  setKeyWords(e) {
    this.setData({ keywords: e.detail.value });
  },

  //选项激活状态的修改
  selectClassify(e) {
    this.setData({
      classifyIndex: e.currentTarget.dataset.index,
    });
  },

  //从记录选择关键字，修改keywords
  selectKeywordsFromRecord(e) {
    this.setData({ keywords: this.data.record[e.currentTarget.dataset.index] });
  },

  //进入搜索页面时，获取上一次的搜索关键字和之前所有的搜索记录
  onLoad() {
    this.setData({ keywords: app.globalData.keywords });
    if (wx.getStorageSync("record")) {
      this.setData({ record: wx.getStorageSync("record") });
    }
  },

  //清空记录
  clearRecord() {
    this.setData({ record: [] });
    wx.removeStorageSync("record");
  },

  //搜索业务
  submit() {
    //输入框不为空
    if (this.data.keywords !== "") {
      //把keywords 添加到record,record记录同步到手机缓存
      if (this.data.record.indexOf(this.data.keywords) === -1) {
        //不重复的情况下，才追加到record
        this.data.record.push(this.data.keywords);
        wx.setStorageSync("record", this.data.record);
      }
      //keywords同步到app
      app.globalData.keywords = this.data.keywords;
      //跳转到对应页面，传递数据，让其完成显示

      let page = this.data.classify[this.data.classifyIndex].page;
      wx.reLaunch({
        url: `/pages/${page}/${page}?keywords=${this.data.keywords}`,
      });
    }
  },
});
