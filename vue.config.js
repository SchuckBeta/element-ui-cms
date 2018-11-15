const path = require("path");

function resolve(dir) {
  return path.join(__dirname, ".", dir);
}

module.exports = {
  chainWebpack: config => {
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
    let cdnAssets;
    if (process.env.NODE_ENV === "production") {
      cdnAssets = [
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
      ];
    } else {
      cdnAssets = [
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
      ];
    }
    config
      .plugin("HtmlWebpackIncludeAssetsPlugin")
      .use(require.resolve("html-webpack-include-assets-plugin"), [
        {
          assets: cdnAssets,
          append: false,
          publicPath: false
        }
      ]);
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
    proxy: {
      "/api": {
        target: "https://private-3fcd8b-elementuiplus.apiary-mock.com",
        ws: true,
        changeOrigin: true
      }
    }
  }
};
