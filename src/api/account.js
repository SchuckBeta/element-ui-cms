import Vue from "vue";

export const url = {
  signIn: "/login/",
  account: "/account/"
};
export const fn = {
  signIn(data) {
    return Vue.http.post(url.signIn, data);
  },
  update(data) {
    return Vue.http.patch(url.account, data);
  },
  account(token) {
    const params = {};
    if (token) {
      params.token = token;
      Vue.http.defaults.headers.common["Authorization"] = `JWT ${token}`;
    }
    return Vue.http.get(url.account, params);
  }
};
export default {
  url,
  fn
};
