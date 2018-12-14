import types from "@/config/vuex/types/pages";
import { pagesByPath, permissionTypes } from "@/config/pages";
import defaultPermissions from "@/store/modules/pages/permissions";
import initMenu from "@/store/modules/pages/utils/init-menu";

const state = {
  // 最终显示用的菜单数据
  menus: [],
  // 页面访问权限，key是页面路由path，value是permissionTypes，
  permissions: Object.assign({}, defaultPermissions),
  // 页面标签，[{path,query,title,},...]
  tabs: [],
  // 选中标签，{path,query};
  selectedTab: {
    path: "",
    query: {}
  },
  // 页面面包屑，key是页面路由path，value是breadcrumb页面面包屑数组[{title: menu.title, path: menu.path, index: fullIndex},...]，
  breadcrumbs: {}
};

const getters = {
  [types.getters.MENUS]: state => state.menus,
  [types.getters.GET_PERMISSION_TYPE]: state => path => {
    const permissions = state.permissions;
    const keys = Object.keys(permissions);
    const found = keys.find(element => element === path);
    if (found) {
      const currentPermission = permissions[found];
      if (
        Object.prototype.toString.call(currentPermission) === "[object Number]"
      ) {
        return currentPermission;
      }
    }
    return permissionTypes.notAllow;
  },
  [types.getters.GET_BREADCRUMB]: state => path => {
    const breadcrumbs = state.breadcrumbs;
    const keys = Object.keys(breadcrumbs);
    const found = keys.find(element => element === path);
    if (found) {
      const currentBreadcrumb = breadcrumbs[found];
      if (
        Object.prototype.toString.call(currentBreadcrumb) === "[object Array]"
      ) {
        return currentBreadcrumb;
      }
    }
    return [];
  }
};

const mutations = {
  [types.mutations.SET_PERMISSIONS](state, permissions) {
    state.permissions = Object.assign({}, defaultPermissions, permissions);
  },
  [types.mutations.SET_MENUS](state, currentRole) {
    Object.assign(state, initMenu(currentRole));
  },
  [types.mutations.SET_TABS](state, { path, query, remove, selectedTab }) {
    if (path && Object.prototype.toString.call(path) === "[object String]") {
      let tab;
      const index = state.tabs.findIndex(tab => tab.path === path);
      // 如果是已经存在的标签
      // 否则如果不是删除
      if (index > -1) {
        // 如果是删除标签
        // 否则是更新
        if (remove) {
          state.tabs.splice(index, 1);
          // 如果还有其他标签，并且当前选中的标签就是删除的标签
          if (state.tabs.length && state.selectedTab.path === path) {
            tab = state.tabs[state.tabs.length - 1];
          }
        } else {
          if (query !== undefined)
            state.tabs[index].query = Object.assign({}, query);
          tab = state.tabs[index];
        }
      } else if (!remove) {
        const routeConfig = pagesByPath[path];
        // 如果能找到path对应的路由配置，则继续
        if (routeConfig) {
          tab = {
            path,
            query: Object.assign({}, query),
            title: routeConfig.title
          };
          state.tabs.push(tab);
        }
      }
      if (selectedTab === undefined && tab) {
        selectedTab = tab;
      }
    }
    // 如果选中标签参数不等于当前选中标签，并且是已存在标签
    if (
      Object.prototype.toString.call(selectedTab) === "[object Object]" &&
      selectedTab.path !== state.selectedTab.path &&
      state.tabs.some(tab => tab.path === selectedTab.path)
    ) {
      state.selectedTab.query = Object.assign({}, selectedTab.query);
      state.selectedTab.path = selectedTab.path;
    }
  }
};

const actions = {};

export const key = "pages";

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true
};
