<template>
  <el-tabs class="page-tab" v-model="selectedTabPath" type="card"
           @tab-click="tabClick"
           @tab-remove="tabRemove"
           :closable="tabs.length>1"
           v-if="tabs.length">
    <el-tab-pane
      v-for="(item) in tabs"
      :key="item.path"
      :label="tabTitle(item)"
      :name="item.path"
      :disabled="tabs.length<2"
    />
  </el-tabs>
</template>
<script>
import { mutations as mutationsTypes } from "@/store/config/vuex/types/pages";
import { namespaces } from "@/store/config/vuex/index";
import { createNamespacedHelpers } from "vuex";

const { mapState, mapMutations } = createNamespacedHelpers(namespaces.pages);

export default {
  name: "PageTab",
  mixins: [],
  components: {},
  props: {},
  data() {
    return {
      selectedTabPath: ""
    };
  },
  computed: {
    ...mapState(["tabs", "selectedTab"])
  },
  watch: {
    $route: {
      immediate: true,
      deep: true,
      handler(to) {
        this[mutationsTypes.SET_TABS](to);
      }
    }
  },
  created() {
    this.$store.watch(
      state => {
        return state.pages.selectedTab.path;
      },
      value => {
        this.selectedTabPath = value;
        if (this.$route.path !== value) {
          this.$nextTick(function() {
            this.$router.push(this.selectedTab);
          });
        }
      },
      {
        immediate: true
      }
    );
  },
  mounted() {
    this.$nextTick(function() {});
  },
  beforeDestroy() {},
  methods: {
    ...mapMutations([mutationsTypes.SET_TABS]),
    tabClick(tab) {
      this[mutationsTypes.SET_TABS]({ path: tab.name });
    },
    tabRemove(path) {
      this[mutationsTypes.SET_TABS]({ path, remove: true });
    },
    tabTitle(tab) {
      if (tab.query.view && tab.path.includes("edit")) {
        return (
          tab.title.replace(this.$t("action.edit"), "") + this.$t("action.view")
        );
      }
      return tab.title;
    }
  }
};
</script>
<style lang="less">
.page-tab {
  .el-tabs__nav {
    height: 24px;
    line-height: 24px;
  }
  .el-tabs__header {
    margin: 0;
  }
  .el-tabs__item {
    padding: 0 8px !important;
    height: 24px;
    line-height: 24px;
    .el-icon-close {
      margin-left: 0;
    }
    &.is-active.is-closable .el-icon-close,
    &.is-closable:hover .el-icon-close {
      width: 14px;
      margin-left: 5px;
    }
    &.is-active {
      color: #fff;
      background-color: #409eff;
      border-color: #409eff;
    }
  }
  .el-tabs__content {
    display: none;
  }
}
</style>
