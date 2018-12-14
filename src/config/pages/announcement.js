export default {
  Announcement: {
    parentIcon: "web-content",
    path: "/announcement",
    componentPath: "/pages/Announcement/index",
    include: {
      AnnouncementAdd: {
        title: "添加公告",
        path: "/announcement/add",
        componentPath: "/pages/Announcement/Item"
      },
      AnnouncementEdit: {
        title: "编辑公告",
        path: "/announcement/edit",
        componentPath: "/pages/Announcement/Item"
      }
    }
  }
};
