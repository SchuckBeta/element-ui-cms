import { pages, permissionType } from "@/store/config/pages/index";

let dev = {};
if (process.env.NODE_ENV === "development") {
  dev = require(`./${process.env.NODE_ENV}.js`).default;
}

export default {
  [pages.NotFound.path]: permissionType.allow,
  [pages.NotPermission.path]: permissionType.allow,
  [pages.SignIn.path]: permissionType.allow,
  ...dev
};
