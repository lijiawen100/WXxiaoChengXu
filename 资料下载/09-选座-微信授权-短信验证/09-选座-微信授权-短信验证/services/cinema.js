import { request } from "../utils/http";

/**
 *
 * 影厅类型列表
 * @params: 无
 * returns: Internal Server Error || [{id,specialId,specialName,specialSort}]
 */

const hallList = () => request({ url: "/hall/list" });

//影院列表
const cinemas = ({ page, rows, brandId, order, specialId, keywords }) =>
  request({
    url: "/cinema/list",
    data: { page, rows, brandId, order, specialId, keywords },
  });

// 电影在放映厅的场次
const watchList = (filmId, cmaId) =>
  request({ url: "/watch/list", data: { filmId, cmaId } });

//影院详情
const cinema = (cmaId) => request({ url: "/cinema/info", data: { cmaId } });

//院线品牌列表
const brandList = () => request({ url: "/brand/list" });

//支持当前电影的放映厅
const filmCinema = (filmId) =>
  request({ url: "/cinema/filmcinema", data: { filmId } });

//当前放映厅座位价格
const watchInfo = (wtId) => request({ url: "/watch/info", data: { wtId } });

export {
  hallList,
  cinemas,
  watchList,
  cinema,
  brandList,
  filmCinema,
  watchInfo,
};
