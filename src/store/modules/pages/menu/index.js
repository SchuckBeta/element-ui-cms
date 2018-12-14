import { pages } from "@/config/pages/index";

let dev = [];
if (process.env.NODE_ENV === "development") {
  dev = require(`./${process.env.NODE_ENV}.js`).default;
}

export default [pages.Dashboard, pages.Space, ...dev];
