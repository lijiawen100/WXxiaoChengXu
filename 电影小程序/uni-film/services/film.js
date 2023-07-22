import { request } from '../utils/http'

//电影地区
const filmRegion = () => request({ url: '/film/region' })

//电影列表
const films = ({ page, rows, cateId, regionId, year, keywords }) =>
  request({
    url: '/film/list',
    data: { page, rows, cateId, regionId, year, keywords }
  })

//电影详情
const film = filmId => request({ url: '/film/info', data: { filmId } })

//评论列表
const comments = ({ filmId, page, rows }) => request({ url: '/cmmt/list', data: { filmId, page, rows } })

//电影类型
const filmCate = () => request({ url: '/film/cate' })

export { filmRegion, films, film, comments, filmCate }
