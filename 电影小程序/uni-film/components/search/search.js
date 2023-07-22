const app = getApp()
Component({
  options: {
    addGlobalClass: true
  },
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    list: ['泰坦尼克', '指环王：护戒使者', '我的小可爱'], //推荐
    cityList: ['上海', '北京', '深圳'],
    selectCity: '上海'
  },

  lifetimes: {
    attached: function () {
      //有搜索过，显示搜索过的关键字
      let keywords = app.globalData.keywords
      if (keywords) {
        this.setData({ list: [keywords] })
      }
    }
  },
  methods: {
    city() {
      //获取city数据==》wx.show...
      wx.showActionSheet({
        itemList: this.data.cityList,
        success: res => {
          this.setData({ selectCity: this.data.cityList[res.tapIndex] })
        }
      })
    }
  }
})
