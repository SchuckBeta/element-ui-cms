// import Vue from 'vue'
import Router from "vue-router";
import {
  pages,
  pagesByPath,
  permissionTypes,
  pageAfterLogin
} from "@/store/config/pages";
import loadComponent from "@/utils/load-component";
import store from "@/store/index";
import { namespaces } from "@/store/config/vuex/index";
import { withNamespace } from "@/store/utils";
import typesAccount from "@/store/config/vuex/types/account";
import typesPages from "@/store/config/vuex/types/pages";
import { mutations as mutationsTypes } from "@/store/config/vuex/types/index";

// Vue.use(Router)

const routes = {
  Blank: {
    path: "",
    component: loadComponent("/layouts/Blank"),
    children: []
  },
  Basic: {
    path: "",
    component: loadComponent("/layouts/Basic"),
    children: []
  }
};

// 如果声明pages对象时就loadComponent，在组件内import pages使用路由配置对象时会报错，所有在这里才loadComponent
function setRouteComponent(data) {
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const page = data[key];
      if (Object.prototype.toString.call(page) === "[object Object]") {
        if (
          Object.prototype.toString.call(page.componentPath) ===
          "[object String]"
        ) {
          // console.log(page.componentPath)
          page.component = loadComponent(page.componentPath);
          if (!page.hasOwnProperty("parent")) {
            page.parent = "Basic";
          }
          routes[page.parent].children.push(page);
        }
      }
    }
  }
}

setRouteComponent(pages);

const router = new Router({
  mode: "history",
  routes: Object.values(routes)
});

// 检查当前访问的路由，是否有对应的路由配置，是否有权限访问，如果没有对应路由配置，或者不可访问，如何处理等
// 可根据项目需求修改这里的代码
function checkRoute(route) {
  return new Promise((resolve, reject) => {
    // 外部登录页
    const signIntHref = process.env.VUE_APP_LOGIN_URL;

    // 内部登录页
    const signInPath = pages.SignIn.path;

    // 允许登录，有外部登录页地址，或者有内部登录页路由配置和访问权限
    const canSignIn =
      signIntHref ||
      (pagesByPath[signInPath] &&
        store.getters[
          withNamespace(
            namespaces.pages,
            typesPages.getters.GET_PERMISSION_TYPE
          )
        ](signInPath) === permissionTypes.allow);

    // 账号数据是否已准备完毕
    const readyAccount =
      store.getters[
        withNamespace(namespaces.account, typesAccount.getters.READY_ACCOUNT)
      ];
    // 如果允许登录，但是账号数据没准备完毕
    // 否则进行权限和路由配置检查
    if (canSignIn && !readyAccount) {
      // 如果有token，则立即请求账号数据
      // 否则前往登录页
      if (store.state.account.user.token) {
        store.commit(mutationsTypes.LOADING_VISIBLE);
        store
          .dispatch(
            withNamespace(namespaces.account, typesAccount.actions.GET_ACCOUNT)
          )
          .then(() => {
            store.commit(mutationsTypes.LOADING_VISIBLE, { visible: false });
            checkRoute(route).then(resolve, reject);
          });
      } else {
        // 如果是外链
        if (signIntHref) {
          window.top.location.href = signIntHref;
        } else {
          resolve({ path: signInPath });
        }
      }
    } else {
      let { path } = route;
      // 如果当前访问路由路径是根'/'（url是host）, 则重定向
      if (path.length === 1) {
        if (signIntHref) {
          path = pageAfterLogin.path;
        } else {
          path = signInPath;
        }
      } else {
        path = path.slice(0, -1);
      }

      // 是否有当前访问路由对应的路由配置
      const currentRouteConfig = pagesByPath[path];

      // 错误页的重定向相关数据
      const redirectPageAfterLogin = `?redirect_title=${
        pageAfterLogin.title
      }&redirect_path=${pageAfterLogin.path}`;
      const redirectPageSignIn = `?redirect_title=${
        pages.SignIn.title
      }&redirect_path=${signInPath}&redirect_href=${signIntHref}`;
      let redirectPage = "";

      if (canSignIn) {
        // 如果账号数据已准备完毕，则重定向到登录后默认页
        // 否则重定向到登录页
        if (readyAccount) {
          redirectPage = redirectPageAfterLogin;
        } else {
          redirectPage = redirectPageSignIn;
        }
      }

      // 如果有当前访问路由的路由配置，则检查权限
      // 否则前往404页面
      if (currentRouteConfig) {
        // 当前路由的访问权限类型
        const currentPermissionType = store.getters[
          withNamespace(
            namespaces.pages,
            typesPages.getters.GET_PERMISSION_TYPE
          )
        ](path);
        // 如果当前路由的访问权限类型无值，或者值为不允许，或者类型为登录后可访问，但是未获得账号数据，则前往无权限页
        // 否则如果当前页是登录页，并且账号数据已准备完毕，则前往登录后的默认页
        // 否则直接前往当前路由页
        if (
          !currentPermissionType ||
          currentPermissionType === permissionTypes.notAllow ||
          (currentPermissionType === permissionTypes.afterLogin &&
            !readyAccount)
        ) {
          let pathNotPermission = pages.NotPermission.path + redirectPage;
          if (currentRouteConfig.title) {
            if (pathNotPermission.includes("?")) {
              pathNotPermission += "&";
            } else {
              pathNotPermission += "?";
            }
            pathNotPermission += `title=${currentRouteConfig.title}`;
          }
          resolve({ path: pathNotPermission });
        } else if (path === pages.SignIn.path && readyAccount) {
          resolve(pageAfterLogin);
        } else {
          resolve({ path });
        }
      } else {
        resolve({ path: pages.NotFound.path + redirectPage });
      }
    }
  });
}

store.watch(
  state => {
    return state.pages.permissions;
  },
  () => {
    if (router.currentRoute.path !== "/") {
      checkRoute(router.currentRoute).then(route => {
        // 如果经过检查后获得的路由页面和当前页不一致，则前往指定页
        if (route.path !== router.currentRoute.path) {
          router.replace(route);
        }
      });
    }
  },
  {
    deep: true
  }
);

router.beforeEach((to, from, next) => {
  checkRoute(to).then(route => {
    // 如果经过检查后获得的路由页面和当前页不一致，则前往指定页
    if (route.path !== to.path) {
      next(route);
    } else {
      next();
    }
  });
});

export default router;
