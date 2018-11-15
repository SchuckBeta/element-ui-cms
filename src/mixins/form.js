import formRules from "@/store/config/form-rules";

export default {
  data() {
    return {
      formData: {},
      formSubmitLoading: false,
      formRules
    };
  },
  methods: {
    reset(form) {
      form.resetFields();
    },
    resetField(formItem) {
      formItem.resetField();
    },
    clearValidate(form, props) {
      form.clearValidate(props);
    }
  }
};
