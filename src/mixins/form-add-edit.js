import MixinForm from "@/mixins/form";
import MixinOption from "@/mixins/options";

import getObjectItemByPath from "@panhezeng/utils/dist/get-object-item-by-path";
import { pages } from "@/store/config/pages";
import { mutations as mutationsTypes } from "@/store/config/vuex/types/index";
import { mutations as mutationsTypesPages } from "@/store/config/vuex/types/pages";
import { mapMutations, createNamespacedHelpers } from "vuex";
import { namespaces } from "@/store/config/vuex/index";

const modulePages = createNamespacedHelpers(namespaces.pages);

export default {
  mixins: [MixinForm, MixinOption],
  data() {
    return {
      pages,
      // 从列表项接口返回对象中获取数据的path
      resPathOfItem: "data",
      // 提交成功后提示消息，如果不需要覆写为''
      submitSuccessMessage: "提交成功",
      // 提交成功后，返回上一页
      afterSubmitBack: true
    };
  },
  computed: {
    disabled() {
      return Boolean(this.$route.query.disabled);
    },
    id() {
      return this.$route.query.id;
    },
    // api相关的默认数据
    apiRetrieve() {
      return this.api.fn.retrieve;
    },
    apiUpdate() {
      return this.api.fn.update;
    },
    apiCreate() {
      return this.api.fn.create;
    }
  },
  created() {
    // 如果有id, 则请求表单初始数据
    if (this.id) {
      // 显示加载提示
      this.$nextTick(function() {
        this[mutationsTypes.LOADING_VISIBLE]({
          options: { target: ".page-add-edit .add-edit-main" }
        });
      });
      this.apiRetrieve(this.id).then(response => {
        const data = getObjectItemByPath(response, this.resPathOfItem);
        Object.assign(this.formData, data);
        // 移除加载提示
        this.$nextTick(function() {
          this[mutationsTypes.LOADING_VISIBLE]({ visible: false });
        });
        if (
          Object.prototype.toString.call(this["retrieveFinish"]) ===
          "[object Function]"
        ) {
          this["retrieveFinish"]();
        }
        this.$emit("retrieve-finish", response);
      });
    }
  },
  methods: {
    ...mapMutations([mutationsTypes.LOADING_VISIBLE]),
    ...modulePages.mapMutations([mutationsTypesPages.SET_TABS]),
    pickerOoptions({
      disabledDateEdit,
      disabledDate = Date.now(),
      disabledDateOffset = 0
    } = {}) {
      if (this.id) {
        if (disabledDateEdit === undefined) {
          return {};
        } else {
          return {
            disabledDate(time) {
              return (
                time.getTime() <
                disabledDateEdit + 24 * 60 * 60 * 1000 * disabledDateOffset
              );
            }
          };
        }
      } else {
        return {
          disabledDate(time) {
            return (
              time.getTime() <
              disabledDate + 24 * 60 * 60 * 1000 * disabledDateOffset
            );
          }
        };
      }
    },
    back() {
      const path = this.$route.path;
      if (
        this.$route.query.back_push ||
        history.length < 3 ||
        this.$store.state.pages.tabs.length < 2
      ) {
        this.$router.push({ path: path.replace(/(\/add|\/edit).*$/, "") });
      } else {
        this.$router.back();
      }
      this[mutationsTypesPages.SET_TABS]({ path, remove: true });
    },
    async submit(form) {
      try {
        if (form) {
          await form.validate();
        }
        this.formSubmitLoading = true;
        // 如果有提交前拦截异步函数，则执行
        if (
          Object.prototype.toString.call(this["beforeSubmit"]) ===
          "[object Function]"
        ) {
          // 传入表单数据，可以对提交数据进行预处理，如果函数return Promise.reject(new Error())，则不执行之后代码
          // 除了这种方式，还可以在api方法那里对提交数据进行预处理，或者不使用此submit函数
          try {
            await this["beforeSubmit"]();
          } catch (e) {
            this.formSubmitLoading = false;
            return false;
          }
        }
        let res = {};
        if (this.id) {
          res = await this.apiUpdate(this.id, this.formData);
        } else {
          res = await this.apiCreate(this.formData);
        }
        // 如果有提交后拦截异步函数，则执行
        if (
          Object.prototype.toString.call(this["afterSubmit"]) ===
          "[object Function]"
        ) {
          try {
            await this["afterSubmit"](res);
          } catch (e) {
            this.formSubmitLoading = false;
            return false;
          }
        }
        // 提交成功事件通知
        this.$emit("success", res);
        if (this.submitSuccessMessage)
          this.$message({
            message: this.submitSuccessMessage,
            type: "success"
          });

        if (this.afterSubmitBack) this.back();
        this.formSubmitLoading = false;
      } catch (e) {
        this.formSubmitLoading = false;
        return false;
      }
    }
  }
};
