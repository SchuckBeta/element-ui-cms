import Vue from "vue";
import VueI18n from "vue-i18n";
// import enElement from "element-ui/lib/locale/lang/en";
// import zhCNElement from "element-ui/lib/locale/lang/zh-CN";
import ElementLocale from "element-ui/lib/locale";
// import en from "@/i18n/en";
// import zhCN from "@/i18n/zh-CN";
import storageKeys from "@/store/config/storage-keys";
import store from "@/store";
import lang from "@/store/config/lang";

// Vue.use(VueI18n)

const locale = store.state.i18n.locale;

const messages = {
  [locale]: Object.assign(
    {},
    require(`@/i18n/${locale}`).default,
    require(`element-ui/lib/locale/lang/${locale}`).default
  )
};

// const messages = {
//   en: {
//     ...en,
//     ...enElement
//   },
//   "zh-CN": {
//     ...zhCN,
//     ...zhCNElement
//   }
// };

const i18n = new VueI18n({
  locale: locale,
  fallbackLocale: lang.zhCN,
  messages
});

// store.watch(
//   state => {
//     return state.i18n.locale;
//   },
//   val => {
//     setI18nLanguage(val);
//   }
// );

function setI18nLanguage(lang) {
  if (lang && i18n.locale !== lang) {
    i18n.locale = lang;
  }
  ElementLocale.i18n((key, value) => i18n.t(key, value));
  document.querySelector("html").setAttribute("lang", lang);
  document.title = String(i18n.t("page.header.title"));
  localStorage.setItem(storageKeys.lang, lang);
}

setI18nLanguage(locale);

Vue.i18n = i18n;
export default i18n;
