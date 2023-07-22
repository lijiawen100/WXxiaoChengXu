import { filmIMG, actIMG, attrIMG, fIMG, custIMG } from "../../utils/http";
import { film, comments } from "../../services/film";
let app = getApp();
Page({
  data: {
    film: null, //电影详情

    //评论数据
    commentList: [],
    page: 1, //-1数据不足
    rows: 6,

    //图片服务器基础链接
    fIMG,
    actIMG,
    filmIMG,
    custIMG,
    attrIMG,

    showDesc: false, //简介展开状态
  },

  async onLoad(options) {
    //获取电影详情数据
    const res = await film(options.filmId);
    //处理数据
    //演员
    if (res.data[0].filmActors) {
      res.data[0].filmActors = JSON.parse(res.data[0].filmActors);
    }
    //剧照
    if (res.data[0].filmImgs) {
      res.data[0].filmImgs = JSON.parse(res.data[0].filmImgs);
    }
    //影片属性
    if (res.data[0].filmAttribute) {
      res.data[0].filmAttribute = JSON.parse(res.data[0].filmAttribute);
    }
    this.setData({ film: res.data[0] });

    //获取评论数据
    this.getCommentList();
  },

  async getCommentList() {
    let { page, rows } = this.data;
    let filmId = this.data.film.filmId;
    const res = await comments({ filmId, page, rows });

    if (res.data.length < rows) {
      this.setData({ page: -1 });
    }
    this.setData({ commentList: this.data.commentList.concat(res.data) });
  },

  onReachBottom() {
    if (this.data.page !== -1) {
      this.setData({ page: this.data.page + 1 });
      this.getCommentList();
    }
  },

  //控制电影描述的展开状态
  controlDesc() {
    this.setData({ showDesc: !this.data.showDesc });
  },

  //满屏查看高清图
  showImage(e) {
    let urls = [];
    this.data.film.filmImgs.forEach((item) =>
      urls.push(this.data.fIMG + item.img_url)
    );
    let current = urls[e.currentTarget.dataset.index];
    wx.previewImage({
      urls,
      current,
    });
  },

  toPay() {
    app.globalData.film = this.data.film;
    wx.navigateTo({
      url: "/pages/ticketing-cinema/ticketing-cinema",
    });
  },
});
