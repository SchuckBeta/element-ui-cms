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
  "https://private-3fcd8b-elementuicms.apiary-mock.com/api/cms",
  resolve("docs/js/app*.js")
);
