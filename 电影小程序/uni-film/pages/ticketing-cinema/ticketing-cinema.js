import { filmCinema, watchList } from '../../services/cinema'
import { filmIMG } from '../../utils/http'
const app = getApp()
Page({
  data: {
    // 电影数据
    film: app.globalData.film, //选择电影

    cinemaList: [], // 支持放映的影院数据
    cinemaIndex: -1, //选择的影院索引，可控制模态框的状态
    // 场次数据
    watchList: [],

    filmIMG
  },

  async onLoad() {
    // 抓取电影数据
    this.setData({ film: app.globalData.film })
    // 抓取支持放映电影的影院数据
    let filmId = this.data.film.filmId
    const res = await filmCinema(filmId)
    this.setData({ cinemaList: res.data })
  },
  //选择影院，查看场次
  async selectWatch(e) {
    let filmId = this.data.film.filmId
    let cmaId = this.data.cinemaList[e.currentTarget.dataset.index].cmaId
    const res = await watchList(filmId, cmaId)
    this.setData({ watchList: res.data, cinemaIndex: e.currentTarget.dataset.index })
  },
  nothing() {},
  // 关闭模态框
  close() {
    this.setData({ cinemaIndex: -1 })
  }
})
