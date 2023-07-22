import { indexIMG } from "../../utils/http";

Component({
  options: {
    addGlobalClass: true,
  },

  properties: {
    title: String,
    count: Number,
    data: Array,
  },

  /**
   * 组件的初始数据
   */
  data: {
    indexIMG: indexIMG,
  },

  /**
   * 组件的方法列表
   */
  methods: {},
});
