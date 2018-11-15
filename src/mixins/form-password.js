import MixinForm from "@/mixins/form";
import "@/assets/img/icons/svg/attention-forbid.svg";
import "@/assets/img/icons/svg/attention.svg";

export default {
  mixins: [MixinForm],
  data() {
    return {
      passwordType: "password"
    };
  },
  computed: {
    passwordIcon() {
      if (this.passwordType === "password") {
        return "attention-forbid";
      } else {
        return "attention";
      }
    }
  },
  methods: {
    passwordTypeChange() {
      if (this.passwordType === "password") {
        this.passwordType = "text";
      } else {
        this.passwordType = "password";
      }
    }
  }
};
