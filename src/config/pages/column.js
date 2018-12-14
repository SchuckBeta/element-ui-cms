export default {
  WebColumn: {
    parentIcon: "web-content",
    path: "/web_column",
    componentPath: "/pages/Column/index",
    include: {
      WebColumnResource: {
        title: "资源管理",
        path: "/web_column/resource",
        componentPath: "/pages/Column/Resource/index",
        include: {
          WebColumnResourceAdd: {
            title: "添加资源",
            path: "/web_column/resource/add",
            componentPath: "/pages/Column/Resource/Item"
          },
          WebColumnResourceEdit: {
            title: "编辑资源",
            path: "/web_column/resource/edit",
            componentPath: "/pages/Column/Resource/Item"
          }
        }
      }
    }
  },
  AppColumn: {
    parentIcon: "app-content",
    path: "/app_column",
    componentPath: "/pages/Column/index",
    include: {
      AppColumnResource: {
        title: "资源管理",
        path: "/app_column/resource",
        componentPath: "/pages/Column/Resource/index",
        include: {
          AppColumnResourceAdd: {
            title: "添加资源",
            path: "/app_column/resource/add",
            componentPath: "/pages/Column/Resource/Item"
          },
          AppColumnResourceEdit: {
            title: "编辑资源",
            path: "/app_column/resource/edit",
            componentPath: "/pages/Column/Resource/Item"
          }
        }
      }
    }
  }
};
