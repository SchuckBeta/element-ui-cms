import Vue from "vue";
import store from "@/store/index";
import { namespaces } from "@/store/config/vuex/index";
import { withNamespace } from "@/store/utils";
import typesAccount from "@/store/config/vuex/types/account";
import cookieKeys from "@/store/config/cookie-keys";
import cookies from "@panhezeng/utils/dist/cookies";
import { Message } from "element-ui";

export function setAuthorization() {
  if (store.state.account.user.token) {
    Vue.http.defaults.headers.common["Authorization"] = `JWT ${
      store.state.account.user.token
    }`;
  } else {
    Vue.http.defaults.headers.common["Authorization"] = "";
  }
}

/**
 * 所有API共用错误处理
 * @param res
 */
export function commonError(res) {
  let msg = "请求错误";
  let onClose = null;

  if (res) {
    if (res.data || res.status) {
      if (res.data) {
        let msgData = res.data.msg || res.data.message;
        if (msgData && typeof msgData === "object") {
          let multi = "";
          if (Object.keys(msgData).length) {
            for (let prop in msgData) {
              if (msgData.hasOwnProperty(prop)) {
                let temp = msgData[prop];
                if (Object.prototype.toString.call(temp) === "[object Array]") {
                  for (let value of temp) {
                    if (typeof value === "string") {
                      multi += `${prop.toLocaleUpperCase()}：${value}\n`;
                    }
                  }
                } else if (typeof temp === "string") {
                  multi += `${temp}\n`;
                }
              }
            }
          }
          msg = `${multi}\n状态码：${res.status}`;
        } else if (typeof msgData === "string") {
          msg = msgData;
        }
      }

      if (res.status === 401) {
        msg = "身份失效";
        onClose = function() {
          // 重新登录
          store.commit(
            withNamespace(
              namespaces.account,
              typesAccount.mutations.SET_ACCOUNT
            )
          );
        };
      } else if (res.status === 403) {
        msg = "无权访问";
        onClose = function() {
          // 重新拉取用户数据
          store.dispatch(
            withNamespace(namespaces.account, typesAccount.actions.GET_ACCOUNT)
          );
        };
      }

      if (typeof msg !== "string" || msg === "") {
        msg = "请求出错! 状态码：" + res.status;
      }
    } else {
      msg = res.message ? res.message : JSON.stringify(res);
    }
  }

  Message({
    message: msg,
    type: "error",
    duration: 3000,
    onClose
  });
}

/**
 * 通用错误提示是否开启
 * @param res
 * @return {boolean}
 */
function commonErrorOpen(res) {
  if (res && res.config && res.config.url) {
    return !store.state.commonErrorClose.find(function(url) {
      return res.config.baseURL + url === res.config.url;
    });
  } else {
    return true;
  }
}

Vue.http.defaults.baseURL = process.env.VUE_APP_API_BASE_URL;
Vue.http.defaults.timeout = 20000;
Vue.http.interceptors.request.use(
  function(config) {
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);
Vue.http.interceptors.response.use(
  function(response) {
    if (response.status >= 400) {
      if (commonErrorOpen(response)) commonError(response);
      return Promise.reject(response);
    }
    return response;
  },
  function(error) {
    if (commonErrorOpen(error.response || error))
      commonError(error.response || error);
    return Promise.reject(error);
  }
);
const CSRFToken = cookies.getItem(cookieKeys.csrftoken);
if (CSRFToken) Vue.http.defaults.headers.common["X-CSRFToken"] = CSRFToken;

store.watch(
  state => {
    return state.account.user.token;
  },
  val => {
    setAuthorization();
  }
);

setAuthorization();
