import Vue from "vue";
import Vuex from "vuex";
import { Loading } from "element-ui";
import types from "@/config/vuex/types/index";
import { namespaces } from "@/config/vuex/index";
import { types as menuLayoutsTypes } from "@/config/menu-layouts";
import importAll from "@/utils/import-all";
import storageKeys from "@/config/storage-keys";
import api from "@/api/common";

// Vue.use(Vuex)

// 无法归类为某功能模块的全项目任意地方都会用到的数据写这里，除非必须建议都写成module
const state = {
  // 菜单布局
  menuLayoutType:
    localStorage.getItem(storageKeys.menuLayoutType) || menuLayoutsTypes.left,
  // 是否显示ajax错误弹框，比如有接口希望自己接管错误提示，把接口url填入数组，则关闭通用错误提示
  commonErrorClose: [],
  // 全局加载提示组件C
  loadingInstance: null,
  // 下拉选项数据
  options: {
    // 非菜单权限类型
    permissions: [],
    // 资源类型
    resource_type: [],
    client: [
      { text: "WEB", value: 0 },
      { text: "APP", value: 1 },
      { text: "共用", value: -1 }
    ],
    link_type: [{ text: "外链", value: 0 }, { text: "资源", value: 1 }],
    release_status: [
      { text: "未上线", value: 0 },
      { text: "已上线", value: 1 }
    ],
    whether: [{ text: "是", value: 1 }, { text: "否", value: 0 }],
    enable_disabled: [{ text: "激活", value: 1 }, { text: "禁用", value: 0 }],
    visible: [{ text: "隐藏", value: 0 }, { text: "显示", value: 1 }],
    on_off: [{ text: "下线", value: 0 }, { text: "上线", value: 1 }],
    importance: [{ text: "一般", value: 0 }, { text: "重要", value: 1 }],
    review_status: [
      { text: "待审核", value: 0 },
      { text: "已退回", value: 1 },
      { text: "已上线", value: 2 },
      {
        text: "已下线",
        value: -1
      }
    ],
    organs: []
  }
};

const getters = {
  [types.getters.EMPTY_OPTIONS]: state => {
    return !state.options.resource_type.length;
  }
};

const mutations = {
  [types.mutations.MENU_LAYOUT_TYPE](state, type) {
    state.menuLayoutType = type;
    localStorage.setItem(storageKeys.menuLayoutType, type);
  },
  [types.mutations.SET_OPTIONS](state, data) {
    function recursiveOrgan(data) {
      data.forEach(item => {
        const children = item.structure;
        if (
          Object.prototype.toString.call(children) === "[object Array]" &&
          children.length
        ) {
          recursiveOrgan(children);
        } else {
          delete item.structure;
        }
      });
    }

    if (
      Object.prototype.toString.call(data.organs) === "[object Array]" &&
      data.organs.length
    ) {
      recursiveOrgan(data.organs);
    }
    Object.assign(state.options, data);
  },
  [types.mutations.COMMON_ERROR_CLOSE](state, { url, close = true }) {
    if (close) {
      state.commonErrorClose.push(url);
    } else {
      const index = state.commonErrorClose.findIndex(url);
      if (index !== -1) {
        state.commonErrorClose.splice(index, 1);
      }
    }
  },
  [types.mutations.LOADING_VISIBLE](state, { options, visible = true } = {}) {
    function close() {
      if (state.loadingInstance) {
        state.loadingInstance.close();
        state.loadingInstance = null;
      }
    }

    close();

    if (visible) {
      const text = Vue.i18n.t("loading");
      if (Object.prototype.toString.call(options) === "[object Object]") {
        if (!options.text) options.text = text;
      } else {
        options = { text: text };
      }
      state.loadingInstance = Loading.service(options);
    }
  }
};
const actions = {
  [types.actions.GET_OPTIONS](context, params) {
    return api.fn.options(params).then(response => {
      context.commit(types.mutations.SET_OPTIONS, response.data);
    });
  }
};

const modules = {};

importAll(require.context("@/store/modules/", true, /\.module\.js$/)).forEach(
  module => {
    modules[module.key] = module.default;
    namespaces[module.key] = module.key;
  }
);

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules
});
