<template>
  <el-breadcrumb class="page-breadcrumb" separator="/" v-if="pageBreadcrumb.length > 1">
    <template v-for="(item, index) in pageBreadcrumb">
      <el-breadcrumb-item :key="index" v-if="item.title">
        {{breadcrumbTitle(item.title)}}
      </el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>
<script>
import { getters as gettersTypes } from "@/store/config/vuex/types/pages";
import { namespaces } from "@/store/config/vuex/index";
import { createNamespacedHelpers } from "vuex";

const { mapGetters } = createNamespacedHelpers(namespaces.pages);

export default {
  name: "PageBreadcrumb",
  mixins: [],
  components: {},
  inheritAttrs: false,
  props: {
    // 面包屑数组
    breadcrumb: {
      type: Array,
      default() {
        return [];
      }
    },
    // 是否把传入的面包屑数组追加到根据路由路径获取的面包屑数组
    concat: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters([gettersTypes.GET_BREADCRUMB]),
    // 当前页面的面包屑数组
    pageBreadcrumb() {
      // 如果是追加,则追加,否则直接返回
      if (this.concat) {
        return this[gettersTypes.GET_BREADCRUMB](this.$route.path).concat(
          this.breadcrumb
        );
      } else {
        return this.breadcrumb;
      }
    }
  },
  watch: {},
  created() {},
  mounted() {
    this.$nextTick(function() {});
  },
  beforeDestroy() {},
  methods: {
    breadcrumbTitle(title) {
      if (this.$route.query.view && this.$route.path.includes("edit")) {
        return (
          title.replace(this.$t("action.edit"), "") + this.$t("action.view")
        );
      }
      return title;
    }
  }
};
</script>
<style lang="less">
.page-breadcrumb {
}
</style>
