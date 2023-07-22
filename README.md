# 猫眼电影小程序

## 真机测试效果图预览

<div style="display:flex;flex-wrap:wrap;justify-content:space-around">
    <img src="D:\千锋前端22期\3阶段\专题17：小程序实战\day09-项目-选座-微信授权-短信验证\项目笔记\images\首页.jpg" style="zoom:25%;"/>
    <img src="D:\千锋前端22期\3阶段\专题17：小程序实战\day09-项目-选座-微信授权-短信验证\项目笔记\images\Screenshot_20230722_151221_com.tencent.mm.jpg" style="zoom:25%;" />
    <img src="D:\千锋前端22期\3阶段\专题17：小程序实战\day09-项目-选座-微信授权-短信验证\项目笔记\images\Screenshot_20230722_151310_com.tencent.mm.jpg" style="zoom:25%;" />
    <img src="D:\千锋前端22期\3阶段\专题17：小程序实战\day09-项目-选座-微信授权-短信验证\项目笔记\images\Screenshot_20230722_151643_com.tencent.mm.jpg" style="zoom:25%;" />
    <img src="D:\千锋前端22期\3阶段\专题17：小程序实战\day09-项目-选座-微信授权-短信验证\项目笔记\images\Screenshot_20230722_151318_com.tencent.mm.jpg" style="zoom:25%;" />
    <img src="D:\千锋前端22期\3阶段\专题17：小程序实战\day09-项目-选座-微信授权-短信验证\项目笔记\images\Screenshot_20230722_151326_com.tencent.mm.jpg" style="zoom:25%;" />
    <img src="D:\千锋前端22期\3阶段\专题17：小程序实战\day09-项目-选座-微信授权-短信验证\项目笔记\images\Screenshot_20230722_151353_com.tencent.mm.jpg" style="zoom:25%;" />
    <img src="D:\千锋前端22期\3阶段\专题17：小程序实战\day09-项目-选座-微信授权-短信验证\项目笔记\images\Screenshot_20230722_151402_com.tencent.mm.jpg" style="zoom:25%;" />
    <img src="D:\千锋前端22期\3阶段\专题17：小程序实战\day09-项目-选座-微信授权-短信验证\项目笔记\images\Screenshot_20230722_151417_com.tencent.mm.jpg" style="zoom:25%;" />
    <img src="D:\千锋前端22期\3阶段\专题17：小程序实战\day09-项目-选座-微信授权-短信验证\项目笔记\images\Screenshot_20230722_151424_com.tencent.mm.jpg" style="zoom:25%;" />
    <img src="D:\千锋前端22期\3阶段\专题17：小程序实战\day09-项目-选座-微信授权-短信验证\项目笔记\images\Screenshot_20230722_151435_com.tencent.mm.jpg" style="zoom:25%;" />
    <img src="D:\千锋前端22期\3阶段\专题17：小程序实战\day09-项目-选座-微信授权-短信验证\项目笔记\images\Screenshot_20230722_151447_com.tencent.mm.jpg" style="zoom:25%;" />
    <img src="D:\千锋前端22期\3阶段\专题17：小程序实战\day09-项目-选座-微信授权-短信验证\项目笔记\images\Screenshot_20230722_151456_com.tencent.mm.jpg" style="zoom:25%;" />
    <img src="D:\千锋前端22期\3阶段\专题17：小程序实战\day09-项目-选座-微信授权-短信验证\项目笔记\images\Screenshot_20230722_151517_com.tencent.mm.jpg" style="zoom:25%;" />
    <img src="D:\千锋前端22期\3阶段\专题17：小程序实战\day09-项目-选座-微信授权-短信验证\项目笔记\images\Screenshot_20230722_135224_com.tencent.mm.jpg" style="zoom:25%;" />
    <img src="D:\千锋前端22期\3阶段\专题17：小程序实战\day09-项目-选座-微信授权-短信验证\项目笔记\images\Screenshot_20230722_151632_com.tencent.mm.jpg" style="zoom:25%;" /></div>


## 1.app全局配置

### app.json主程配置

```json
//1.先配置页面路由
//2.window窗口配置
//3.tabBar底部导航栏配置
//4."lazyCodeLoading": "requiredComponents"an'xu
{
  "pages": [
    "pages/index/index",
    "pages/cinemas/cinemas",
    "pages/cinema/cinema",
    "pages/films/films",
    "pages/orders/orders",
    "pages/mine/mine",
    "pages/search/search",
    "pages/map/map",
    "pages/film/film",
    "pages/ticketing-cinema/ticketing-cinema",
    "pages/seat-selection/seat-selection",
    "pages/authorize/authorize",
    "pages/phone/phone"
  ],
  "window": {
    "backgroundTextStyle": "light",
    "navigationBarBackgroundColor": "#e22d2c",
    "navigationBarTitleText": "XX电影",
    "navigationBarTextStyle": "white"
  },
  "tabBar": {
    "color": "#9a9a9a",
    "selectedColor": "#e22d2c",
    "list": [
      {
        "pagePath": "pages/index/index",
        "text": "首页",
        "iconPath": "images/index.png",
        "selectedIconPath": "images/index-active.png"
      },
      {
        "pagePath": "pages/cinemas/cinemas",
        "text": "影院",
        "iconPath": "images/cinema.png",
        "selectedIconPath": "images/cinema-active.png"
      },
      {
        "pagePath": "pages/films/films",
        "text": "电影",
        "iconPath": "images/film.png",
        "selectedIconPath": "images/film-active.png"
      },
      {
        "pagePath": "pages/orders/orders",
        "text": "订单",
        "iconPath": "images/order.png",
        "selectedIconPath": "images/order-active.png"
      },
      {
        "pagePath": "pages/mine/mine",
        "text": "我的",
        "iconPath": "images/mine.png",
        "selectedIconPath": "images/mine-active.png"
      }
    ]
  },
  "style": "v2",
  "sitemapLocation": "sitemap.json",
  "lazyCodeLoading": "requiredComponents"
}
```

### app.wxss全局样式

```css
/* 全局样式 colorUI */

/* 文字颜色 */
.c-e22 {
  color: #e22d2c;
}
.c-333 {
  color: #333;
}
.c-999 {
  color: #999;
}
.c-fff {
  color: #fff;
}
.c-daa {
  color: #daa000;
}
.c-659 {
  color: #6599fe;
}

/* 文字大小 */
.fs-25 {
  font-size: 25rpx;
}
.fs-27 {
  font-size: 27rpx;
}
.fs-30 {
  font-size: 30rpx;
}
.fs-35 {
  font-size: 35rpx;
}
.fs-40 {
  font-size: 40rpx;
}
.fs-50 {
  font-size: 50rpx;
}

/* 文字加强 */
.fw {
  font-weight: bold;
}
.fw-200 {
  font-weight: 200;
}

/* 背景颜色 */
.bg-e22 {
  background-color: #e22d2c;
}
.bg-efe {
  background-color: #efefef;
}
.bg-fff {
  background-color: #fff;
}
.bg-659 {
  background-color: #6599fe;
}
.bg-daa {
  background-color: #daa000;
}

/* 圆角 */
.br-5 {
  border-radius: 5rpx;
}
.br-10 {
  border-radius: 10rpx;
}
.br-15 {
  border-radius: 15rpx;
}
.br-20 {
  border-radius: 20rpx;
}
.br-30 {
  border-radius: 30rpx;
}
.br-40 {
  border-radius: 40rpx;
}
.br-circ {
  border-radius: 50%;
}

/* 外边距 */
.m-10 {
  margin: 10rpx;
}
.ml-10 {
  margin-left: 10rpx;
}
.mt-10 {
  margin-top: 10rpx;
}
.mb-10 {
  margin-bottom: 10rpx;
}
.mr-10 {
  margin-right: 10rpx;
}

.m-20 {
  margin: 20rpx;
}
.ml-20 {
  margin-left: 20rpx;
}
.mr-20 {
  margin-right: 20rpx;
}
.mt-20 {
  margin-top: 20rpx;
}
.mb-20 {
  margin-bottom: 20rpx;
}

/* 内边距 */
.p-10 {
  padding: 10rpx;
}
.pl-10 {
  padding-left: 10rpx;
}
.pr-10 {
  padding-right: 10rpx;
}
.pt-10 {
  padding-top: 10rpx;
}
.pb-10 {
  padding-bottom: 10rpx;
}
.p-20 {
  padding: 20rpx;
}
.pl-20 {
  padding-left: 20rpx;
}
.pr-20 {
  padding-right: 20rpx;
}
.pt-20 {
  padding-top: 20rpx;
}
.pb-20 {
  padding-bottom: 20rpx;
}

.p-5-15 {
  padding: 5rpx 15rpx;
}
.p-10-25 {
  padding: 10rpx 25rpx;
}
.p-5-30 {
  padding: 5rpx 30rpx;
}

/* 文字居中 */
.t-center {
  text-align: center;
}
.t-right {
  text-align: right;
}

/* 一像素高清边框 */
.bd-b-1 {
  position: relative;
}
.bd-b-1::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #999;
  transform: scaleY(0.5);
}

.bd-r-1 {
  position: relative;
}
.bd-r-1::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 1px;
  height: 100%;
  background-color: #999;
  transform: scaleX(0.5);
}
```

## 2.封装微信请求工具wx.request

### utils/http.js

```js
// 封装wx.request
// 业务：promise风格、公共业务（统一处理错误|loading防闪烁|可访问不同服务器）
let timer = null
let timeout = 200 //loading延时
let baseUrl = 'http://101.132.109.42:8888' //我方服务器基础地址
let indexIMG = baseUrl + '/index/' //首页
let cmaIMG = baseUrl + '/cma_img/' //影院
let filmIMG = baseUrl + '/film_avat/' //电影
let actIMG = baseUrl + '/act_img/' //演员
let custIMG = baseUrl + '/cust_avat/' //头像
let fIMG = baseUrl + '/film_img/' //电影宣传图片（剧照）
let attrIMG = baseUrl + '/attr_img/' //影片属性图标

// 错误处理函数
const errorHandler = err => {
  if (typeof err === 'object') {
    wx.showToast({
      title: err.errMsg
    })
  } else {
    wx.showToast({
      title: err
    })
  }
}

const request = ({ url, data = {}, method = 'get' }) =>
  new Promise((resolve, reject) => {
    //显示loading
    clearTimeout(timer)
    timer = setTimeout(
      () =>
        wx.showLoading({
          title: '加载中'
        }),
      timeout
    )
    // 读数据
    wx.request({
      url: url.includes('http') ? url : baseUrl + url, //需要考虑多服务器
      data,
      method,
      success: res => resolve(res),
      fail: err => errorHandler(err),
      complete: res => {
        // 关闭loading
        wx.hideLoading()
        clearTimeout(timer)
        if (res.data === 'Not Found') {
          errorHandler(res.data)
        }
      }
    })
  })

export { request, baseUrl, indexIMG, cmaIMG, filmIMG, actIMG, custIMG, fIMG, attrIMG }
```

## 3.把接口封装成函数

index.js

```js
//模拟数据
const index = () =>
  new Promise(reslove =>
    reslove({
      swiperList: [
        //轮播图
        {
          filmId: 267,
          filmName: '',
          filmImage: '1.jpg'
        },
        {
          filmId: 267,
          filmName: '',
          filmImage: '2.jpg'
        },
        {
          filmId: 267,
          filmName: '',
          filmImage: '3.jpg'
        },
        {
          filmId: 267,
          filmName: '',
          filmImage: '4.jpg'
        },
        {
          filmId: 267,
          filmName: '',
          filmImage: '5.jpg'
        }
      ],
      //正在热映
      hotList: [
        {
          filmId: 267,
          filmName: '3只小猪',
          filmImage: '1.jpg',
          type: 1
        },
        {
          filmId: 267,
          filmName: '你的名字',
          filmImage: '3.jpg',
          type: 1
        },
        {
          filmId: 267,
          filmName: '柯南',
          filmImage: '2.jpg',
          type: 1
        },
        {
          filmId: 267,
          filmName: '阳光姐妹淘',
          filmImage: '5.jpg',
          type: 1
        },
        {
          filmId: 267,
          filmName: '3只小猪',
          filmImage: '2.jpg',
          type: 1
        },
        {
          filmId: 267,
          filmName: '3只小猪',
          filmImage: '1.jpg',
          type: 1
        },
        {
          filmId: 267,
          filmName: '侏罗纪公园',
          filmImage: '4.jpg',
          type: 1
        },
        {
          filmId: 267,
          filmName: '阳光姐妹淘',
          filmImage: '5.jpg',
          type: 1
        },
        {
          filmId: 267,
          filmName: '3只小猪',
          filmImage: '2.jpg',
          type: 1
        },
        {
          filmId: 267,
          filmName: '3只小猪',
          filmImage: '1.jpg',
          type: 1
        },
        {
          filmId: 267,
          filmName: '侏罗纪公园',
          filmImage: '4.jpg',
          type: 1
        }
      ],
      //即将上映
      readyList: [
        {
          filmId: 267,
          filmName: '3只小猪',
          filmImage: '1.jpg',
          type: 2
        },
        {
          filmId: 267,
          filmName: '柯南',
          filmImage: '2.jpg',
          type: 3
        },
        {
          filmId: 267,
          filmName: '你的名字',
          filmImage: '3.jpg',
          type: 2
        },
        {
          filmId: 267,
          filmName: '侏罗纪公园',
          filmImage: '4.jpg',
          type: 3
        },
        {
          filmId: 267,
          filmName: '阳光姐妹淘',
          filmImage: '5.jpg',
          type: 3
        }
      ],
      //推荐数据
      commData: [
        {
          filmId: '267',
          film_name: '名侦探柯南：绯色的子弹',
          film_title: '名探偵コナン 緋色の弾丸',
          film_cover_image: 'film02.png',
          film_duration: 110,
          film_release_date: '2021-04-17',
          film_box: 259.0,
          film_rank: 8.5,
          category_list: [
            {
              category_id: 1003,
              category_name: '动画'
            },
            {
              category_id: 1008,
              category_name: '动作'
            },
            {
              category_id: 1009,
              category_name: '悬疑'
            }
          ],
          country_list: [
            {
              country_id: 1004,
              country_name: '日本'
            },
            {
              country_id: 1005,
              country_name: '朝鲜'
            }
          ],
          director_list: [
            {
              director_id: 1002,
              director_name: '永冈智佳',
              director_cover_image: 'director02.png'
            }
          ],
          actor_list: [
            {
              actor_id: 1005,
              actor_name: '高山南',
              actor_cover_image: 'actor05.png',
              play: '江户川柯南'
            },
            {
              actor_id: 1006,
              actor_name: '山崎和佳奈',
              actor_cover_image: 'actor06.png',
              play: '毛利兰'
            },
            {
              actor_id: 1007,
              actor_name: '小山力也',
              actor_cover_image: 'actor07.png',
              play: '毛利小五郎'
            },
            {
              actor_id: 1008,
              actor_name: '池田秀一',
              actor_cover_image: 'actor08.png',
              play: '赤井秀一'
            }
          ]
        },
        {
          filmId: '267',
          film_name: '名侦探柯南：绯色的子弹',
          film_title: '名探偵コナン 緋色の弾丸',
          film_cover_image: 'film02.png',
          film_duration: 110,
          film_release_date: '2021-04-17',
          film_box: 259.0,
          film_rank: 8.5,
          category_list: [
            {
              category_id: 1003,
              category_name: '动画'
            },
            {
              category_id: 1008,
              category_name: '动作'
            },
            {
              category_id: 1009,
              category_name: '悬疑'
            }
          ],
          country_list: [
            {
              country_id: 1004,
              country_name: '日本'
            }
          ],
          director_list: [
            {
              director_id: 1002,
              director_name: '永冈智佳',
              director_cover_image: 'director02.png'
            }
          ],
          actor_list: [
            {
              actor_id: 1005,
              actor_name: '高山南',
              actor_cover_image: 'actor05.png',
              play: '江户川柯南'
            },
            {
              actor_id: 1006,
              actor_name: '山崎和佳奈',
              actor_cover_image: 'actor06.png',
              play: '毛利兰'
            },
            {
              actor_id: 1007,
              actor_name: '小山力也',
              actor_cover_image: 'actor07.png',
              play: '毛利小五郎'
            },
            {
              actor_id: 1008,
              actor_name: '池田秀一',
              actor_cover_image: 'actor08.png',
              play: '赤井秀一'
            }
          ]
        },
        {
          filmId: '267',
          film_name: '名侦探柯南：绯色的子弹',
          film_title: '名探偵コナン 緋色の弾丸',
          film_cover_image: 'film02.png',
          film_duration: 110,
          film_release_date: '2021-04-17',
          film_box: 259.0,
          film_rank: 8.5,
          category_list: [
            {
              category_id: 1003,
              category_name: '动画'
            },
            {
              category_id: 1008,
              category_name: '动作'
            },
            {
              category_id: 1009,
              category_name: '悬疑'
            }
          ],
          country_list: [
            {
              country_id: 1004,
              country_name: '日本'
            }
          ],
          director_list: [
            {
              director_id: 1002,
              director_name: '永冈智佳',
              director_cover_image: 'director02.png'
            }
          ],
          actor_list: [
            {
              actor_id: 1005,
              actor_name: '高山南',
              actor_cover_image: 'actor05.png',
              play: '江户川柯南'
            },
            {
              actor_id: 1006,
              actor_name: '山崎和佳奈',
              actor_cover_image: 'actor06.png',
              play: '毛利兰'
            },
            {
              actor_id: 1007,
              actor_name: '小山力也',
              actor_cover_image: 'actor07.png',
              play: '毛利小五郎'
            },
            {
              actor_id: 1008,
              actor_name: '池田秀一',
              actor_cover_image: 'actor08.png',
              play: '赤井秀一'
            }
          ]
        },
        {
          filmId: '267',
          film_name: '名侦探柯南：绯色的子弹',
          film_title: '名探偵コナン 緋色の弾丸',
          film_cover_image: 'film02.png',
          film_duration: 110,
          film_release_date: '2021-04-17',
          film_box: 259.0,
          film_rank: 8.5,
          category_list: [
            {
              category_id: 1003,
              category_name: '动画'
            },
            {
              category_id: 1008,
              category_name: '动作'
            },
            {
              category_id: 1009,
              category_name: '悬疑'
            }
          ],
          country_list: [
            {
              country_id: 1004,
              country_name: '日本'
            }
          ],
          director_list: [
            {
              director_id: 1002,
              director_name: '永冈智佳',
              director_cover_image: 'director02.png'
            }
          ],
          actor_list: [
            {
              actor_id: 1005,
              actor_name: '高山南',
              actor_cover_image: 'actor05.png',
              play: '江户川柯南'
            },
            {
              actor_id: 1006,
              actor_name: '山崎和佳奈',
              actor_cover_image: 'actor06.png',
              play: '毛利兰'
            },
            {
              actor_id: 1007,
              actor_name: '小山力也',
              actor_cover_image: 'actor07.png',
              play: '毛利小五郎'
            },
            {
              actor_id: 1008,
              actor_name: '池田秀一',
              actor_cover_image: 'actor08.png',
              play: '赤井秀一'
            }
          ]
        },
        {
          filmId: '267',
          film_name: '名侦探柯南：绯色的子弹',
          film_title: '名探偵コナン 緋色の弾丸',
          film_cover_image: 'film02.png',
          film_duration: 110,
          film_release_date: '2021-04-17',
          film_box: 259.0,
          film_rank: 8.5,
          category_list: [
            {
              category_id: 1003,
              category_name: '动画'
            },
            {
              category_id: 1008,
              category_name: '动作'
            },
            {
              category_id: 1009,
              category_name: '悬疑'
            }
          ],
          country_list: [
            {
              country_id: 1004,
              country_name: '日本'
            }
          ],
          director_list: [
            {
              director_id: 1002,
              director_name: '永冈智佳',
              director_cover_image: 'director02.png'
            }
          ],
          actor_list: [
            {
              actor_id: 1005,
              actor_name: '高山南',
              actor_cover_image: 'actor05.png',
              play: '江户川柯南'
            },
            {
              actor_id: 1006,
              actor_name: '山崎和佳奈',
              actor_cover_image: 'actor06.png',
              play: '毛利兰'
            },
            {
              actor_id: 1007,
              actor_name: '小山力也',
              actor_cover_image: 'actor07.png',
              play: '毛利小五郎'
            },
            {
              actor_id: 1008,
              actor_name: '池田秀一',
              actor_cover_image: 'actor08.png',
              play: '赤井秀一'
            }
          ]
        },
        {
          filmId: '267',
          film_name: '名侦探柯南：绯色的子弹',
          film_title: '名探偵コナン 緋色の弾丸',
          film_cover_image: 'film02.png',
          film_duration: 110,
          film_release_date: '2021-04-17',
          film_box: 259.0,
          film_rank: 8.5,
          category_list: [
            {
              category_id: 1003,
              category_name: '动画'
            },
            {
              category_id: 1008,
              category_name: '动作'
            },
            {
              category_id: 1009,
              category_name: '悬疑'
            }
          ],
          country_list: [
            {
              country_id: 1004,
              country_name: '日本'
            }
          ],
          director_list: [
            {
              director_id: 1002,
              director_name: '永冈智佳',
              director_cover_image: 'director02.png'
            }
          ],
          actor_list: [
            {
              actor_id: 1005,
              actor_name: '高山南',
              actor_cover_image: 'actor05.png',
              play: '江户川柯南'
            },
            {
              actor_id: 1006,
              actor_name: '山崎和佳奈',
              actor_cover_image: 'actor06.png',
              play: '毛利兰'
            },
            {
              actor_id: 1007,
              actor_name: '小山力也',
              actor_cover_image: 'actor07.png',
              play: '毛利小五郎'
            },
            {
              actor_id: 1008,
              actor_name: '池田秀一',
              actor_cover_image: 'actor08.png',
              play: '赤井秀一'
            }
          ]
        },
        {
          filmId: '267',
          film_name: '名侦探柯南：绯色的子弹',
          film_title: '名探偵コナン 緋色の弾丸',
          film_cover_image: 'film02.png',
          film_duration: 110,
          film_release_date: '2021-04-17',
          film_box: 259.0,
          film_rank: 8.5,
          category_list: [
            {
              category_id: 1003,
              category_name: '动画'
            },
            {
              category_id: 1008,
              category_name: '动作'
            },
            {
              category_id: 1009,
              category_name: '悬疑'
            }
          ],
          country_list: [
            {
              country_id: 1004,
              country_name: '日本'
            }
          ],
          director_list: [
            {
              director_id: 1002,
              director_name: '永冈智佳',
              director_cover_image: 'director02.png'
            }
          ],
          actor_list: [
            {
              actor_id: 1005,
              actor_name: '高山南',
              actor_cover_image: 'actor05.png',
              play: '江户川柯南'
            },
            {
              actor_id: 1006,
              actor_name: '山崎和佳奈',
              actor_cover_image: 'actor06.png',
              play: '毛利兰'
            },
            {
              actor_id: 1007,
              actor_name: '小山力也',
              actor_cover_image: 'actor07.png',
              play: '毛利小五郎'
            },
            {
              actor_id: 1008,
              actor_name: '池田秀一',
              actor_cover_image: 'actor08.png',
              play: '赤井秀一'
            }
          ]
        },
        {
          filmId: '267',
          film_name: '名侦探柯南：绯色的子弹',
          film_title: '名探偵コナン 緋色の弾丸',
          film_cover_image: 'film02.png',
          film_duration: 110,
          film_release_date: '2021-04-17',
          film_box: 259.0,
          film_rank: 8.5,
          category_list: [
            {
              category_id: 1003,
              category_name: '动画'
            },
            {
              category_id: 1008,
              category_name: '动作'
            },
            {
              category_id: 1009,
              category_name: '悬疑'
            }
          ],
          country_list: [
            {
              country_id: 1004,
              country_name: '日本'
            }
          ],
          director_list: [
            {
              director_id: 1002,
              director_name: '永冈智佳',
              director_cover_image: 'director02.png'
            }
          ],
          actor_list: [
            {
              actor_id: 1005,
              actor_name: '高山南',
              actor_cover_image: 'actor05.png',
              play: '江户川柯南'
            },
            {
              actor_id: 1006,
              actor_name: '山崎和佳奈',
              actor_cover_image: 'actor06.png',
              play: '毛利兰'
            },
            {
              actor_id: 1007,
              actor_name: '小山力也',
              actor_cover_image: 'actor07.png',
              play: '毛利小五郎'
            },
            {
              actor_id: 1008,
              actor_name: '池田秀一',
              actor_cover_image: 'actor08.png',
              play: '赤井秀一'
            }
          ]
        },
        {
          filmId: '267',
          film_name: '名侦探柯南：绯色的子弹',
          film_title: '名探偵コナン 緋色の弾丸',
          film_cover_image: 'film02.png',
          film_duration: 110,
          film_release_date: '2021-04-17',
          film_box: 259.0,
          film_rank: 8.5,
          category_list: [
            {
              category_id: 1003,
              category_name: '动画'
            },
            {
              category_id: 1008,
              category_name: '动作'
            },
            {
              category_id: 1009,
              category_name: '悬疑'
            }
          ],
          country_list: [
            {
              country_id: 1004,
              country_name: '日本'
            }
          ],
          director_list: [
            {
              director_id: 1002,
              director_name: '永冈智佳',
              director_cover_image: 'director02.png'
            }
          ],
          actor_list: [
            {
              actor_id: 1005,
              actor_name: '高山南',
              actor_cover_image: 'actor05.png',
              play: '江户川柯南'
            },
            {
              actor_id: 1006,
              actor_name: '山崎和佳奈',
              actor_cover_image: 'actor06.png',
              play: '毛利兰'
            },
            {
              actor_id: 1007,
              actor_name: '小山力也',
              actor_cover_image: 'actor07.png',
              play: '毛利小五郎'
            },
            {
              actor_id: 1008,
              actor_name: '池田秀一',
              actor_cover_image: 'actor08.png',
              play: '赤井秀一'
            }
          ]
        },
        {
          filmId: '267',
          film_name: '名侦探柯南：绯色的子弹',
          film_title: '名探偵コナン 緋色の弾丸',
          film_cover_image: 'film02.png',
          film_duration: 110,
          film_release_date: '2021-04-17',
          film_box: 259.0,
          film_rank: 8.5,
          category_list: [
            {
              category_id: 1003,
              category_name: '动画'
            },
            {
              category_id: 1008,
              category_name: '动作'
            },
            {
              category_id: 1009,
              category_name: '悬疑'
            }
          ],
          country_list: [
            {
              country_id: 1004,
              country_name: '日本'
            }
          ],
          director_list: [
            {
              director_id: 1002,
              director_name: '永冈智佳',
              director_cover_image: 'director02.png'
            }
          ],
          actor_list: [
            {
              actor_id: 1005,
              actor_name: '高山南',
              actor_cover_image: 'actor05.png',
              play: '江户川柯南'
            },
            {
              actor_id: 1006,
              actor_name: '山崎和佳奈',
              actor_cover_image: 'actor06.png',
              play: '毛利兰'
            },
            {
              actor_id: 1007,
              actor_name: '小山力也',
              actor_cover_image: 'actor07.png',
              play: '毛利小五郎'
            },
            {
              actor_id: 1008,
              actor_name: '池田秀一',
              actor_cover_image: 'actor08.png',
              play: '赤井秀一'
            }
          ]
        }
      ]
    })
  )

export { index }
```

cinema.js

```js
import { request } from '../utils/http'

/**
 *
 * 影厅类型列表
 * @params: 无
 * returns: Internal Server Error || [{id,specialId,specialName,specialSort}]
 */

const hallList = () => request({ url: '/hall/list' })

//影院列表
const cinemas = ({ page, rows, brandId, order, specialId, keywords }) =>
  request({
    url: '/cinema/list',
    data: { page, rows, brandId, order, specialId, keywords }
  })

// 电影在放映厅的场次
const watchList = (filmId, cmaId) => request({ url: '/watch/list', data: { filmId, cmaId } })

//影院详情
const cinema = cmaId => request({ url: '/cinema/info', data: { cmaId } })

//院线品牌列表
const brandList = () => request({ url: '/brand/list' })

//支持当前电影的放映厅
const filmCinema = filmId => request({ url: '/cinema/filmcinema', data: { filmId } })

//当前放映厅座位价格
const watchInfo = wtId => request({ url: '/watch/info', data: { wtId } })

export { hallList, cinemas, watchList, cinema, brandList, filmCinema, watchInfo }
```

film.js

```js
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
```

user.js

```js
import { request } from '../utils/http'

const getUser = openId => request({ url: '/user/get', data: { openId } })

/**
 * 跟新用户信息
 * @params: object
 * returns: 0成功 1受影响的条数
 */
const updateUser = user => request({ url: '/user/update', method: 'post', data: user })

export { getUser, updateUser }
```

## 4.首页布局



- 公共头部的部分要自定义，并且要固定
- 分为两部分状态栏组件和搜索栏组件
- 状态栏组件调用wx.getSystemInfoSync().statusBarHeight，获取状态栏高度
- 公共头部的高度要动态获取，然后整个页面结构加一个padding-top=公共头部的高度

index.wxml

```html
<view class="bg-efe" style="padding-top: {{headerHeight}}px">
  <view class="header bg-e22" id="header">
    <status-bar></status-bar>
    <search></search>
  </view>
  <view class="scroll">
    <view class="bg-linear"></view>
    <swiper class="swiper ml-20 mr-20 br-20" autoplay>
      <swiper-item wx:for="{{swiperList}}" wx:key="index">
        <navigator url="/pages/film/film?filmId={{item.filmId}}">
          <image class="image" src="{{indexIMG + item.filmImage}}" mode="aspectFill" />
        </navigator>
      </swiper-item>
    </swiper>
    <view class="bg-fff m-20 p-20 br-20">
      <view class="grid">
        <navigator class="navigator">
          <image src="{{indexIMG}}ico1.png" class="image" />
          <view class="c-333 fs-30">电影</view>
        </navigator>
        <navigator class="navigator">
          <image src="{{indexIMG}}ico2.png" class="image" />
          <view class="c-333 fs-30">影院</view>
        </navigator>
        <navigator class="navigator">
          <image src="{{indexIMG}}ico3.png" class="image" />
          <view class="c-333 fs-30">放映厅</view>
        </navigator>
        <navigator class="navigator">
          <image src="{{indexIMG}}ico4.png" class="image" />
          <view class="c-333 fs-30">小说</view>
        </navigator>
        <navigator class="navigator">
          <image src="{{indexIMG}}ico5.png" class="image" />
          <view class="c-333 fs-30">剧集介绍</view>
        </navigator>
      </view>
      <scroll-view scroll-x="true" class="mt-20">
        <view class="panel">
          <navigator wx:for="{{10}}" wx:key="index" class="navigator br-20 mr-20 p-20">
            <view class="c-333 fs-30">省钱月卡</view>
            <view class="c-999 fs-27">观影立减</view>
            <image src="{{indexIMG}}icotj.png" class="image" />
          </navigator>
        </view>
      </scroll-view>
    </view>
    <!-- <view>热映</view> -->
    <card title="正在热映" count="{{hotList.length}}" data="{{hotList}}"></card>
    <!-- <view>上映</view> -->
    <card title="即将上映" count="{{readyList.length}}" data="{{readyList}}"></card>
    <!-- <view>推荐</view> -->
    <view class="m-20 comon">
      <navigator class="item p-20 bg-fff br-20 mb-20" wx:for="{{commData}}" wx:key="index" url="/pages/film/film?filmId={{item.filmId}}">
        <image class="image" src="{{indexIMG+item.film_cover_image}}" mode="widthFix" />
        <view class="name fs-30 c-333 fw">{{item.film_name}}</view>
        <view class="type">
          <text class="mr-10 c-999 fs-27" wx:for="{{item.category_list}}" wx:key="index">{{item.category_name}}</text>
        </view>
        <view class="area">
          <text class="mr-10 c-999 fs-27" wx:for="{{item.country_list}}" wx:key="index">{{item.country_name}}</text>
        </view>
        <view class="c-e22 fs-30 fw rank">{{item.film_rank}}分</view>
      </navigator>
    </view>
  </view>
  <image wx:if="{{isShow}}" bindtap="gotop" src="../../images/top.png" class=" totop bg-fff br-circ">
  </image>
</view>
```

index.wxss

```css
.header {
  position: fixed;
  width: 750rpx;
  left: 0;
  top: 0;
  z-index: 999;
}
.scroll {
  position: relative;
  z-index: 1;
}

.scroll .bg-linear {
  position: absolute;
  z-index: -1;
  background: linear-gradient(#e22d2c, #efefef);
  width: 750rpx;
  height: 200rpx;
}
.swiper {
  overflow: hidden;
  height: 200rpx;
}
.swiper .image {
  width: 100%;
}
.grid {
  display: flex;
  justify-content: space-between;
}
.grid .navigator {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.grid .navigator .image {
  width: 100rpx;
  height: 100rpx;
}
.panel {
  display: flex;
}
.panel .navigator {
  min-width: 200rpx;
  box-sizing: border-box;
  border: 1px solid #efefef;
  position: relative;
  overflow: hidden;
}
.panel .navigator .image {
  width: 30rpx;
  height: 30rpx;
  position: absolute;
  right: -10rpx;
  bottom: -10rpx;
  transform: rotate(45deg);
}
.comon {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.comon .item {
  width: 48%;
  box-sizing: border-box;
  position: relative;
}
.comon .item .image {
  width: 100%;
}
.comon .item .rank {
  position: absolute;
  right: 20rpx;
  bottom: 20rpx;
}
.totop {
  position: fixed;
  right: 20rpx;
  bottom: 20rpx;
  z-index: 2;
  width: 100rpx;
  height: 100rpx;
}
```

index.js

```js
import { index } from '../../services/index'
import { indexIMG } from '../../utils/http'
Page({
  data: {
    swiperList: [],
    hotList: [],
    readyList: [],
    commData: [],
    headerHeight: 0,
    indexIMG: indexIMG,
    isShow: false
  },
  async onLoad() {
    const res = await index()
    this.setData(res)
  },
  onReady() {
    const query = wx.createSelectorQuery()
    query.select('#header').boundingClientRect()
    query.exec(res => this.setData({ headerHeight: res[0].height }))
  },
  onPageScroll({ scrollTop }) {
    if (scrollTop > 300) {
      this.setData({ isShow: true })
    } else {
      this.setData({ isShow: false })
    }
  },
  gotop() {
    wx.pageScrollTo({ scrollTop: 0, duration: 300 })
  }
})
```

index.json

```json
{
  "usingComponents": {},
  "navigationStyle": "custom"
}
```



### 状态栏组件status-bar

status-bar.wxml

```html
<view style="height: {{height}}px"></view>
```

status-bar.wxss

status-bar.js

```js
// components/status-bar/status-bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    height: 20 //iphoneX 44 iphoneXr 47 其他20
  },
  lifetimes:{
    attached(){
      this.setData({height:wx.getSystemInfoSync().statusBarHeight})
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {}
})
```

### 搜索栏组件search

search.wxml

```html
<view class="comp-search pl-20 pr-20">
  <view class="c-fff fs-30" bindtap="city">{{selectCity}}</view>
  <navigator url="/pages/search/search" class="bg-fff br-40 ml-20 bar p-5-15">
    <icon type="search" />
    <swiper class="swiper fs-27 c-333" autoplay vertical>
      <swiper-item wx:for="{{list}}" wx:key="index">
        {{item}}
      </swiper-item>
    </swiper>
  </navigator>
</view>
```

search.wxss

```css
.comp-search {
  display: flex;
  align-items: center;
  height: 80rpx;
  box-sizing: border-box;
}
.comp-search .bar {
  display: flex;
  align-items: center;
}
.comp-search .bar .swiper {
  width: 350rpx;
  height: 40rpx;
  line-height: 40rpx;
}
```

search.js

```js
const app = getApp()
Component({
  options: {
    addGlobalClass: true
  },
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    list: ['泰坦尼克', '指环王：护戒使者', '我的小可爱'], //推荐
    cityList: ['上海', '北京', '深圳'],
    selectCity: '上海'
  },

  lifetimes: {
    attached: function () {
      //有搜索过，显示搜索过的关键字
      let keywords = app.globalData.keywords
      if (keywords) {
        this.setData({ list: [keywords] })
      }
    }
  },
  methods: {
    city() {
      //获取city数据==》wx.show...
      wx.showActionSheet({
        itemList: this.data.cityList,
        success: res => {
          this.setData({ selectCity: this.data.cityList[res.tapIndex] })
        }
      })
    }
  }
})
```

search.json

```json
{
  "component": true,
  "usingComponents": {}
}
```

### card组件

card.wxml

```html
<view class="bg-fff m-20 p-20 br-20">
  <view class="comp-card-head">
    <view class="fs-35 c-333 fw">{{title}}</view>
    <view class="fs c-999">全部{{count}}部></view>
  </view>
  <scroll-view scroll-x="true" class="mt-20">
    <view class="comp-card-body">
      <view wx:for="{{data}}" wx:key="index" class="mr-20 t-center item">
        <navigator url="/pages/film/film?filmId={{item.filmId}} " class="mb-10">
          <image class="image br-15" src="{{indexIMG+item.filmImage}}" />
          <view class="c-333 fs-35">{{item.filmName}}</view>
        </navigator>
        <text wx:if="{{item.type===1}}" class="bg-e22 c-fff p-5-30 fs-30 br-30">购票</text>
        <text wx:elif="{{item.type===2}}" class="bg-659 c-fff p-5-30 fs-30 br-30 ">预售</text>
        <text wx:else="{{item.type===3}}" class="bg-daa c-fff p-5-30 fs-30 br-30 ">想看</text>
      </view>
    </view>
  </scroll-view>
</view>
```

card.wxss

```css
.comp-card-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.comp-card-body {
  display: flex;
}
.comp-card-body .item {
  height: 370rpx;
}
.comp-card-body .item .image {
  width: 175rpx;
  height: 250rpx;
}
```

card.js

```js
import { indexIMG } from '../../utils/http'
Component({
  options: {
    addGlobalClass: true
  },
  properties: {
    title: String,
    count: Number,
    data: Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    indexIMG: indexIMG
  },

  /**
   * 组件的方法列表
   */
  methods: {}
})
```

card.json

```json
{
  "component": true,
  "usingComponents": {}
}
```

## 5.搜索页布局

search.wxml

```html
<view class="m-20">
  <view class="search-bar">
    <view class="bg-efe p-10-25 br-40 search-input">
      <icon type="search" />
      <input type="text" value="{{keywords}}" bindinput="setKeywords" class="ml-20" placeholder="请输入关键字" />
    </view>
    <view class="c-e22 fs-30" bindtap="submit">确定</view>
  </view>
  <view class="classify mt-20">
    <text class="{{classifyIndex===index? 'bg-e22 c-fff':'bg-efe c-333'}} p-10-25 br-30 fs-30" wx:for="{{classify}}" wx:key="index" bindtap="setClassifyIndex" data-index="{{index}}">{{item.name}}</text>
  </view>
  <view class="searchHistory">
    <text class="fs-35 c-333 mt-20">搜索历史：</text>
    <view class="keywords m-20">
      <text class="m-20 c-999 fs-27" wx:for="{{record}}" wx:key="index" bindtap="setKeywordsFromRecord" data-index="{{index}}">{{item}}</text>
    </view>
  </view>
  <view class="del">
    <image src="/images/del.png" class="image" />
    <text bindtap="clear" class=" fs-27 c-999">全部清除</text>
  </view>
</view>
```

search.wxss

```css
.search-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.search-bar .search-input {
  display: flex;
  flex: 0.93;
}
.searchHistory {
  margin-top: 60rpx;
}
.classify {
  display: flex;
  justify-content: space-around;
}
.del {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.del .image {
  width: 30rpx;
  height: 30rpx;
}
```

search.js

```js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    keywords: '', //搜索关键字,需要和全局app的keywords同步
    record: [], //搜索历史记录，需要和手机缓存同步
    //选项
    classify: [
      { cid: 1, name: '电影', page: 'films' },
      { cid: 2, name: '影人', page: 'films' },
      { cid: 3, name: '影院', page: 'cinemas' },
      { cid: 4, name: '活动', page: 'cinemas' }
    ],
    classifyIndex: 0 //当前激活的选项索引
  },

  /**
   * 生命周期函数--监听页面加载
   */

  //进入搜索页面时，获取上一次的搜索关键字和之前所有的搜索记录
  onLoad() {
    this.setData({ keywords: app.globalData.keywords })
    if (wx.getStorageSync('record')) {
      this.setData({ record: wx.getStorageSync('record') })
    }
  },
  //获取输入框的值，设置搜索关键字
  setKeywords(e) {
    this.setData({ keywords: e.detail.value })
  },
  //选项激活状态的修改
  setClassifyIndex(e) {
    this.setData({ classifyIndex: e.currentTarget.dataset.index })
  },
  //从记录选择关键字，修改keywords
  setKeywordsFromRecord(e) {
    let index = e.currentTarget.dataset.index
    this.setData({ keywords: this.data.record[index] })
  },

  // 搜索业务
  submit() {
    //输入框不为空
    if (this.data.keywords !== '') {
      //把keywords 添加到record,record记录同步到手机缓存
      if (this.data.record.indexOf(this.data.keywords) === -1) {
        //不重复的情况下，才追加到record
        this.data.record.push(this.data.keywords)
        wx.setStorageSync('record', this.data.record)
      }
    }
    // 再把输入框的值与全局数据keywords同步
    app.globalData.keywords = this.data.keywords
    //跳转到对应页面，传递数据，让其完成显示
    let page = this.data.classify[this.data.classifyIndex].page
    wx.reLaunch({
      url: `/pages/${page}/${page}?keywords=${this.data.keywords}`
    })
  },
  // //清空记录
  clear() {
    this.setData({ record: [] })
    wx.removeStorageSync('record')
  }
})
```

search.json

```json
{
  "usingComponents": {},
  "navigationBarTitleText": "搜索"
}
```

## 6.影院页布局

cinemas.js

```js
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
```

cinemas.wxml

```html
<view class="filter">
  <view class="title bg-fff p-20 bd-b-1">
    <view bindtap="tapBrand">{{brandName}}</view>
    <view bindtap="tapOrder">{{orderName}}</view>
    <view bindtap="tapHall">{{specialName}}</view>
  </view>
  <view class="model" wx:if="{{showHall || showBrand||showOrder}}" bindtap="showmodel">
    <view class="brand bg-fff" wx:if="{{showBrand}}">
      <scroll-view scroll-y class="brandContent">
        <view bindtap="selectBrand" data-index="{{-1}}" class="fs-30 c-333 m-20">全部</view>
        <view bindtap="selectBrand" data-index="{{index}}" class="fs-30 c-333 m-20" wx:for="{{brandList}}" wx:key="index">{{item.brandName}}</view>
      </scroll-view>
    </view>
    <view class="order bg-fff" wx:if="{{showOrder}}">
      <view class="fs-30 c-333 p-20" bindtap="selectOrder" data-index="距离近">距离近</view>
      <view class="fs-30 c-333 p-20" bindtap="selectOrder" data-index="价格低">价格低</view>
    </view>
    <view class="hall bg-fff" wx:if="{{showHall}}">
      <view class="hall-tag bd-b-1 p-20">
        <text class="default {{selectIndex ===-1 &&'active'}} m-10" catchtap="selectHall" data-index="{{-1}}">全部</text>
        <text class="default {{selectIndex === index &&'active'}} m-10" catchtap="selectHall" data-index="{{index}}" wx:for="{{hallList}}" wx:key="index">{{item.specialName}}</text>
      </view>
      <view class="t-right p-20">
        <text catchtap="submitHall" class="bg-e22 c-fff fs-30 p-5-15 br-10">确定</text>
      </view>
    </view>
  </view>
</view>
<view class="list">
  <navigator class="bd-b-1 p-20" wx:for="{{cinemaList}}" wx:key="index" url="/pages/cinema/cinema?cmaId={{item.cmaId}}">
    <view class="name mb-20">
      <view class="c-333 fs-30 fw">{{item.cmaName}}</view>
      <view class="fs-27 c-999"><text class="fs-30 c-e22">{{item.cmaCost}}元</text>起</view>
    </view>
    <view class="address mb-20 c-999 fs-27">
      <text>{{item.cmaAddress}}</text>
      <text>{{item.cmaAway}}</text>
    </view>
    <view class="service mb-20">
      <text wx:for="{{item.cmaService}}" wx:key="index" class="fs-27 p-5-15 s{{index%2}} mr-20">{{item.ser_name}}</text>
    </view>
  </navigator>
  <view class="t-center fs-27 c-999 p-20" wx:if="{{page===-1}}">----我也是有底线的----</view>
</view>
```

cinemas.wxss

```css
.filter {
  position: fixed;
  left: 0;
  top: 0;
  width: 750rpx;
  z-index: 1;
}
.title {
  display: flex;
  height: 80rpx;
  box-sizing: border-box;
  justify-content: space-around;
  align-items: center;
}
.filter .model {
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
}
.model .brand .brandContent {
  height: 600rpx;
}
.model .order {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.model .hall .hall-tag {
  display: flex;
  flex-wrap: wrap;
}
.default {
  border: 1px solid #999999;
  color: #999999;
  padding: 10rpx 8rpx;
  border-radius: 10rpx;
}
.active {
  border: 1px solid #ee2222;
  color: #ee2222;
  padding: 10rpx 8rpx;
  background-color: rgba(218, 113, 113, 0.5);
}
.list {
  margin-top: 80rpx;
}
.list .name {
  display: flex;
  justify-content: space-between;
}
.list .address {
  display: flex;
  justify-content: space-between;
}
.list .service .s0 {
  border: 1px solid #6599fe;
  color: #6599fe;
}
.list .service .s1 {
  border: 1px solid #daa000;
  color: #daa000;
}

```

cinemas.json

```json
{
  "usingComponents": {},
  "enablePullDownRefresh": true
}
```

## 7.影院详情页布局

cinema.js

```js
import { cinema } from '../../services/cinema'
import { cmaIMG } from '../../utils/http'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    cinema: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    const res = await cinema(options.cmaId)
    let cinemaData = res.data[0]
    // 处理数据
    if (cinemaData.cmaImgs) {
      cinemaData.cmaImgs = cmaIMG + cinemaData.cmaImgs
    }
    if (cinemaData.cmaSepcial) {
      cinemaData.cmaSepcial = JSON.parse(cinemaData.cmaSepcial)
    }
    if (cinemaData.cmaService) {
      cinemaData.cmaService = JSON.parse(cinemaData.cmaService)
    }
    this.setData({ cinema: cinemaData })
  },
  call() {
    wx.makePhoneCall({
      phoneNumber: this.data.cinema.cmaPhone,
      fail: () =>
        wx.showToast({
          title: '需要您的授权',
          icon: 'error'
        })
    })
  }
})
```

cinema.wxml

```html
<view class="cinema">
  <!-- 影院图片 -->
  <image src="{{cinema.cmaImgs}}" class="image" mode="widthFix" />
  <!-- 影院标题 -->
  <view class="p-20 bd-b-1 fs-30 fw c-333">{{cinema.cmaName}}</view>
  <!-- 影院地址 -->
  <navigator url="/pages/map/map?cmaAddress={{cinema.cmaAddress}}" class="address p-20 bd-b-1">
    <image src="../../images/location.png" class="icon mr-10" />
    <text class="location fs-30 c-333">{{cinema.cmaAddress}}</text>
    <image src="../../images/art.png" class="icon" />
  </navigator>
  <!-- 影院电话 -->
  <view class="tel p-20" bindtap="call">
    <image src="../../images/tel.png" class="icon mr-10" />
    <text class="telephone fs-30 c-659">{{cinema.cmaPhone}}</text>
  </view>
  <!-- 特色服务 -->
  <view class="service p-20">
    <view class="fs-35 fw c-333 mb-20 bd-b-1 pb-20">特色服务</view>
    <view class="card-content" wx:if="{{cinema.cmaSepcial}}">
      <text wx:for="{{cinema.cmaSepcial}}" wx:key="index" class="card c-e22 p-5-15 fs-30 mr-20 mb-20">{{item.spe_name}}</text>
    </view>
    <view class="list fs-30 c-999 pb-20 pt-20 bd-b-1" wx:for="{{cinema.cmaService}}" wx:key="index"><text class="fs-27 p-10 card2 mr-20">{{item.ser_name}}</text>{{item.ser_desc}}</view>
  </view>
</view>
```

cinema.wxss

```css
.cinema .image {
  width: 100vw;
}
.cinema .icon {
  width: 40rpx;
  height: 40rpx;
}
.cinema .address {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.address .location {
  flex: 1;
}
.cinema .tel {
  display: flex;
  align-items: center;
  border-bottom: 30rpx solid #efefef;
}
.tel .telephone {
  flex: 1;
}

.card-content {
  display: flex;
  flex-wrap: wrap;
  border-bottom: 30rpx solid #efefef;
}
.service .card-content .card {
  border: 1px solid #ee2222;
}
.service .card2 {
  border: 1px solid rgb(157, 190, 107);
  color: rgb(157, 190, 107);
}
.list {
  line-height: 50rpx;
}
```

## 8.地图页布局

### **插件应用**

**前置条件**

- [腾讯位置服务](https://lbs.qq.com/)注册开发账号
- 小程序管理员账号登录【控制台】【应用管理】【我的应用】【创建应用】
- 【添加key】全选启用产品，填入自己的appID，得到秘钥(CC4BZ-O5J6X-LQE4Y-TPQKA-PKLBH-ZZBTJ)

**得到插件有哪些方式**

1. npm安装到项目使用
2. 使用[微信服务市场](https://fuwu.weixin.qq.com/)的在线插件

**需求1：**提供地址，转换经纬度

```js
//下载 腾讯地址辅助插件 复制到当前的小程序目录下  utils/
npm install qqmap-wx-jssdk --save 
```

实现：

```js
const QQMap = require('../../utils/qqmap-wx-jssdk.min');

const qqmap = new QQMap({
  key: 'CC4BZ-O5J6X-LQE4Y-TPQKA-PKLBH-ZZBTJ',//前置条件创建的秘钥
})

qqmap.geocoder({
  address: "徐汇区桂林路81号（上师大东校区）文苑楼2楼",
  success: res=>{
    console.log('qqmap res',res)
  }
})
```

**需求2**：提供地址经纬度，规划出路线，并绘制到地图

实现：[微信服务市场](https://fuwu.weixin.qq.com/) 搜索【[腾讯位置服务】选择 【[腾讯位置服务路线规划](https://fuwu.weixin.qq.com/service/detail/00024cc78b8140578af86e6905b415)】【添加插件】选择你的小程序，之后按照【接入文档】操作



map.js

```js
const QQMap = require('../../utils/qqmap-wx-jssdk')
const qqmap = new QQMap({
  key: '63IBZ-NS3WG-SJAQ2-QAA4S-LBEKT-LDBBC' //前置条件创建的秘钥
})

Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 经纬度
    lng: null,
    lat: null,
    // 标记点地址
    markers: [],
    // 文字地址
    address: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // console.log(options.cmaAddress)
    // 需求：将地址转化为经纬度
    qqmap.geocoder({
      address: options.cmaAddress,
      success: res => {
        // console.log('qqmap res', res)
        this.setData({
          lng: res.result.location.lng,
          lat: res.result.location.lat,
          address: options.cmaAddress,
          markers: [
            {
              id: 0,
              longitude: res.result.location.lng,
              latitude: res.result.location.lat,
              iconPath: '../../images/mark.png',
              width: 40,
              height: 40
            }
          ]
        })
      }
    })
  },
  gotomap() {
    let key = '63IBZ-NS3WG-SJAQ2-QAA4S-LBEKT-LDBBC' //使用在腾讯位置服务申请的key
    let referer = '喵喵3012' //调用插件的app的名称
    let endPoint = JSON.stringify({
      //终点
      name: this.data.address,
      latitude: this.data.lat,
      longitude: this.data.lng
    })
    wx.navigateTo({
      url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint
    })
  }
})
```

map.wxml

```html
<map class="map" longitude="{{lng}}" latitude="{{lat}}" markers="{{markers}}"></map>
<view class="routeplan bg-fff t-center p-20">
  <text class="text fs-35 bg-e22 p-10-25 br-10 c-fff" bindtap="gotomap">到这里去</text>
</view>
```

map.wxss

```css
.map {
  width: 100vw;
  height: 100vh;
}
.routeplan {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 999;
  width: 100vw;
  height: 80rpx;
  line-height: 80rpx;
}
.text {
  vertical-align: middle;
}
```



## 9.电影页布局

films.js

```js
import { filmCate, filmRegion, films } from '../../services/film'
import { filmIMG } from '../../utils/http'
Page({
  data: {
    cateList: [], //类型
    regList: [], //地区
    yearList: [], //年份
    cateIndex: -1,
    regIndex: -1,
    yearIndex: -1,

    headerHeight: 0,
    filmList: [], //电影列表数据,
    page: 1,
    rows: 6,
    show: false //控制模态框状态
  },
  onLoad(options) {
    // 获取类型数据
    filmCate().then(res => this.setData({ cateList: res.data }))
    // 获取地区数据
    filmRegion().then(res => this.setData({ regList: res.data }))
    // 获取年份数据
    let d = new Date()
    let tmpArr = []
    for (let i = 2000; i <= d.getFullYear(); i++) {
      tmpArr.push(i)
    }
    this.setData({ yearList: tmpArr })

    // 获取电影列表数据
    this.getFilmList(options.keywords)
  },

  // 获取头部的高度
  onReady() {
    const query = wx.createSelectorQuery()
    query
      .select('#header')
      .boundingClientRect(res => this.setData({ headerHeight: res.height }))
      .exec()
  },

  // 点击过滤条title控制模态框
  showmodel() {
    this.setData({
      show: !this.data.show
    })
  },
  // 控制模态框
  showmodel2() {
    this.setData({
      show: !this.data.show,
      cateIndex: -1,
      regIndex: -1,
      yearIndex: -1
    })
  },

  // 选择类型
  selectCate(e) {
    this.setData({
      cateIndex: e.currentTarget.dataset.index
    })
  },
  // 选择地区
  selectReg(e) {
    this.setData({
      regIndex: e.currentTarget.dataset.index
    })
  },
  // 选择年份
  selectYear(e) {
    this.setData({
      yearIndex: e.currentTarget.dataset.index
    })
  },
  // 提交选择
  submit() {
    this.setData({ show: false, filmList: [], page: 1 })
    this.getFilmList()
  },
  // 下拉刷新
  async onPullDownRefresh() {
    this.setData({ page: 1, filmList: [] })
    await this.getFilmList()
    wx.stopPullDownRefresh()
  },

  // 触底加载新数据
  onReachBottom() {
    if (this.data.page !== -1) {
      this.setData({ page: this.data.page + 1 })
      this.getFilmList()
    }
  },
  // 获取电影列表数据
  async getFilmList(keywords = '') {
    // 处理参数
    let { page, rows } = this.data
    let cateId = this.data.cateIndex !== -1 ? this.data.cateList[this.data.cateIndex].cateId : -1
    let regionId = this.data.regIndex !== -1 ? this.data.regList[this.data.regIndex].filmReId : -1
    let year = this.data.yearIndex !== -1 ? this.data.yearList[this.data.yearIndex] : -1

    const res = await films({ page, rows, cateId, regionId, year, keywords })
    // 处理剩余数据不足一页的情况
    if (res.data.length < this.data.rows) {
      this.setData({ page: -1 })
    }
    // 处理数据
    res.data.forEach(item => {
      item.filmAvat = filmIMG + item.filmAvat
      item.filmDesc = item.filmDesc.slice(0, 13) + '...'
    })
    this.setData({ filmList: this.data.filmList.concat(res.data) })
  }
})
```

films.wxml

```html
<view class="films" style="padding-top: {{headerHeight}}px;">
  <view class="header bg-e22" id="header">
    <view class="status-search">
      <status-bar></status-bar>
      <search></search>
    </view>
    <!-- 过滤条 -->
    <view class="filter">
      <view bindtap="showmodel" class="title pl-20 pr-20 fs-27 c-fff">
        <text>{{cateIndex===-1?"全部类型":cateList[cateIndex].cateName}} - {{regIndex===-1?"所有地区":regList[regIndex].filmReName}} - {{yearIndex===-1?"所有年份":yearList[yearIndex]}}</text>
        <image class="icon" src="../../images/artw.png" mode="" />
      </view>
      <!-- 模态框背景 -->
      <view class="model" bindtap="showmodel2" wx:if="{{show}}"></view>
      <!--模态框内容 -->
      <scroll-view scroll-y class="{{show? 'active':''}} content bg-fff">
        <!-- 类型 -->
        <view class=" p-20">
          <view class="c-333 fs-30 fw mb-20">类型：</view>
          <view class="ml-20 fs-27 cate">
            <text bindtap="selectCate" data-index="{{-1}}" class="{{cateIndex===-1?'active':'default'}} br-10 c-999 p-10-25 mr-10 mb-10">全部</text>
            <text bindtap="selectCate" data-index="{{index}}" class="{{cateIndex===index?'active':'default'}} br-10 c-999 p-10-25 mr-10 mb-10" wx:for="{{cateList}}" wx:key="index">{{item.cateName}}</text>
          </view>
        </view>
        <!-- 地区 -->
        <view class=" p-20">
          <view class="c-333 fs-30 fw mb-20">地区：</view>
          <view class="ml-20 fs-27 cate">
            <text bindtap="selectReg" data-index="{{-1}}" class="{{regIndex===-1?'active':'default'}} br-10 c-999 p-10-25 mr-10 mb-10">全部</text>
            <text bindtap="selectReg" data-index="{{index}}" class="{{regIndex===index?'active':'default'}} br-10 c-999 p-10-25 mr-10 mb-10" wx:for="{{regList}}" wx:key="index">{{item.filmReName}}</text>
          </view>
        </view>
        <!-- 年份 -->
        <view class=" p-20">
          <view class="c-333 fs-30 fw mb-20">年份：</view>
          <view class="ml-20 fs-27 cate">
            <text bindtap="selectYear" data-index="{{-1}}" class="{{yearIndex===-1?'active':'default'}} br-10 c-999 p-10-25 mr-10 mb-10">全部</text>
            <text bindtap="selectYear" data-index="{{index}}" class="{{yearIndex===index?'active':'default'}} br-10 c-999 p-10-25 mr-10 mb-10" wx:for="{{yearList}}" wx:key="index">{{item}}</text>
          </view>
        </view>
        <view class="t-right p-20">
          <text class="bg-e22 c-fff fs-30 br-10 p-10-25" bindtap="submit">确定</text>
        </view>
      </scroll-view>
    </view>
  </view>
  <view class="pl-20 pr-20">
    <navigator wx:for="{{filmList}}" wx:key="index" url="/pages/film/film?filmId={{item.filmId}}" class="item  mb-20 ">
      <image src="{{item.filmAvat}}" mode="widthFix" class="image mr-20" />
      <view class="content fs-27 c-999 bd-b-1 pb-20">
        <view class="fs-35 c-333 fw mb-20">{{item.filmName}}</view>
        <view class="mb-10">评分：<text class="c-e22">{{item.filmPraiseStar}}</text></view>
        <view class="mb-10">{{item.filmCateKeyword}}</view>
        <view class="mb-10">{{item.filmYears}}，{{item.filmRegionKeyword}}</view>
        <view class="mb-10">{{item.filmDesc}}</view>
      </view>
      <view class="pay">
        <text class="bg-e22 c-fff br-30 p-10-25 fs-27">购票</text>
      </view>
    </navigator>
    <view class="p-20 c-999 fs-27 t-center" wx:if="{{page===-1}}">---我也是有底线的---</view>
  </view>
</view>
```

films.wxss

```css
.header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  z-index: 999;
}
.header .status-search {
  border-bottom: 1px solid #ffffff;
}
.filter {
  position: relative;
}
.filter .title {
  display: flex;
  height: 80rpx;
  justify-content: space-between;
  align-items: center;
}
.title .icon {
  width: 30rpx;
  height: 30rpx;
}
.filter .model {
  position: absolute;
  top: 80rpx;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background: rgba(0, 0, 0, 0.5);
}
.filter .content {
  position: absolute;
  top: 80rpx;
  right: -83vw;
  width: 83vw;
  height: 83vh;
  transition: right ease 0.2s;
}
.filter .content.active {
  right: 0;
}

.content .cate {
  display: flex;
  flex-wrap: wrap;
}
.content .cate .default {
  border: 1px solid #999999;
}
.content .cate .active {
  border: 1px solid #ee2222;
  color: #ee2222;
  background-color: #e9b7b7;
}
.item {
  display: flex;
  align-items: center;
  position: relative;
}
.item .image {
  width: 160rpx;
}
.item .content {
  height: 230rpx;
  flex: 1;
}
.pay {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
```

films.json

```json
{
  "usingComponents": {},
  "navigationStyle": "custom",
  "enablePullDownRefresh": true
}
```

## 10.电影详情页布局

film.js

```js
import { comments, film } from '../../services/film'
import { filmIMG, actIMG, custIMG, fIMG, attrIMG } from '../../utils/http'
const app = getApp()
Page({
  data: {
    film: null, //电影详情

    // 评论数据
    commentList: [],
    page: 1, //-1代表数据不足
    rows: 6,

    // 图片服务器基础链接
    filmIMG, //电影
    actIMG, //演员
    custIMG, //头像
    fIMG, //电影宣传图片（剧照）
    attrIMG, //影片属性图标

    showDesc: false //简介展开状态
  },
  async onLoad(options) {
    // 获取电影详情数据
    const filmId = options.filmId
    const res = await film(filmId)
    // 处理数据
    // 演员
    if (res.data[0].filmActors) {
      res.data[0].filmActors = JSON.parse(res.data[0].filmActors)
    }
    // 电影属性
    if (res.data[0].filmAttribute) {
      res.data[0].filmAttribute = JSON.parse(res.data[0].filmAttribute)
    }
    // 剧照
    if (res.data[0].filmImgs) {
      res.data[0].filmImgs = JSON.parse(res.data[0].filmImgs)
    }
    this.setData({ film: res.data[0] })
    // 获取评论数据
    this.getComments()
  },
  // 获取评论数据
  async getComments() {
    let { page, rows } = this.data
    let filmId = this.data.film.filmId
    const res = await comments({ filmId, page, rows })
    // 数据不足
    if (res.data.length < rows) {
      this.setData({ page: -1 })
    }
    this.setData({ commentList: this.data.commentList.concat(res.data) })
  },
  // 下拉加载新数据
  onReachBottom() {
    if (this.data.page !== -1) {
      this.setData({ page: this.data.page + 1 })
      this.getComments()
    }
  },
  // 控制电影描述的展开状态
  controShowDesc() {
    this.setData({ showDesc: !this.data.showDesc })
  },
  // 特惠购票
  topay() {
    app.globalData.film = this.data.film
    wx.navigateTo({
      url: '/pages/ticketing-cinema/ticketing-cinema'
    })
  },
  // 预览电影高清图
  showImage(e) {
    let urls = []
    this.data.film.filmImgs.forEach(item => {
      urls.push(this.data.fIMG + item.img_url)
    })
    let current = urls[e.currentTarget.dataset.index]
    wx.previewImage({
      urls, // 需要预览的图片http链接列表
      current // 当前显示图片的http链接
    })
  }
})
```

film.wxml

```html
<view class="film bg-efe" wx:if="{{film}}">
  <!-- 封面 -->
  <view class="poster bg-fff p-20">
    <image src="{{filmIMG+film.filmAvat}}" mode="heightFix" class="image br-10 mr-20" />
    <view class="content fs-27 c-999">
      <view class="fs-35 fw c-333 mb-20">{{film.filmName}}</view>
      <view class="mb-20">{{film.filmRealName}}</view>
      <view class="mb-20">
        <view>{{film.filmYears}}/{{film.filmRegionKeyword}}</view>
        <view>{{film.filmCateKeyword}}</view>
        <view>{{film.filmShowPlace}}/{{film.filmTimelong}}</view>
      </view>
      <view class="btn">
        <text class="text bg-e22 c-fff fs-35 p-5-30 br-10 t-center">想看</text>
        <text class="text bg-e22 c-fff fs-35 p-5-30 br-10 t-center">看过</text>
      </view>
    </view>
  </view>
  <!-- 简介 -->
  <view class="m-20 p-20 bg-fff br-10">
    <view class="title bd-b-1" bindtap="controShowDesc">
      <view class="fw c-333 fs-35">简介:</view>
      <view class="open fs-30 c-999">
        <text>{{showDesc?"收起":"展开"}}</text>
        <image src="../../images/art.png" class="icon ml-20" style="transform:rotate({{showDesc?-90:90}}deg)" />
      </view>
    </view>
    <scroll-view class="scroll  pt-20 c-999 fs-27" style="max-height: {{showDesc?350:80}}rpx" scroll-y>
      {{film.filmDesc}}
    </scroll-view>
  </view>
  <!-- 演员 -->
  <view class="actors bg-fff m-20 p-20 br-10">
    <view class="title">
      <view class="c-333 fs-35 fw">演员:</view>
      <view class="c-999 fs-30">全部{{film.filmActors[1].content.length}}人</view>
    </view>
    <scroll-view scroll-x>
      <view class="body">
        <view wx:for="{{film.filmActors[1].content}}" wx:key="index">
          <image src="{{actIMG+item.act_img}}" mode="heightFix" class="image mr-10 br-10" />
          <text class="c-333 fs-25">{{item.act_name}}</text>
        </view>
      </view>
    </scroll-view>

  </view>
  <!-- 属性 -->
  <view wx:for="{{film.filmAttribute}}" wx:key="index" class="attr bg-fff m-20 p-20 br-10">
    <image src="{{attrIMG+item.attr_img}}" class="image mr-20" />
    <view class="text fs-25 c-999">{{item.attr_text}}</view>
  </view>
  <!-- 剧照 -->
  <view class="bg-fff p-20 m-20 br-10 ">
    <scroll-view scroll-x="true" class="stills">
      <image wx:for="{{film.filmImgs}}" wx:key="index" src="{{fIMG+item.img_url}}" class="image mr-10" mode="heightFix" bindtap="showImage" data-index="{{index}}" />
    </scroll-view>
  </view>

  <!-- 评论 -->
  <view class="comm bg-fff p-20">
    <view class="comm-header">
      <view class="c-333 fs-30 fw">用户评论</view>
      <view class="c-999 fs-27 right">
        <text>我要评论</text>
        <image src="../../images/edit.png" class="image" />
      </view>
    </view>
    <view wx:if="{{commentList.length===0}}" class="c-999 fs-30 t-center p-20">---暂无评论---</view>
    <view class="comm-body p-20" wx:for="{{commentList}}" wx:key="index">
      <!-- 用户头像 -->
      <image src="{{custIMG+item.custAvat}}" class="image br-circ" />
      <!-- 评论内容 -->
      <view class="info ml-20 bd-b-1">
        <view class="pt-20 fw c-333">{{item.custName}}</view>
        <view class="mt-10 c-daa fs-30 fw">{{item.cmmtScore}}分</view>
        <view class="c-999 fs-27">{{item.cmmtCreatetime}}</view>
        <view class="pb-20 c-999 fs-27">{{item.cmmtDesc}}</view>
      </view>
      <!-- 点赞 -->
      <view class="good-count">
        <image src="../../images/good.png" class="good" />
        <text class="c-e22">{{item.cmmtGood}}</text>
      </view>
    </view>
    <view wx:if="{{page===-1&&commentList.length!==0}}" class="c-999 fs-30 t-center p-20">---到底了---</view>
  </view>
  <!-- 特惠购票 -->
  <view class="buy bg-efe t-center"><text class="pay fs-35 bg-e22  c-fff br-10" bindtap="topay">特惠购票</text></view>
</view>
```

film.wxss

```css
.film .poster {
  display: flex;
}
.film .poster .content {
  flex: 1;
}
.poster .image {
  height: 310rpx;
}
.btn {
  display: flex;
  justify-content: space-between;
}
.btn .text {
  flex: 0.45;
  height: 55rpx;
  line-height: 55rpx;
}
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 65rpx;
}
.title .open {
  display: flex;
  align-items: center;
}
.title .open .icon {
  width: 30rpx;
  height: 30rpx;
  transition: all ease 0.5s;
}
.scroll {
  line-height: 40rpx;
  transition: all ease 0.2s;
}
.actors .body {
  display: flex;
}
.actors .body .image {
  height: 200rpx;
}
.attr {
  display: flex;
}
.attr .image {
  width: 30rpx;
  height: 30rpx;
}
.attr .text {
  flex: 1;
  line-height: 35rpx;
}
.stills {
  white-space: nowrap;
}
.image {
  height: 200rpx;
}
.comm-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.comm-header .right .image {
  width: 30rpx;
  height: 30rpx;
}
.comm {
  padding-bottom: 100rpx;
}
.comm-header .right {
  display: flex;
  align-items: center;
}
.comm-body {
  display: flex;
  position: relative;
}
.comm-body .image {
  width: 130rpx;
  height: 130rpx;
}
.comm-body .info {
  flex: 1;
}
.comm-body .good-count {
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
}
.comm-body .good-count .good {
  width: 50rpx;
  height: 50rpx;
}
.buy {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100rpx;
  line-height: 100rpx;
}
.buy .pay {
  padding: 10rpx 100rpx;
}
```

## 11.选择影院场次页面布局

ticketing-cinema.js

```js
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
```

ticketing-cinema.wxml

```html
<view class="ticket bg-efe" style="height: 100vh">
  <!-- 电影封面 -->
  <view class="poster bg-fff p-20" wx:if="{{film}}">
    <!-- 电影图片 -->
    <image src="{{filmIMG+film.filmAvat}}" mode="heightFix" class="image br-10 mr-20" />
    <!-- 电影内容 -->
    <view class="content fs-27 c-999">
      <view class="fs-35 fw c-333 mb-20">{{film.filmName}}</view>
      <view class="mb-20">{{film.filmRealName}}</view>
      <view class="mb-20">
        <view>{{film.filmYears}}/{{film.filmRegionKeyword}}</view>
        <view>{{film.filmCateKeyword}}</view>
        <view>{{film.filmShowPlace}}/{{film.filmTimelong}}</view>
      </view>

    </view>
  </view>
  <!-- 支持放映的影院列表 -->
  <scroll-view scroll-y class=" mt-20" style="height: 30vh">
    <view class="list m-20 p-20 bg-fff" wx:for="{{cinemaList}}" wx:key="index">
      <view>
        <view class="fs-35 fw c-333">{{item.cmaName}}</view>
        <view class="fs-27 c-999">{{item.cmaAddress}}</view>
      </view>
      <view class="session bg-e22 c-fff fs-30 br-40 p-5-15 ml-20" bindtap="selectWatch" data-index="{{index}}">场次</view>
    </view>
  </scroll-view>
  <!-- 模态框 -->
  <view class="model" wx:if="{{cinemaIndex!==-1}}" bindtap="close">
    <view class="p-20 bg-fff ml-20 mr-20" catchtap="nothing">
      <view class="title fs-35 c-333">
        {{cinemaList[cinemaIndex].cmaName}}
      </view>
      <scroll-view scroll-y="true" style="height: 700rpx">
        <view wx:for="{{watchList}}" wx:key="index" class=" bd-b-1 p-20">
          <view class="c-333 fw fs-30 mb-10">{{item.wdDate}}</view>
          <view class="watch">
            <view class="date">
              <view class="fs-40 fw c-333">{{item.wtBegintime}}</view>
              <view class="c-999 fs-27">{{item.wtEndtime}}</view>
            </view>
            <view class="type ml-10 mr-10">
              <view class="fs-35 c-333">{{item.wtVersion}}</view>
              <view class="c-999 fs-30">{{item.wtHalls}}</view>
            </view>
            <view class="price fs-50 c-e22">
              {{item.wtCost}}元
            </view>
            <navigator url="/pages/seat-selection/seat-selection?wtId={{item.wtId}}" class="pay c-e22 fs-30 br-40 p-10-25 ml-10">
              购票
            </navigator>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
</view>
```

ticketing-cinema.wxss

```css
.ticket .poster {
  display: flex;
}
.ticket .poster .content {
  flex: 1;
}
.poster .image {
  height: 240rpx;
}

.list {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.list .session {
  flex-shrink: 0;
}
.model {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
  padding-top: 100rpx;
}
.model .watch {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.watch .pay{
  border: 1px solid #ee2222;
  
}
```

## 12.选座页面布局

seat-selection.js

```js
import { watchInfo } from '../../services/cinema'
import { filmIMG } from '../../utils/http'
Page({
  data: {
    film: null, //电影信息
    cinema: null, //影院信息
    watch: null, //座位
    filmIMG,
    selectList: [] //选座信息
  },
  // 读取电影信息，影院信息，座位数据
  async onLoad(options) {
    // console.log(options.wtId) //"202107300630423"
    let wtId = options.wtId
    const res = await watchInfo(wtId)
    res.data[0].wtCostSites = JSON.parse(res.data[0].wtCostSites)
    this.setData({ film: res.data[2], cinema: res.data[1], watch: res.data[0] })
  },
  // 选座
  selected(e) {
    //获取到点击的座位（排，列）
    let rows = e.currentTarget.dataset.rows
    let cols = e.currentTarget.dataset.cols
    //提取座位信息
    let site = this.data.watch.wtCostSites[rows].colums[cols]

    let isAdd = true //true要添加，false要删除
    //selectList已有的情况，需删除
    for (let i = 0; i < this.data.selectList.length; i++) {
      if (site.site_no === this.data.selectList[i].site_no) {
        this.data.selectList.splice(i, 1)
        isAdd = false
        this.data.watch.wtCostSites[rows].colums[cols].checked = false
        break
      }
    }
    if (isAdd) {
      this.data.watch.wtCostSites[rows].colums[cols].checked = true
      this.data.selectList.push(site)
    }
    this.setData({ selectList: this.data.selectList, watch: this.data.watch })
  },
  // 购买电影票
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
    wx.setStorageSync('cinema', this.data.cinema)
    wx.setStorageSync('film', this.data.film)
    wx.setStorageSync('selectList', this.data.selectList)
    wx.setStorageSync('watch', this.data.watch)
    wx.reLaunch({
      url: '/pages/orders/orders'
    })
  }
})
```

seat-selection.wxml

```html
<view class="seat bg-efe" style="height: 100vh;">
  <!-- 影院 -->
  <navigator url="/pages/map/map?cmaAddress={{cinema.cmaAddress}}" class="cinema-location bg-fff p-20">
    <view class="bd-r-1 pr-20">
      <view class="fs-30 c-333 fw">{{cinema.cmaName}}</view>
      <view class="mt-10 fs-27 c-999">{{cinema.cmaAddress}}</view>
    </view>
    <image src="../../images/location.png" class="location-icon pl-20" />
  </navigator>
  <!-- 电影信息 -->
  <view wx:if="{{film}}" class="film bg-fff m-20 p-20 br-10">
    <image src="{{filmIMG+film.filmAvat}}" mode="heightFix" class="poster" />
    <view class="cinema-info pl-20">
      <view class="p-5-15">
        <text class="fs-30 c-333 fw mr-20">{{film.filmName}}</text>
        <text class="c-daa fs-30 fw">{{film.filmPraise}}分</text>
      </view>
      <view class="pb-20 mt-20 c-999 fs-25">{{film.filmTimelong}} | {{film.filmCateKeyword}} | {{film.filmRegionKeyword}}</view>
      <view class="mt-20 pt-20 t-right fs-50 c-e22 fw"><text>￥{{watch.wtCost}}</text></view>
    </view>
  </view>
  <!-- 选座 -->
  <view class="seat bg-fff">
    <!-- 标识图标 -->
    <view class="seat-icon p-20 m-20 c-999 fs-27">
      <view class="item">
        <image src="../../images/seat01.png" mode="heightFix" class="image"></image>
        <text>可选</text>
      </view>
      <view class="item">
        <image src="../../images/seat02.png" mode="heightFix" class="image"></image>
        <text>已售</text>
      </view>
      <view class="item">
        <image src="../../images/seat03.png" mode="heightFix" class="image"></image>
        <text>已选</text>
      </view>
      <view class="item">
        <image src="../../images/seat04.png" mode="heightFix" class="image"></image>
        <text>情侣</text>
      </view>
    </view>
    <!-- 场地 -->
    <scroll-view scroll-x="true">
      <!-- 银幕 -->
      <view class="t-center">
        <image src="../../images/monitor.png" mode="heightFix" class="screen" />
      </view>
      <!-- 座位 -->
      <view class="selectSeats">
        <!-- rows -->
        <view class="rows" wx:for="{{watch.wtCostSites}}" wx:key="index" wx:for-index="rindex">
          <!-- cols -->
          <view class="cols" wx:for="{{item.colums}}" wx:key="index">
            <!-- site_state:0无 1可选 2已售 3已选 4情侣 -->
            <view wx:if="{{item.site_state==='0'}}" class="empty"></view>
            <image bindtap="selected" data-rows="{{rindex}}" data-cols="{{index}}" class="image" mode="heightFix" src="../../images/seat0{{item.checked?'3':'1'}}.png" wx:if="{{item.site_state==='1'}}"></image>
            <image class="image" mode="heightFix" src="../../images/seat02.png" wx:if="{{item.site_state==='2'}}"></image>
            <image class="image" mode="heightFix" src="../../images/seat04.png" wx:if="{{item.site_state==='4'}}"></image>
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
  <!-- 状态栏 -->
  <view class="status-bar bg-fff p-20">
    <view wx:if="{{selectList.length!==0}}" class="status-info c-fff fs-35 bg-e22 br-10 t-center p-20">
      <text class="item">{{selectList.length}}张</text>
      <text class="item">￥{{watch.wtCost*selectList.length}}</text>
      <text class="item" bindtap="pay">立即购买</text>
    </view>
    <view wx:else class="c-999 fs-35 bg-e22 br-10 t-center p-20">请选择座位</view>
  </view>
</view>
```

seat-selection.wxss

```css
.cinema-location {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.location-icon {
  width: 60rpx;
  height: 60rpx;
}
.film {
  display: flex;
}
.film .cinema-info {
  flex: 1;
}
.film .poster {
  height: 220rpx;
}
.seat-icon {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.seat-icon .item {
  display: flex;
  align-items: center;
}
.seat-icon .image {
  height: 40rpx;
}
.screen {
  height: 40rpx;
}
.selectSeats {
  margin-top: 80rpx;
}
.rows {
  display: flex;
  justify-content: center;
}

.cols .empty,
.cols .image {
  height: 40rpx;
  width: 40rpx;
  margin-right: 5rpx;
  margin-bottom: 5rpx;
}
.status-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  box-sizing: border-box;
}
.status-info {
  display: flex;
  justify-content: space-between;
}
.status-info .item{
  flex: 1;
}
```

## 13.订单页面布局

orders.js

```js
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
```

orders.wxml

```html
<view class="orders bg-efe" style="height: 100vh">
  <view class="order-item bg-fff p-20" wx:if="{{cinema.length!==0&&film.length!==0&&selectList.length!==0&&watch.length!==0}}">
    <!-- 影院信息 -->
    <view class="cinema bd-b-1 pb-20">
      <text class="c-999 fs-27">{{cinema.cmaName}}</text>
      <text class="c-999 fs-25">已完成</text>
    </view>
    <!-- 电影信息 -->
    <view wx:if="{{film}}" class="film mt-20 bd-b-1 pb-20">
      <view class="left">
        <image src="{{filmIMG+film.filmAvat}}" mode="heightFix" class="image" />
        <view class="film-info">
          <view class="name fs-27 c-333 fw">{{film.filmName}} {{selectList.length}}张</view>
          <view class="c-999 fs-25">{{film.filmYears}}年{{watch.wdDate}}日{{watch.wtBegintime}}</view>
          <view class="c-999 fs-25">
            <text class="mr-10">{{watch.wtHalls}}</text>
            <text wx:for="{{selectList}}" class="mr-10" wx:key="index">{{item.site_row}}排{{item.site_colum}}座</text>
          </view>
        </view>
      </view>

      <view>
        <text class="bg-e22 c-fff br-40 p-10-25 fs-25">评价影片</text>
      </view>
    </view>
    <!-- 价格信息 -->
    <view class="mt-20 price c-999 fs-25">
      <text>总价：{{selectList.length*watch.wtCost}}元</text>
      <text class="del c-999 br-40 p-10-25 fs-25" bindtap="delorder">删除订单</text>
    </view>
  </view>
  <view class="t-center mt-20 p-20 fs-25 c-333">如果您有未展示的订单，可查看<text class="c-e22">更早的订单></text></view>
</view>
```

orders.wxss

```css
.order-item {
  border-top: 15rpx solid #efefef;
}
.cinema {
  display: flex;
  justify-content: space-between;
}
.film {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.left {
  display: flex;
  align-items: center;
}
.film .image {
  height: 180rpx;
}
.film-info {
  margin-left: 20rpx;
  width: 400rpx;
}
.film-info .name {
  margin-bottom: 60rpx;
}
.price {
  display: flex;
  align-items: center;
  height: 60rpx;
  justify-content: space-between;
}
.del {
  border: 1px solid #999999;
}
```

orders.json

```json
{
  "usingComponents": {},
  "navigationBarBackgroundColor": "#ffffff",
  "navigationBarTextStyle": "black",
  "navigationBarTitleText": "我的订单"
}

```

## 14.主程app

```js
import { request } from './utils/http'
import { getUser } from './services/user'
App({
  globalData: {
    keywords: '', //搜索页留下的关键字
    film: null, //选中的电影
    userInfo: {} //用户信息（是否微信授权登录过）
  },
  async onLaunch() {
    //微信服务器：微信和用户账号数据 , 可以作为小程序用户账号使用，无需注册，只需授权登录
    //自有服务器： 微信用户数据 + 额外用户数据(订单，我的)要合并
    //需要判断是否授权登录过，把用户信息存入全局userInfo和我方服务器，给其他页面用

    //1.判断是否通过微信登录的小程序（避免用户伪装）
    //2.请求微信服务器,抓取微信服务器上的用户信息(openId)
    //3.作为参数请求我方服务器（有这个用户|没这个用户,就创建）
    //4. 写入userInfo 供其他页面使用

    // 1.调用接口获取登录凭证（code）
    const { code, errMsg } = await wx.login()
    if (!code) {
      console.log('异常登录', errMsg)
      return
    }
    console.log(code)

    // 2.通过凭证进而换取用户登录态信息(openId)
    const {
      data: { openid }
    } = await request({
      url: 'https://api.weixin.qq.com/sns/jscode2session',
      data: {
        appid: 'wxc548f450dbfe3acd', //你的小程序的appId
        secret: '88de4a5c021c0ed60550aeb6a8b7e045', //你小程序的秘钥
        js_code: code,
        grant_type: 'authorization_code'
      }
    })
    console.log(openid)

    // 3.作为参数请求我方服务器（有这个用户|没这个用户,就创建）
    const { data } = await getUser(openid)
    console.log(data)

    // 4.写入userInfo 供其他页面使用
    this.globalData.userInfo = data
  }
})
```

## 15.我的页面布局

mine.js

```js
const app = getApp()
Page({
  data: {
    user: null
  },
  onLoad() {
    //获取全局用户信息
    const user = app.globalData.userInfo
    if (!user.hasAuthorize) {
      wx.redirectTo({
        url: '/pages/authorize/authorize'
      })
    } else {
      this.setData({ user })
    }
  },
  getPhoneNumber(e) {
    console.log('mine', e)
    // 个人版（不支持了）
    if (e.detail.errMsg === 'getPhoneNumber:fail no permission') {
      wx.navigateTo({
        url: '/pages/phone/phone'
      })
    }

    //企业版（管理员微信账号是企业账号）（允许）
    // updateUser({...app.globalData.userInfo,tel:e.detail.phone})
  }
})
```

mine.wxml

```html
<view class="mine">
  <!-- 用户信息 -->
  <view class="userInfo">
    <image src="{{user.avatarUrl}}" class="image br-circ" />
    <view class="c-999 fs-30 mt-20">{{user.nickName}}</view>
  </view>
  <!-- 绑定手机号 -->
  <view class="phone">
    <view wx:if="{{user.tel}}" class="t-center">{{user.tel}}</view>
    <view wx:else>
      <button class="bg-e22 c-fff fw fs-35" open-type="getPhoneNumber" bindgetphonenumber="getPhoneNumber">绑定手机</button>
    </view>
  </view>
</view>
```

mine.wxss

```css
.mine {
  padding-top: 100rpx;
}
.userInfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.userInfo .image {
  width: 200rpx;
  height: 200rpx;
}
.phone {
  margin-top: 120rpx;
}
```

## 16.授权页面布局

authorize.js

```js
import moment from 'moment'
import { updateUser } from '../../services/user'
const app = getApp()
Page({
  async userAuthorize() {
    //授权 wx.getUserProfile
    try {
      //1.获取用户信息
      const { userInfo } = await wx.getUserProfile({
        desc: '用户完善会员资料'
      })
      console.log('mine', userInfo)
      //2. 合并到我方数据库，同步到app的userInfo
      let user = {
        ...app.globalData.userInfo,
        ...userInfo,
        hasAuthorize: true,
        authorizeTime: moment().format('YYYY-MM-DD HH:mm:ss')
      }
      await updateUser(user)
      app.globalData.userInfo = user
      //3. 跳转到之前（我的）
      wx.switchTab({
        url: '/pages/mine/mine'
      })
    } catch (error) {
      wx.showToast({
        title: '需要你的授权',
        icon: 'error'
      })
    }
  }
})
```

authorize.wxml

```html
<view class="authorize">
  <view class="fs-30 fw c-333">统一授权使用微信图形、昵称等信息</view>
  <view class="fs-30 c-999">我们承诺只使用于小程序中呈现您的信息</view>
  <text class="bg-e22 c-fff p-5-30 br-10" bindtap="userAuthorize">授权</text>
</view>
```

authorize.wxss

```css
.authorize {
  border: 20rpx solid #ddd;
  margin: 50rpx;
  padding: 40rpx;
  display: flex;
  flex-direction: column;
  height: 20vh;
  justify-content: space-evenly;
  align-items: center;
}
```

## 17.绑定手机号页面布局

phone.js

```js
import { updateUser } from '../../services/user'

const app = getApp()
let regx = /^1[3-9]\d{9}/
Page({
  tel: null, //电话
  data: {
    code: null //验证码
  },

  setTel(e) {
    this.tel = e.detail.value //自定义
  },
  // 获取验证码
  async getYzm() {
    console.log(this.tel)
    // 1.校验手机号的合法性
    // 2.//2. 把手机号作为参数==》发送接口请求==》第三方短信服务器接口（电信、移动、联通）
    // 3.//3. 第三方短信服务器会: 下发含有验证码的短信到手机,在把验证码返回给小程序

    // 1
    if (regx.test(this.tel)) {
      // 2
      // const {code} = await request({url:'/付费的地方短信接口',data:{key:this.tel}})
      // 3假的短信接口返回值（为什么是假，因为穷)
      let str = '0123456789'
      let resStr = ''
      for (let i = 0; i < 6; i++) {
        let index = parseInt(Math.random() * str.length)
        resStr += str[index]
      }
      const code = resStr
      const err = 0
      this.setData({ code })

      if (err === 0) {
        wx.showToast({
          title: '发送成功',
          icon: 'success'
        })
      } else {
        wx.showToast({
          title: '发送失败',
          icon: 'error'
        })
      }
    } else {
      wx.showToast({
        title: '手机号有误',
        icon: 'error'
      })
    }
  },
  async formSubmit(e) {
    console.log(e)
    const { tel, yzm } = e.detail.value
    //1.校验用户输入的验证码和手机上的验证码是否一致
    if (tel && regx.test(tel) && yzm === this.data.code) {
      //2. 手机号码入库 && 同步到全局(globalData.userInfo)
      let user = { ...app.globalData.userInfo, tel }
      const { data } = await updateUser(user)
      console.log(data) //我服务器接口问题，tel没写入
      app.globalData.userInfo = user
      // 3.跳转我的
      wx.reLaunch({
        url: '/pages/mine/mine'
      })
    } else {
      wx.showToast({
        title: '手机号和验证码有误',
        icon: 'error'
      })
    }
  }
})
```

phone.wxml

```html
<form bindsubmit="formSubmit">
  <input type="number" name="tel" placeholder="请输入电话号码" class="input bd-b-1 p-20" bindinput="setTel" />
  <view class="code p-20">
    <input type="text" name="yzm" class="input bd-b-1" value="{{code}}" />
    <text class="c-999" bindtap="getYzm">获取验证码</text>
  </view>
  <button class="bg-e22 c-fff fw mt-20" form-type="submit">确定</button>
</form>
```

phone.wxss

```css
.code {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.input {
  height: 80rpx;
  flex: 1;
}
```

