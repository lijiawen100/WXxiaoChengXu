import { hallList, brandList, cinemas } from '../../services/cinema'
Page({
  data: {
    // 院线
    showBrand: false,
    brandList: [],
    brandId: -1,
    brandName: '院线',

    // 排序
    showOrder: false,
    orderName: '排序',

    // 影厅
    showHall: false, //控制显隐
    selectIndex: -1, //选中影厅的下标
    specialName: '影厅',
    hallList: [],
    specialId: -1, //选中的id，条件

    // 影院列表
    cinemaList: [],
    page: 1, //页码
    rows: 6, //条数
    keywords: '' //搜索关键字
  },
  // 点击院线
  async tapBrand() {
    // 读取院线数据
    const { data } = await brandList()
    this.setData({
      brandList: data
    }),
      //显示院线菜单
      this.setData({
        showBrand: true,
        showHall: false,
        showOrder: false
      })
  },
  // 选中院线
  selectBrand(e) {
    //更新brandId，关闭模态框
    let index = e.currentTarget.dataset.index
    if (index === -1) {
      this.setData({
        brandName: '院线',
        brandId: -1,
        showBrand: false,
        cinemaList: [],
        page: 1
      })
    } else {
      this.setData({
        brandName: this.data.brandList[index].brandName,
        brandId: this.data.brandList[index].brandId,
        showBrand: false,
        cinemaList: [],
        page: 1,
        keywords: ''
      })
    }
    // 获取符合条件的影院数据
    this.getCinemas()
  },

  // 点击排序
  tapOrder() {
    this.setData({
      showOrder: true,
      showBrand: false,
      showHall: false
    })
  },
  // 选中排序
  selectOrder(e) {
    let index = e.currentTarget.dataset.index
    this.setData({
      orderName: index,
      showOrder: false,
      cinemaList: [],
      page: 1
    })
    this.getCinemas()
  },

  // 点击影厅
  async tapHall() {
    const { data } = await hallList()
    this.setData({
      hallList: data
    }),
      this.setData({ showHall: true, showBrand: false, showOrder: false })
  },
  //选中影厅
  selectHall(e) {
    let index = e.currentTarget.dataset.index
    if (index === -1) {
      this.setData({
        selectIndex: -1
      })
    } else {
      this.setData({
        selectIndex: index
      })
    }
  },
  //确定影厅的选则
  submitHall() {
    if (this.data.selectIndex === -1) {
      this.setData({
        specialName: '影厅',
        showHall: false,
        specialId: -1,
        cinemaList: [],
        page: 1
      })
    } else {
      this.setData({
        specialName: this.data.hallList[this.data.selectIndex].specialName,
        showHall: false,
        specialId: this.data.hallList[this.data.selectIndex].specialId,
        cinemaList: [],
        page: 1
      })
    }
    this.getCinemas()
  },
  // 控制模态框显隐
  showmodel() {
    this.setData({
      showHall: false,
      showBrand: false,
      showOrder: false
    })
  },

  //进入页面时 && 搜索页跳转过来时（keywords）
  async onLoad(options) {
    // console.log('cinemas', options)
    let keywords = options.keywords || ''
    keywords && this.setData({ keywords })
    this.getCinemas()
  },
  //获取影院数据
  async getCinemas() {
    let { page, rows, brandId, specialId, keywords } = this.data
    //转换排序参数
    let order = 1
    if (this.data.orderName === '价格低') {
      order = 2
    }
    // 读数据
    let res = await cinemas({ page, rows, brandId, order, specialId, keywords })

    // 读取的数据不足
    if (res.data.length < this.data.rows) {
      this.setData({ page: -1 })
    }

    //处理服务返回的奇葩数据格式
    res.data.forEach((item, index) => {
      //地址长度控制
      if (item.cmaAddress.length > 20) {
        item.cmaAddress = item.cmaAddress.slice(0, 20) + '...'
      }
      //服务是string==》array
      //处理第一条奇葩数据：\"1.3m（不含）以下2D\\3D免费，需由1名成人陪同，1.3m（含）以上可凭学生证购买学生票\"
      item.cmaService = item.cmaService.replace(/\\/g, '&')
      // 第二条奇葩数据：\"凭\"一张当日影票+五彩城会员卡\"可兑换1小时停车券一张，每人每天最多兑换两张（停车位在商场B2层）\"
      item.cmaService = item.cmaService.replace('"一张当日影票+五彩城会员卡"', '《一张当日影票+五彩城会员卡》')
      item.cmaService = JSON.parse(item.cmaService)
    })
    //追加数据
    this.setData({
      cinemaList: [...this.data.cinemaList, ...res.data]
    })
  },

  //下拉，重新抓取6条数据
  async onPullDownRefresh() {
    this.setData({
      cinemaList: [],
      page: 1
    }),
      await this.getCinemas()
    wx.stopPullDownRefresh()
  },
  // 触底，如果还有数据，就读
  onReachBottom() {
    if (this.data.page !== -1) {
      this.setData({ page: this.data.page + 1 })
      this.getCinemas()
    }
  }
})
