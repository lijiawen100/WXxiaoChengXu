import { filmIMG } from "../../utils/http";
import { filmCinema, watchList } from "../../services/cinema";
let app = getApp();
Page({
  data: {
    film: app.globalData.film, //选择电影

    cinemaList: [], //支持放映的影院
    cinemaIndex: -1, //选择的影院索引，可控制模态框的状态

    //场次的数据
    watchList: [],

    filmIMG,
  },
  nothing() {},

  async onLoad() {
    //抓取当前电影信息
    this.setData({ film: app.globalData.film });
    //抓取支持当前电影的影院
    const res = await filmCinema(this.data.film.filmId);
    this.setData({ cinemaList: res.data });
  },

  //选择影院，查看场次
  async selectWatch(e) {
    let filmId = this.data.film.filmId;
    let cmaId = this.data.cinemaList[e.currentTarget.dataset.index].cmaId;
    const res = await watchList(filmId, cmaId);
    this.setData({
      watchList: res.data,
      cinemaIndex: e.currentTarget.dataset.index,
    });
  },

  //关闭模态框
  close() {
    this.setData({ cinemaIndex: -1 });
  },
});
