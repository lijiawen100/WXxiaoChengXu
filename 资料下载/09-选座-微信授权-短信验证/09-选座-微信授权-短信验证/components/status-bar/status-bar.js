// components/status-bar/status-bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    height:20,//iphoneX 44 iphoneXr 47 其他20
  },
  lifetimes:{
    attached(){
      this.setData({height:wx.getSystemInfoSync().statusBarHeight})
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
