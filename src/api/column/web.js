import listFn from "@/api/list-fn";

export const url = {
  index: "/column/web/"
};

export default {
  url,
  fn: {
    ...listFn(url.index)
  }
};
