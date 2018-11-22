import cookies from "@panhezeng/utils/dist/cookies";
import cookieKeys from "@/store/config/cookie-keys";
import storage from "@panhezeng/utils/dist/storage";
import storageKeys from "@/store/config/storage-keys";
import types from "@/store/config/vuex/types/account";
import api from "@/api/account";
import apiRole from "@/api/role";
import moduleTypesPages from "@/store/config/vuex/types/pages";
import modulePages from "@/store/modules/pages/index.module";

function getToken() {
  const regex = /token=([^&]+)/gim;
  const tokenArray = window.location.search.match(regex);
  if (tokenArray && tokenArray.length) {
    return setTokenCookie(tokenArray[0].replace("token=", ""));
  } else {
    return cookies.getItem(cookieKeys.token);
  }
}

function setTokenCookie(token) {
  if (token) {
    cookies.setItem(
      cookieKeys.token,
      token,
      "",
      "/",
      process.env.VUE_APP_COOKIE_DOMAIN || ""
    );
    return token;
  }
  return "";
}

function removeTokenCookie() {
  cookies.removeItem(
    cookieKeys.token,
    "/",
    process.env.VUE_APP_COOKIE_DOMAIN || ""
  );
}

const state = {
  // 当前角色
  currentRole: {
    id: 0,
    name: "",
    // 审核权限
    is_review: 0,
    menus: []
  },
  // 后端传过来的用户数据
  user: {
    token: getToken(),
    id: 0,
    name: "",
    avatar: "",
    email: "",
    phone: "",
    organ_name: "",
    // 用户所有角色role
    groups: []
  }
};

const getters = {
  [types.getters.READY_ACCOUNT]: state => {
    // 如果state.user.token有值，并且有用户id，则表示账号数据已准备完毕
    return Boolean(
      Object.prototype.toString.call(state) === "[object Object]" &&
        state.user &&
        state.user.token &&
        state.user.id
    );
  }
};

// 如果从cookie或url得到的token和user数据的token不一致的情况出现第二次，则重置前往登录页，重新登录，如果是mock或者GET_ACCOUNT接口返回token异常，可能会出现这些情况，并且造成死循环，所以加了层逻辑
let tokenDifferentAgain = false;

const mutations = {
  [types.mutations.SET_ACCOUNT](
    state,
    { user, storage = true, reset = true } = {}
  ) {
    if (Object.prototype.toString.call(user) === "[object Object]") {
      // 如果user.token有值，并且state.user.token有值，并且user.token和state.user.token不相等，则清除user的id，触发重新拉取用户数据业务逻辑，用url或者cookie得到token
      if (user.token && state.user.token && user.token !== state.user.token) {
        reset = tokenDifferentAgain;
        if (!reset) {
          user.id = state.user.id = 0;
          user.token = state.user.token;
          setTokenCookie(user.token);
          tokenDifferentAgain = true;
          // 权限必须重置，才能触发重新路由检查
          modulePages.mutations[moduleTypesPages.mutations.SET_PERMISSIONS](
            modulePages.state
          );
        }
      } else {
        tokenDifferentAgain = false;
        if (state.user.token) user.token = state.user.token;
        setTokenCookie(user.token);
        // 如果account数据完备
        if (getters[types.getters.READY_ACCOUNT]({ user })) {
          reset = false;
          // 如果需要storage(本身来自storage的数据则不用再存了)
          if (storage) {
            // 如果勾选了记住我，则身份数据存localStorage，否则存sessionStorage
            if (localStorage.getItem(storageKeys.remember)) {
              localStorage.setItem(storageKeys.user, JSON.stringify(user));
            } else {
              sessionStorage.setItem(storageKeys.user, JSON.stringify(user));
            }
          }
          // 初始化菜单，页面权限，页面面包屑数据
          // 相关数据都处理完后，再赋值给state
          Object.assign(state, { user, currentRole: user.groups[0] });
          modulePages.mutations[moduleTypesPages.mutations.SET_MENUS](
            modulePages.state,
            state.currentRole
          );
        }
      }
    }
    // 如果重置为真
    if (reset) {
      localStorage.removeItem(storageKeys.user);
      sessionStorage.removeItem(storageKeys.user);
      removeTokenCookie();
      state.user.token = "";
      // 权限必须重置，才能触发重新路由检查
      modulePages.mutations[moduleTypesPages.mutations.SET_PERMISSIONS](
        modulePages.state
      );
    }
  },
  [types.mutations.SWITCH_ROLE](state, { role, roleMenu }) {
    Object.assign(role, roleMenu);
    state.currentRole = role;
    modulePages.mutations[moduleTypesPages.mutations.SET_PERMISSIONS](
      modulePages.state,
      state.currentRole
    );
  }
};

// 尝试用浏览器storage的用户数据初始化
mutations[types.mutations.SET_ACCOUNT](state, {
  user: Object.assign(
    {},
    storage.getItemByJSONParse(storageKeys.user) ||
      storage.getItemByJSONParse(storageKeys.user, "sessionStorage")
  ),
  storage: false,
  reset: false
});

const actions = {
  [types.actions.SIGN_IN](context, data) {
    return api.fn.signIn(data).then(response => {
      context.commit(types.mutations.SET_ACCOUNT, { user: response.data });
    });
  },
  [types.actions.UPDATE_ACCOUNT](context, data) {
    return api.fn.update(data).then(response => {
      context.commit(types.mutations.SET_ACCOUNT, { user: response.data });
    });
  },
  [types.actions.GET_ACCOUNT](context) {
    return api.fn.account(state.user.token).then(response => {
      context.commit(types.mutations.SET_ACCOUNT, { user: response.data });
    });
  },
  [types.actions.GET_ROLE_MENU](context, role) {
    return apiRole.fn.retrieve(role.id).then(response => {
      context.commit(types.mutations.SWITCH_ROLE, {
        role,
        roleMenu: response.data
      });
    });
  }
};

export const key = "account";

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true
};
