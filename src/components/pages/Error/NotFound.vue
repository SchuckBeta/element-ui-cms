<template>
  <div class="not-found">
    <h1>{{tip}}</h1>
    <h3 v-if="redirectTip">{{redirectTip}}，<a href="#" @click.prevent="redirect">{{$t('page.content.goNow')}}</a></h3>
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
        return `${this.$t("page.content.notFound")}${this.$route.query.title}`;
      } else {
        return this.$t("page.content.notFound");
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
