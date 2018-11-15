export default {
  WebColumn: {
    parentIcon: "web-content",
    path: "/web_column",
    componentPath: "/pages/Column/index",
    include: {
      WebColumnAdd: {
        title: "添加栏目",
        path: "/web_column/add",
        componentPath: "/pages/Column/Item"
      },
      WebColumnEdit: {
        title: "编辑栏目",
        path: "/web_column/edit",
        componentPath: "/pages/Column/Item"
      },
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
      AppColumnAdd: {
        title: "添加栏目",
        path: "/app_column/add",
        componentPath: "/pages/Column/Item"
      },
      AppColumnEdit: {
        title: "编辑栏目",
        path: "/app_column/edit",
        componentPath: "/pages/Column/Item"
      },
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
