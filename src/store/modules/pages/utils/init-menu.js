import { pages, pagesByPath, permissionType } from "@/store/config/pages/index";
import defaultPermissions from "@/store/modules/pages/permissions/index";
import defaultMenus from "@/store/modules/pages/menu/index";

function sortMenu(a, b) {
  return parseInt(a.order || 0) - parseInt(b.order || 0);
}

function recursiveIncludePages(
  data,
  fullIndex,
  breadcrumb,
  breadcrumbs,
  permissions
) {
  if (
    Object.prototype.toString.call(data) === "[object Object]" &&
    Object.keys(data).length
  ) {
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const page = data[key];
        // 克隆父页面的面包屑数据
        const cloneBreadcrumb = breadcrumb.slice();
        if (page) {
          if (page.path) {
            // 所有子页面都选中此菜单项
            page.index = fullIndex;
            // 克隆父级面包屑节点数据
            cloneBreadcrumb[cloneBreadcrumb.length - 1] = Object.assign(
              {},
              cloneBreadcrumb[cloneBreadcrumb.length - 1]
            );
            // 生成当前页面的面包屑数据
            cloneBreadcrumb.push(page);
            breadcrumbs[page.path] = cloneBreadcrumb;
            // 当前页面权限
            permissions[page.path] = permissionType.afterLogin;
          }
          // 如果包括子页面，则进一步处理
          if (
            Object.prototype.toString.call(page.include) ===
              "[object Object]" &&
            Object.keys(page.include).length
          ) {
            recursiveIncludePages(
              page.include,
              fullIndex,
              cloneBreadcrumb,
              breadcrumbs,
              permissions
            );
          }
        }
      }
    }
  }
}

/**
 * 递归菜单
 * @param data 菜单项数组
 * @param permissions 页面权限对象
 * @param breadcrumbs 页面面包屑对象
 * @param breadcrumb 页面面包屑路径数组
 * @param fullIndex 当前菜单项目的完整索引，包括祖先菜单项的索引
 * @param level 当前递归的层级
 * @param parent 父菜单项
 */
function recursiveMenu(
  data,
  permissions,
  breadcrumbs,
  breadcrumb = [],
  fullIndex = "",
  level = 0,
  parent = {}
) {
  if (
    Object.prototype.toString.call(data) === "[object Array]" &&
    data.length
  ) {
    for (let i = 0, len = data.length; i < len; i++) {
      const menu = data[i];
      // 第一层breadcrumb和fullIndex初始化
      // 否则如果是第二层以后非第一个元素，则需要去掉前一个兄弟元素
      if (level === 0) {
        breadcrumb = [];
        fullIndex = "";
      } else if (i) {
        const fullIndexArray = String(fullIndex).split("-");
        fullIndexArray.pop();
        fullIndex = fullIndexArray.join("-") + "-";
        breadcrumb = breadcrumb.slice();
        breadcrumb.pop();
      }
      // 菜单项的唯一标识
      fullIndex = `${fullIndex}${i}`;
      menu.index = fullIndex;
      // 菜单项打开页面的面包屑
      let pageBreadcrumb = { title: menu.title, index: fullIndex };
      breadcrumb.push(pageBreadcrumb);
      let page;
      // 获得菜单项对应的页面配置，支持两种方式，路由名name和路由路径path，后端语言命名通常不使用驼峰命名，但路由路径url命名规范前后端一样，为了不造成不必要的麻烦，推荐使用path
      if (menu.path) {
        // 去掉最后的斜杠
        if (menu.path.slice(-1) === "/") menu.path = menu.path.slice(0, -1);
        page = pagesByPath[menu.path];
      }
      if (!page && menu.name) {
        page = pages[menu.name];
      }
      // 如果菜单项有对应的页面配置，即点击该菜单项可打开页面
      if (page) {
        if (menu.title) page.title = menu.title;
        if (page.icon) menu.icon = page.icon;
        menu.name = page.name;
        menu.path = page.path;
        permissions[page.path] = permissionType.afterLogin;
        pageBreadcrumb.path = page.path;
        breadcrumbs[page.path] = breadcrumb;
        // 如果父菜单没有icon
        if (!parent.icon) {
          // 如果子菜单有parentIcon
          if (page.parentIcon) parent.icon = page.parentIcon;
        }
      }
      if (
        Object.prototype.toString.call(menu.children) === "[object Array]" &&
        menu.children.length
      ) {
        menu.children.sort(sortMenu);
        recursiveMenu(
          menu.children,
          permissions,
          breadcrumbs,
          breadcrumb,
          `${fullIndex}-`,
          level + 1,
          menu
        );
      } else {
        // 递归处理菜单数组终端节点对应的页面的子孙页面
        if (page)
          recursiveIncludePages(
            page.include,
            fullIndex,
            breadcrumb,
            breadcrumbs,
            permissions
          );
      }
    }
  }
}

export default function(currentRole) {
  // 页面权限
  const permissions = Object.assign({}, defaultPermissions);
  // 页面面包屑
  const breadcrumbs = {};

  // 菜单
  let menus = defaultMenus.slice();

  if (Object.prototype.toString.call(currentRole) === "[object Object]") {
    // 后端菜单模式，是指后端传当前用户的菜单数据，加上前端默认菜单数据，生成最终显示菜单
    if (
      Object.prototype.toString.call(currentRole.menus) === "[object Array]"
    ) {
      menus = menus.concat(currentRole.menus).sort(sortMenu);
    }
  }

  recursiveMenu(menus, permissions, breadcrumbs);
  return { menus, breadcrumbs, permissions };
}
