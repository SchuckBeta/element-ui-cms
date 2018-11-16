const path = require("path");

function resolve(dir) {
  return path.join(__dirname, ".", dir);
}

module.exports = {
  chainWebpack: config => {
    config.when(
      process.env.NODE_ENV === "production",
      config => {
        config
          .plugin("HtmlWebpackIncludeAssetsPlugin")
          .use(require.resolve("html-webpack-include-assets-plugin"), [
            {
              assets: [
                "https://cdn.jsdelivr.net/npm/normalize.css@latest/normalize.min.css",
                "https://cdn.jsdelivr.net/combine/" +
                  [
                    "npm/vue@latest/dist/vue.min.js",
                    "npm/vue-router@latest/dist/vue-router.min.js",
                    "npm/vuex@latest/dist/vuex.min.js",
                    "npm/vue-i18n@latest/dist/vue-i18n.min.js",
                    "npm/axios@latest/dist/axios.min.js",
                    "npm/@panhezeng/vue-axios@latest/dist/vue-axios.min.js",
                    "npm/@panhezeng/vue-event-hub@latest/dist/vue-event-hub.min.js"
                  ].join()
              ],
              append: false,
              publicPath: false
            }
          ]);
      },
      config => {
        config
          .plugin("HtmlWebpackIncludeAssetsPlugin")
          .use(require.resolve("html-webpack-include-assets-plugin"), [
            {
              assets: [
                "https://cdn.jsdelivr.net/npm/normalize.css@latest/normalize.min.css",
                "https://cdn.jsdelivr.net/combine/" +
                  [
                    "npm/vue@latest/dist/vue.js",
                    "npm/vue-router@latest/dist/vue-router.js",
                    "npm/vuex@latest/dist/vuex.js",
                    "npm/vue-i18n@latest/dist/vue-i18n.js",
                    "npm/axios@latest/dist/axios.js",
                    "npm/@panhezeng/vue-axios@latest/dist/vue-axios.min.js",
                    "npm/@panhezeng/vue-event-hub@latest/dist/vue-event-hub.min.js"
                  ].join()
              ],
              append: false,
              publicPath: false
            }
          ]);
      }
    );

    config.devtool("source-map");

    const svgIcons = resolve("src/assets/img/icons/svg");
    config.module
      .rule("svg")
      .exclude.add(svgIcons)
      .end();

    config.module
      .rule("svgIcon")
      .test(/\.svg$/)
      .include.add(svgIcons)
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]"
      });
    config.externals({
      vue: "Vue",
      "vue-router": "VueRouter",
      vuex: "Vuex",
      "vue-i18n": "VueI18n",
      axios: "axios",
      "vue-axios": "VueAxios",
      "vue-event-hub": "VueEventHub"
    });
  },
  devServer: {
    host: "0.0.0.0",
    port: 8001,
    proxy: {
      "/api": {
        target: "https://private-3fcd8b-elementuicms.apiary-mock.com",
        ws: true,
        changeOrigin: true
      }
    }
  }
};
