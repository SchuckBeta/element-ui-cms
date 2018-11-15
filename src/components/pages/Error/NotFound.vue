<template>
  <div class="not-found">
    <h1>{{tip}}</h1>
    <h3 v-if="redirectTip">{{redirectTip}}，<a href="#" @click.prevent="redirect">立即前往</a></h3>
  </div>
</template>
<script>
import MixinIndex from "./mixins";

export default {
  name: "NotFound",
  mixins: [MixinIndex],
  computed: {
    tip() {
      if (this.$route.query.title) {
        return `无权找到${this.$route.query.title}页`;
      } else {
        return "没有找到该页面";
      }
    }
  }
};
</script>
<style lang="less">
.not-found {
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
