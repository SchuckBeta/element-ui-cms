import Vue from "vue";
import i18n from "@/i18n";
import store from "@/store";
import router from "@/router";
import App from "@/components/App";

import importAll from "@/utils/import-all";

importAll(require.context("@/utils/init/", true, /\.js$/));

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  i18n,
  el: "#app",
  components: { App },
  template: "<App/>",
  router,
  store
});
