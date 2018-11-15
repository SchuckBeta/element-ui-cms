export default {
  Administrator: {
    parentIcon: "system-setting",
    path: "/administrator",
    componentPath: "/pages/Administrator/index",
    include: {
      AdministratorAdd: {
        title: "添加管理员",
        path: "/administrator/add",
        componentPath: "/pages/Administrator/Item"
      },
      AdministratorEdit: {
        title: "编辑管理员",
        path: "/administrator/edit",
        componentPath: "/pages/Administrator/Item"
      }
    }
  }
};
