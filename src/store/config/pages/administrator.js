export default {
  User: {
    parentIcon: "system-setting",
    path: "/user",
    componentPath: "/pages/User/index",
    include: {
      UserAdd: {
        title: "添加用户",
        path: "/user/add",
        componentPath: "/pages/User/Item"
      },
      UserEdit: {
        title: "编辑用户",
        path: "/user/edit",
        componentPath: "/pages/User/Item"
      }
    }
  }
};
