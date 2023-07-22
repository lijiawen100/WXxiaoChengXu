import { filmCate, filmRegion, films } from "../../services/film";
import { filmIMG } from "../../utils/http";
Page({
  data: {
    cateList: [], //类型
    regList: [], //地区
    yearList: [], //年份

    cateIndex: -1,
    regIndex: -1,
    yearIndex: -1,

    headerHeight: 0, //固定头部高度

    show: false, //modal状态

    filmList: [], //电影列表数据
    page: 1,
    rows: 6,
  },

  onReady() {
    const query = wx.createSelectorQuery();
    query
      .select("#header")
      .boundingClientRect((res) =>
        this.setData({
          headerHeight: res.height,
        })
      )
      .exec();
  },

  onLoad(options) {
    //获取过滤的数据(类型，地区，年份)
    filmCate().then((res) => this.setData({ cateList: res.data }));
    filmRegion().then((res) => this.setData({ regList: res.data }));

    //生成年份
    let d = new Date();
    let tmpArr = [];
    for (let i = 2000; i <= d.getFullYear(); i++) {
      tmpArr.push(i);
    }
    this.setData({ yearList: tmpArr });

    //获取电影列表数据
    this.getFilmList(options.keywords);
  },

  //切换模态框状态
  showModal() {
    this.setData({
      show: !this.data.show,
      cateIndex: -1,
      regIndex: -1,
      yearIndex: -1,
    });
  },

  //选择类型
  selectCate(e) {
    this.setData({ cateIndex: e.currentTarget.dataset.index });
  },
  //选择地区
  selectReg(e) {
    this.setData({ regIndex: e.currentTarget.dataset.index });
  },
  //选择年份
  selectYear(e) {
    this.setData({ yearIndex: e.currentTarget.dataset.index });
  },
  //提交选择
  submit() {
    this.setData({ show: false, filmList: [], page: 1 });
    this.getFilmList();
  },

  //获取电影数据
  async getFilmList(keywords = "") {
    //整理参数
    let { page, rows } = this.data;
    let cateId =
      this.data.cateIndex !== -1
        ? this.data.cateList[this.data.cateIndex].cateId
        : -1;

    let regionId =
      this.data.regIndex !== -1
        ? this.data.regList[this.data.regIndex].filmReId
        : -1;

    let year =
      this.data.yearIndex !== -1 ? this.data.yearList[this.data.yearIndex] : -1;

    const res = await films({ page, rows, cateId, regionId, year, keywords });

    //处理不足一页的情况
    if (res.data.length < this.data.rows) {
      this.setData({ page: -1 });
    }

    res.data.forEach((item) => {
      item.filmAvat = filmIMG + item.filmAvat;
      item.filmDesc = item.filmDesc.slice(0, 13) + "...";
    });

    this.setData({ filmList: this.data.filmList.concat(res.data) });
  },

  async onPullDownRefresh() {
    this.setData({ page: 1, filmList: [] });
    await this.getFilmList();
    wx.stopPullDownRefresh();
  },

  onReachBottom() {
    if (this.data.page !== -1) {
      this.setData({ page: this.data.page + 1 });
      this.getFilmList();
    }
  },
});
