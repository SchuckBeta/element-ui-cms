import Vue from "vue";

export const fn = {
  list: url => (params, config) =>
    Vue.http(Object.assign({}, config, { method: "get", url, params })),
  retrieve: url => (id, params, config) => {
    const finalUrl = url + id + "/";
    return Vue.http(
      Object.assign({}, config, { method: "get", url: finalUrl, params })
    );
  },
  create: url => (data, config) =>
    Vue.http(Object.assign({}, config, { method: "post", url, data })),
  update: url => (id, data, config) => {
    const finalUrl = url + id + "/";
    return Vue.http(
      Object.assign({}, config, { method: "patch", url: finalUrl, data })
    );
  },
  updateBulk: url => (params, data, config) =>
    Vue.http(
      Object.assign({}, config, {
        method: "patch",
        url,
        params,
        data,
        headers: { "X-BULK-OPERATION": true }
      })
    ),
  destroy: url => (id, params, config) => {
    const finalUrl = url + id + "/";
    return Vue.http(
      Object.assign({}, config, { method: "delete", url: finalUrl, params })
    );
  },
  destroyBulk: url => (params, config) =>
    Vue.http(
      Object.assign({}, config, {
        method: "delete",
        url,
        params,
        headers: { "X-BULK-OPERATION": true }
      })
    )
};

export default function(url) {
  const curry = {};
  for (const prop in fn) {
    if (fn.hasOwnProperty(prop)) {
      curry[prop] = fn[prop](url);
    }
  }
  return curry;
}
