import listFn from "@/api/list-fn";
import Vue from "vue";

export const url = {
  index: "/user/",
  excelImport: "/user/import/"
};

export default {
  url,
  fn: {
    ...listFn(url.index),
    excelImport(data) {
      return Vue.http({
        method: "post",
        url: url.excelImport,
        data,
        timeout: 20000
      });
    }
  }
};
