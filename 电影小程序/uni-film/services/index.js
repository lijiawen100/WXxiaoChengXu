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
