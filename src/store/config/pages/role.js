export default {
  Role: {
    parentIcon: "system-setting",
    path: "/role",
    componentPath: "/pages/Role/index",
    include: {
      RoleAdd: {
        title: "添加角色",
        path: "/role/add",
        componentPath: "/pages/Role/Item"
      },
      RoleEdit: {
        title: "编辑角色",
        path: "/role/edit",
        componentPath: "/pages/Role/Item"
      }
    }
  }
};
