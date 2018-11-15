import listFn from "@/api/list-fn";
import Vue from "vue";

export const url = {
  index: "/administrator/",
  groups: "/role/"
};

export default {
  url,
  fn: {
    groups: params => Vue.http({ method: "get", url: url.groups, params }),
    ...listFn(url.index)
  }
};
