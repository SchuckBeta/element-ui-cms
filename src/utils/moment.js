import moment from "@panhezeng/utils/dist/moment";
import store from "@/store";

const locale = store.state.i18n.locale;

// store.watch(
//   state => {
//     return state.i18n.locale;
//   },
//   val => {
//     moment.i18n(val);
//   }
// );

moment.i18n(locale);

export default moment;
