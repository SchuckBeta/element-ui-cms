const shell = require("shelljs");

const path = require("path");

function resolve(dir) {
  return path.join(__dirname, "..", dir);
}

shell.rm("-rf", resolve("docs"));
shell.mkdir("-p", resolve("docs"));
shell.cp("-R", resolve("dist/*"), resolve("docs"));
shell.sed(
  "-i",
  "/api/cms",
  "https://easy-mock.com/mock/5ae1806b6ad7b17bb7d2cb58/element-ui-plus/api/cms",
  resolve("docs/static/js/app*.js")
);
