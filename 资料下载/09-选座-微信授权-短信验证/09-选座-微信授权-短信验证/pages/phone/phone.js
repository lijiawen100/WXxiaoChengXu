import { updateUser } from "../../services/user";
// import { request } from "../../utils/http";

let regx = /^1[3456789]\d{9}/;
let app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  tel: null, //自定义属性
  code: null, //验证码

  setTel(e) {
    this.tel = e.detail.value; //自定义
  },

  async getYzm() {
    console.log(this.tel);
    //1.校验手机号的合法性
    //2. 把手机号作为参数==》发送接口请求==》第三方短信服务器接口（电信、移动、联通）
    //3. 第三方短信服务器会: 下发含有验证码的短信到手机,在把验证码返回给小程序

    //1
    if (regx.test(this.tel)) {
      //2
      // const {code} = await request({url:'/付费的地方短信接口',data:{key:this.tel}})

      //假的短信接口返回值（为什么是假，因为穷)
      const err = 0;
      const code = "31552";

      this.code = code;

      if (err === 0) {
        wx.showToast({
          title: "发送成功",
          icon: "success",
        });
      } else {
        wx.showToast({
          title: "发送失败",
          icon: "error",
        });
      }
    } else {
      wx.showToast({
        title: "手机号有误",
        icon: "error",
      });
    }
  },

  async formSubmit(e) {
    console.log(e);
    //1.校验用户输入的验证码和手机上的验证码是否一致
    let { tel, yzm } = e.detail.value;
    if (tel && regx.test(tel) && yzm === this.code) {
      //2. 手机号码入库 && 同步到全局(globalData.userInfo)
      let user = { ...app.globalData.userInfo, tel };
      const { data } = await updateUser(user);
      console.log(data); //我服务器接口问题，tel没写入
      app.globalData.userInfo = user;
      //3. 跳转我的
      wx.reLaunch({
        url: "/pages/mine/mine",
      });
    } else {
      wx.showToast({
        title: "验证码手机号有误",
        icon: "error",
      });
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {},
});
