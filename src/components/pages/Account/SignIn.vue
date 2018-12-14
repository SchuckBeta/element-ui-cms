<template>
  <div class="sign-in">
    <user-name-password/>
  </div>
</template>
<script>
// 把通用登录界面封装为一个组件，根据需要可以扩展，比如有二次验证需求，可以再增加一个two-step组件，在data设置场景状态，切换组件显示
import UserNamePassword from "./components/UserNamePassword";

import { pages } from "@/config/pages";

export default {
  name: pages.SignIn.name,
  mixins: [],
  components: { UserNamePassword },
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.$nextTick(function() {});
  },
  beforeDestroy() {},
  methods: {}
};
</script>
<style lang="less">
.sign-in {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
