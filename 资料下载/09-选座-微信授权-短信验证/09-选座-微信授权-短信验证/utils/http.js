//封装wx.request
//业务：promise风格、公共业务(统一处理错误|loading防闪烁|可访问不同服务器)

let timer = null;
let timeout = 200; //loading延时

let baseUrl = "http://101.132.109.42:8888"; //我方服务器基础地址

let indexIMG = baseUrl + "/index/"; //首页
let cmaIMG = baseUrl + "/cma_img/"; //影院
let filmIMG = baseUrl + "/film_avat/"; //电影
let actIMG = baseUrl + "/act_img/"; //演员
let custIMG = baseUrl + "/cust_avat/"; //头像

let fIMG = baseUrl + "/film_img/"; //电影宣传图片（剧照）
let attrIMG = baseUrl + "/attr_img/"; //影片属性图标

const errorHandler = (err) => {
  if (typeof err === "object") {
    wx.showToast({
      title: err.errMsg,
    });
  } else {
    wx.showToast({
      title: err,
    });
  }
};

const request = ({ url, data = {}, method = "get" }) =>
  new Promise((reslove, reject) => {
    //显示loading
    clearTimeout(timer);
    timer = setTimeout(
      () =>
        wx.showLoading({
          title: "挖呀挖",
        }),
      timeout
    );
    //读数据
    wx.request({
      url: url.includes("http") ? url : baseUrl + url, //需要考虑多服务器
      data,
      method,
      success: (res) => reslove(res),
      fail: (err) => errorHandler(err),
      complete: (res) => {
        //关闭loading
        wx.hideLoading();
        clearTimeout(timer);
        if (res.data === "Not Found") {
          errorHandler(res.data);
        }
      },
    });
  });

export {
  request,
  baseUrl,
  indexIMG,
  cmaIMG,
  filmIMG,
  actIMG,
  custIMG,
  fIMG,
  attrIMG,
};
