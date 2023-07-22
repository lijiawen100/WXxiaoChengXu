import { filmIMG } from '../../utils/http'
Page({
  data: {
    cinema: null,
    film: null,
    selectList: null,
    watch: null,
    filmIMG
  },
  onLoad() {
    const cinema = wx.getStorageSync('cinema')
    const film = wx.getStorageSync('film')
    const selectList = wx.getStorageSync('selectList')
    const watch = wx.getStorageSync('watch')

    this.setData({ cinema, film, selectList, watch })
  },
  delorder() {
    wx.clearStorage()
    const cinema = wx.getStorageSync('cinema')
    const film = wx.getStorageSync('film')
    const selectList = wx.getStorageSync('selectList')
    const watch = wx.getStorageSync('watch')
    this.setData({ cinema, film, selectList, watch, ordernum: this.data.ordernum + 1 })
  }
})
