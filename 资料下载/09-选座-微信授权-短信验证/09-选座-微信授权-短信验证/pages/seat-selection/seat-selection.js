import { filmIMG } from "../../utils/http";
import { watchInfo } from "../../services/cinema";
Page({
  data: {
    film: null, //电影信息
    cinema: null, //影院信息
    watch: null, //座位
    filmIMG,

    //选择座位的信息
    selectList: [], //[{},{}]
  },

  async onLoad(options) {
    console.log(options); //202107300630423
    const res = await watchInfo(options.wtId);
    res.data[0].wtCostSites = JSON.parse(res.data[0].wtCostSites);
    this.setData({
      watch: res.data[0],
      cinema: res.data[1],
      film: res.data[2],
    });
  },

  //选座
  select(e) {
    //获取到点击的座位（排，列）
    let row = e.currentTarget.dataset.row;
    let col = e.currentTarget.dataset.col;
    //提取座位信息
    const site = this.data.watch.wtCostSites[row].colums[col];
    console.log(site);

    let isAdd = true; //true要添加，false要删除

    //selectList已有的情况，需删除
    for (let i = 0; i < this.data.selectList.length; i++) {
      if (site.site_no === this.data.selectList[i].site_no) {
        this.data.selectList.splice(i, 1);

        this.data.watch.wtCostSites[row].colums[col].checked=false;
        isAdd = false;
        break;
      }
    }

    if (isAdd) {
      this.data.watch.wtCostSites[row].colums[col].checked=true;
      this.data.selectList.push(site);
    }

    this.setData({ selectList: this.data.selectList,watch:this.data.watch });
  },
  //支付
  pay() {
    //1
    /* wx.requestPayment({
      nonceStr: 'nonceStr',
      package: 'package',
      paySign: 'paySign',
      timeStamp: 'timeStamp',
    }) */
    //2. 请求我方服务器接口（无），跟新数据库的座位信息
    //3. 跳转到订单
  },
});
