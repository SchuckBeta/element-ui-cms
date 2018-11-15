import importAll from "@/utils/import-all";

export const getters = {
  EMPTY_OPTIONS: "EMPTY_OPTIONS"
};

export const mutations = {
  MENU_LAYOUT_TYPE: "MENU_LAYOUT_TYPE",
  COMMON_ERROR_CLOSE: "COMMON_ERROR_CLOSE",
  LOADING_VISIBLE: "LOADING_VISIBLE",
  SET_OPTIONS: "SET_OPTIONS"
};

export const actions = {
  GET_OPTIONS: "GET_OPTIONS"
};

const modules = {};

importAll(
  require.context("@/store/config/vuex/types/", false, /(?<!index)\.js$/)
).forEach(module => {
  modules[module.key] = module.default;
});

export default {
  getters,
  mutations,
  actions,
  modules
};
