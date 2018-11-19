const shell = require("shelljs");

const path = require("path");

function resolve(dir) {
  return path.join(__dirname, "..", dir);
}

function build(path) {
  const dir = resolve(path);
  const app = resolve(path + "/js/app*.js");

  shell.rm("-rf", dir);
  shell.mkdir("-p", dir);
  shell.cp("-R", resolve("dist/*"), dir);
  shell.sed(
    "-i",
    "/api/cms",
    "https://private-3fcd8b-elementuicms.apiary-mock.com/api/cms",
    app
  );
}

build("docs");
build("server/dist/element-ui-cms");
