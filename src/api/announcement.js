import listFn from "@/api/list-fn";

export const url = {
  index: "/announcement/"
};

export default {
  url,
  fn: {
    ...listFn(url.index)
  }
};
