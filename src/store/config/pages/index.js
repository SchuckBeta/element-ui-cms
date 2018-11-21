import importAll from "@/utils/import-all";

// 页面访问权限类型
export const permissionTypes = {
  afterLogin: 1,
  allow: 2,
  notAllow: 0
};
// 页面路由配置，默认使用路由名为key的对象，是因为适合点语法
// key是路由名
// value对象里的path是路由路径，componentPath是组件加载路径，title是页面标题，如果后端menu数据有，则这里可以不写
// path必须和菜单menu的path一致
// value对象里的include是该页面包含的子页面，子页面可以继续包含子页面
// 注意所有key和path必须是唯一的，包括所有子孙页面
export const pages = {
  NotFound: {
    path: "/error/not-found",
    componentPath: "/pages/Error/NotFound",
    parent: "Blank"
  },
  NotPermission: {
    path: "/error/not-permission",
    componentPath: "/pages/Error/NotPermission",
    parent: "Blank"
  },
  SignIn: {
    title: "登录",
    path: "/sign-in",
    componentPath: "/pages/Account/SignIn",
    parent: "Blank"
  },
  Space: {
    title: "个人中心",
    path: "/space",
    componentPath: "/pages/Account/index",
    icon: "people-fill"
  },
  Dashboard: {
    title: "工作台",
    path: "/dashboard",
    componentPath: "/pages/Dashboard/index",
    icon: "home-fill"
  }
};

// 加载独立的页面模块配置
importAll(
  require.context("@/store/config/pages/", false, /(?<!index)\.js$/)
).forEach(module => {
  Object.assign(pages, module.default);
});

// 以路由路径为key的路由配置对象，来自上面的pages，上面key是路由名，这个key是路由路径，这个对象不适用点语法
export const pagesByPath = {};

/**
 * 递归页面路由配置，设置pagesByPath
 * @param data 页面配置数据
 * @param include 是否为子页面配置
 */
function setPagesByPath(data, include = false) {
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const page = data[key];
      if (Object.prototype.toString.call(page) === "[object Object]") {
        // 如果pagesByPath已有和页面路径同名属性，或者是子页面配置并且pages已有和key同名属性，或者则报错，说明配置有问题
        // 否则赋值
        if (
          pagesByPath.hasOwnProperty(page.path) ||
          (include && pages.hasOwnProperty(key))
        ) {
          throw new Error(
            JSON.stringify({
              err:
                "存在同name或同path的页面配置，请修改配置, p1是已存在配置，p2是新加配置",
              p1: pages[key],
              p2: page
            })
          );
        } else {
          if (
            process.env.VUE_APP_ROUTE_PATH &&
            !String(page.path).includes(process.env.VUE_APP_ROUTE_PATH)
          ) {
            // 给路由配置路径加上统一路径
            page.path = process.env.VUE_APP_ROUTE_PATH + page.path;
          }
          // 去掉最后的斜杠
          if (page.path.slice(-1) === "/") page.path = page.path.slice(0, -1);
          // 赋值页面路由名
          page.name = key;
          pagesByPath[page.path] = page;
          // 如果是子页面配置，则在页面配置对象顶层增加一份所有子孙页面路由配置的引用
          if (include) pages[key] = page;
        }
        if (
          Object.prototype.toString.call(page.include) === "[object Object]" &&
          Object.keys(page.include).length
        ) {
          setPagesByPath(page.include, true);
        }
      }
    }
  }
}

setPagesByPath(pages);

// 登录后前往的默认页面
export const pageAfterLogin = pages.Dashboard;
