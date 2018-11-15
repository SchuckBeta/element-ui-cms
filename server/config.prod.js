const proxy = "https://private-3fcd8b-elementuiplus.apiary-mock.com";
module.exports = {
  port: 9000,
  directory: "dist",
  spa: "index.html",
  rewrite: [
    {
      from: "/api/*",
      to: `${proxy}/api/$1`
    }
  ]
};
