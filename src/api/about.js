import Vue from "vue";
import listFn from "@/api/list-fn";

const url = {
  index: "/about/"
};

export default {
  url,
  fn: {
    ...listFn(url.index),
    get() {
      return Vue.http({ method: "get", url: url.index });
    }
  }
};
