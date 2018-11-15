import listFn from "@/api/list-fn";

export const url = {
  index: "/course/"
};

export default {
  url,
  fn: {
    ...listFn(url.index)
  }
};
