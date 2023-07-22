import { brandList, cinemas, hallList } from "../../services/cinema";
Page({
  data: {
    //院线
    brandList: [],
    showBrand: false, //菜单
    brandName: "院线", //选中的标题
    brandId: -1, //选中的id，条件

    //排序
    order: "排序",
    showOrder: false,

    //影厅
    hallList: [],
    showHall: false, //菜单
    specialName: "影厅", //确定选中的后标题
    specialId: -1, //选中的id，条件
    selectIndex: -1, //选中的影厅

    //影院列表数据
    cinemaList: [],
    page: 1, //页码
    rows: 6, //条数
    keywords: "", //搜索关键字
  },
  //点击院线
  async tapBrand() {
    //获取院线数据
    const { data } = await brandList();
    this.setData({ brandList: data });
    //显示院线菜单
    this.setData({ showBrand: true, showOrder: false, showHall: false });
  },

  //选中院线
  selectBrand(e) {
    //更新brandId，关闭模态框
    let index = e.currentTarget.dataset.index;
    if (index === -1) {
      this.setData({
        brandName: "院线",
        brandId: -1,
        showBrand: false,
        cinemaList: [],
        page: 1,
      });
    } else {
      this.setData({
        brandName: this.data.brandList[index].brandName,
        brandId: this.data.brandList[index].brandId,
        showBrand: false,
        cinemaList: [],
        page: 1,
        keywords: "",
      });
    }

    //获取符合条件的影院数据
    this.getCinemas();
  },

  //关闭模态框，不作为
  bindModal() {
    this.setData({ showBrand: false, showOrder: false, showHall: false });
  },

  //点击排序
  tapOrder() {
    this.setData({ showBrand: false, showOrder: true, showHall: false });
  },

  //选中排序
  selectOrder(e) {
    this.setData({
      order: e.currentTarget.dataset.val,
      showOrder: false,
      cinemaList: [],
      page: 1,
    });
    this.getCinemas();
  },

  //点击影厅
  async tapHall() {
    const { data } = await hallList();
    this.setData({ hallList: data });
    this.setData({ showBrand: false, showOrder: false, showHall: true });
  },
  //选中影厅
  selectHall(e) {
    let index = e.currentTarget.dataset.index;
    if (index === -1) {
      this.setData({
        selectIndex: -1,
      });
    } else {
      this.setData({
        selectIndex: index,
      });
    }
  },

  //确定影厅的选则
  submitHall() {
    if (this.data.selectIndex === -1) {
      this.setData({
        specialName: "影厅",
        specialId: -1,
        showHall: false,
        cinemaList: [],
        page: 1,
      });
    } else {
      this.setData({
        specialName: this.data.hallList[this.data.selectIndex].specialName,
        specialId: this.data.hallList[this.data.selectIndex].specialId,
        showHall: false,
        cinemaList: [],
        page: 1,
      });
    }
    this.getCinemas();
  },

  //进入页面时 && 搜索页跳转过来时（keywords）
  onLoad(options) {
    console.log("cinemas", options);
    let keywords = options.keywords || "";
    keywords && this.setData({ keywords });
    this.getCinemas();
  },

  //获取影院数据
  async getCinemas() {
    let { page, rows, brandId, specialId, keywords } = this.data;

    //转换排序参数
    let order = 1;
    if (this.data.order === "价格低") {
      order = 2;
    }

    //读数据
    const res = await cinemas({
      page,
      rows,
      brandId,
      order,
      specialId,
      keywords,
    });

    //考虑数据不足的情况
    if (res.data.length < this.data.rows) {
      this.setData({ page: -1 });
    }

    //处理服务返回的奇葩数据格式
    res.data.forEach((item, index) => {
      //地址长度控制
      if (item.cmaAddress.length > 20) {
        item.cmaAddress = item.cmaAddress.slice(0, 20) + "...";
      }

      //服务是string==》array
      item.cmaService = item.cmaService.replace(/\\/g, "&");
      item.cmaService = JSON.parse(item.cmaService);
    });

    //追加数据
    this.setData({ cinemaList: [...this.data.cinemaList, ...res.data] });
  },

  //下拉，重新抓取6条数据
  async onPullDownRefresh() {
    this.setData({ cinemaList: [], page: 1 });
    await this.getCinemas();
    wx.stopPullDownRefresh();
  },

  //触底，如果还有数据，就读
  onReachBottom() {
    if (this.data.page !== -1) {
      this.setData({ page: this.data.page + 1 });
      this.getCinemas();
    }
  },
});
