import importAll from "@/utils/import-all";

const i18n = {
  lang: {
    "zh-CN": "中文",
    en: "英文"
  },
  tip: "提示",
  loading: "数据加载中...",
  action: {
    refresh: "刷新",
    add: "添加",
    edit: "编辑",
    view: "详情",
    delete: "删除",
    batch: "批量{action}",
    cancel: "取消",
    confirm: "确定",
    reset: "重置",
    submit: "提交",
    collapse: "收起",
    expand: "展开",
    query: "查询",
    pleaseSelect: "请选择",
    yes: "是",
    no: "否",
    on: "上线",
    off: "下线"
  },
  form: {
    dateRange: {
      separator: "至",
      start: "开始日期",
      end: "结束日期"
    },
    queryKeyword: {
      label: "关键字",
      placeholder: "ID、标题等"
    }
  },
  modal: {
    delete: "确认要删除？",
    canceled: "已取消"
  },
  message: {
    success: {
      one: "{action}成功",
      batch: "批量{action}成功"
    }
  },
  page: {
    header: {
      title: "内容管理系统",
      switchRole: "切换成{role}",
      menuLayout: "切换成{layout}菜单",
      top: "顶部",
      left: "左侧",
      right: "右侧"
    },
    footer: {
      info: "panhezeng@gmail.com"
    },
    list: {
      id: "ID",
      title: "标题",
      order: "顺序",
      content: "内容",
      picture: "图片",
      attachment: "附件",
      client: "终端",
      type: "类型",
      top: "置顶",
      creator: "创建者",
      updatedTime: "更新时间",
      status: "状态",
      action: "操作"
    }
  }
};

importAll(require.context("@/i18n/zh-CN/", false, /(?<!index)\.js$/)).forEach(
  module => {
    Object.assign(i18n, module.default);
  }
);

export default i18n;
