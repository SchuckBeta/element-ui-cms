import Vue from "vue";

export const url = {
  resource: "/search/",
  options: "/options/",
  user: "/search/user/",
  todos: "/todos/",
  excelExport: "/excel/export/",
  review: "/review/"
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
    todos(params) {
      return Vue.http({ method: "get", url: url.todos, params });
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
    }
  }
};
