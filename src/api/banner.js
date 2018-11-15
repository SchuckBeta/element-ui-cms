import listFn from "@/api/list-fn";

export const url = {
  index: "/banner/"
};

export default {
  url,
  fn: listFn(url.index)
};
