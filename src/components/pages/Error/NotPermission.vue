<template>
  <div class="not-permission">
    <h1>{{tip}}</h1>
    <h3 v-if="redirectTip">{{redirectTip}}，<a href="#" @click.prevent="redirect">立即前往</a></h3>
  </div>
</template>
<script>
import MixinIndex from "./mixins";

export default {
  name: "NotPermission",
  mixins: [MixinIndex],
  computed: {
    tip() {
      if (this.$route.query.title) {
        return `无权访问${this.$route.query.title}页`;
      } else {
        return "无权访问该页";
      }
    }
  }
};
</script>
<style lang="less">
.not-permission {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #409eff;
  a {
    color: #67c23a;
  }

  a:hover {
    text-decoration: none;
  }
}
</style>
