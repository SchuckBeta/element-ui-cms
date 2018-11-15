import Vue from "vue";

export const url = {
  options: "/options/",
  resource: "/search/",
  excelExport: "/excel/export/",
  review: "/review/",
  todos: "/todos/"
};

export default {
  url,
  fn: {
    options(params) {
      return Vue.http({ method: "get", url: url.options, params });
    },
    resource(params) {
      return Vue.http({ method: "get", url: url.resource, params });
    },
    user(params) {
      return Vue.http({ method: "get", url: url.user, params });
    },
    excelExport(type, params) {
      return Vue.http({
        method: "get",
        url: `${url.excelExport}${type}/`,
        params
      });
    },
    review(data) {
      return Vue.http({ method: "post", url: url.review, data });
    },
    todos(params) {
      return Vue.http({ method: "get", url: url.todos, params });
    }
  }
};
