import { pages, permissionTypes } from "@/config/pages/index";

let dev = {};
if (process.env.NODE_ENV === "development") {
  dev = require(`./${process.env.NODE_ENV}.js`).default;
}

export default {
  [pages.NotFound.path]: permissionTypes.allow,
  [pages.NotPermission.path]: permissionTypes.allow,
  [pages.SignIn.path]: permissionTypes.allow,
  ...dev
};
