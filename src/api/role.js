import listFn from "@/api/list-fn";
import Vue from "vue";

export const url = {
  index: "/role/",
  menus: "/role/menus/"
};

export default {
  url,
  fn: {
    menus: params => Vue.http({ method: "get", url: url.menus, params }),
    ...listFn(url.index)
  }
};
