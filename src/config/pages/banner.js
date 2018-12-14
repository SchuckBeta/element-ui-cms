export default {
  Banner: {
    parentIcon: "web-content",
    path: "/banner",
    componentPath: "/pages/Banner/index",
    include: {
      BannerAdd: {
        title: "添加轮播",
        path: "/banner/add",
        componentPath: "/pages/Banner/Item"
      },
      BannerEdit: {
        title: "编辑轮播",
        path: "/banner/edit",
        componentPath: "/pages/Banner/Item"
      }
    }
  }
};
