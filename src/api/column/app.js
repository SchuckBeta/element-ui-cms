import listFn from "@/api/list-fn";

export const url = {
  index: "/column/app/"
};

export default {
  url,
  fn: {
    ...listFn(url.index)
  }
};
