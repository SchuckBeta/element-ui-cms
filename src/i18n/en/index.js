import importAll from "@/utils/import-all";

const i18n = {
  lang: {
    "zh-CN": "Chinese",
    en: "English"
  },
  tip: "Tip",
  loading: "Loading...",
  action: {
    refresh: "Refresh",
    add: "Add",
    edit: "Edit",
    view: "View",
    delete: "Delete",
    batch: "Batch {action}",
    cancel: "Cancel",
    confirm: "Confirm",
    reset: "Reset",
    submit: "Submit",
    collapse: "Collapse",
    expand: "Expand",
    query: "Query",
    pleaseSelect: "Please Select",
    yes: "Yes",
    no: "No",
    on: "On",
    off: "Off"
  },
  form: {
    dateRange: {
      separator: "To",
      start: "Start date",
      end: "End date"
    },
    queryKeyword: {
      label: "Keyword",
      placeholder: "ID, Title, Etc."
    }
  },
  modal: {
    delete: "Are you sure you want to delete?",
    canceled: "Canceled"
  },
  message: {
    success: {
      one: "{action} Success",
      batch: "Batch {action} Success"
    }
  },
  page: {
    header: {
      title: "CMS",
      switchRole: "Switch To {role}",
      menuLayout: "Switch To {layout} Menu",
      top: "Top",
      left: "Left",
      right: "Right"
    },
    footer: {
      info: "panhezeng@gmail.com"
    },
    list: {
      id: "ID",
      title: "Title",
      content: "Content",
      attachment: "Attachment",
      type: "Type",
      top: "Top",
      creator: "Creator",
      updatedTime: "Updated Time",
      status: "Status",
      action: "Action"
    }
  }
};

importAll(require.context("@/i18n/en/", false, /(?<!index)\.js$/)).forEach(
  module => {
    Object.assign(i18n, module.default);
  }
);

export default i18n;
