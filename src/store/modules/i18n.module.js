import types from "@/store/config/vuex/types/i18n";
import storageKeys from "@/store/config/storage-keys";
import lang from "@/store/config/lang";

const state = {
  locale: localStorage.getItem(storageKeys.lang) || lang.zhCN
};

const getters = {};

const mutations = {
  [types.mutations.SET_LANG](state, lang) {
    if (lang) {
      state.locale = lang;
    }
  }
};

const actions = {};

export const key = "i18n";

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true
};
