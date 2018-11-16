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
    delete: "Delete",
    details: "Details",
    enable: "Enable",
    disabled: "Disabled",
    batch: "Batch {action}",
    cancel: "Cancel",
    confirm: "Confirm",
    reset: "Reset",
    submit: "Submit",
    search: "Search",
    selectAll: "Select All",
    close: "Close",
    collapse: "Collapse",
    expand: "Expand",
    query: "Query",
    pleaseSelect: "Please Select",
    yes: "Yes",
    no: "No",
    on: "On",
    off: "Off",
    moveUp: "Move Up",
    moveDown: "Move Down"
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
    },
    suggestion: "Suggestion"
  },
  modal: {
    delete: "Are you sure you want to delete?",
    canceled: "Canceled"
  },
  message: {
    success: {
      one: "{action} Success",
      batch: "Batch {action} Success"
    },
    warning: {
      noDetails: "No Details",
      added: "Added"
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
      action: "Action",
      role: "Role",
      name: "Name",
      organName: "Organ Name",
      phone: "Phone",
      listOfSelectedResources: "List Of Selected Resources",
      selectResource: "Select Resource",
      about: "About",
      contact: "Contact",
      link: "Link",
      logo: "Logo"
    }
  }
};

importAll(require.context("@/i18n/en/", false, /(?<!index)\.js$/)).forEach(
  module => {
    Object.assign(i18n, module.default);
  }
);

export default i18n;
