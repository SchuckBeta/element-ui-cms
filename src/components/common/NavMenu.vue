<template>
    <el-menu class="nav-menu" ref="menu" v-bind="$attrs"
             :mode="mode"
             :unique-opened="true"
             :default-active="defaultActive"
             v-if="menus.length">
        <nav-menu-item v-for="(item, index) in menus" :key="index"
                       :icon="item.icon" :fullIndex="String(index)" :title="item.title" :path="item.path"
                       :children="item.children" @menu-click="handleMenuClick"/>
    </el-menu>
</template>
<script>
import NavMenuItem from "@/components/common/NavMenuItem";
import { getters as gettersTypes } from "@/config/vuex/types/pages";
import { namespaces } from "@/config/vuex/index";
import { createNamespacedHelpers } from "vuex";

const { mapGetters } = createNamespacedHelpers(namespaces.pages);

export default {
  name: "NavMenu",
  components: { NavMenuItem },
  inheritAttrs: false,
  props: {
    mode: {
      type: String,
      default: "vertical"
    }
  },
  data() {
    return {
      // 当前选中菜单项的唯一标识
      defaultActive: "0",
      menuClick: false
    };
  },
  computed: {
    ...mapGetters({
      menus: gettersTypes.MENUS,
      getBreadcrumb: gettersTypes.GET_BREADCRUMB
    })
  },
  watch: {
    $route: {
      immediate: true,
      deep: true,
      handler(to) {
        // 如果不是点击菜单触发路由改变，则查找当前路由匹配的菜单项index，赋值选中状态
        if (!this.menuClick) {
          this.defaultActiveUpdate(to);
        }
        this.menuClick = false;
      }
    }
  },
  methods: {
    defaultActiveUpdate(route) {
      const breadcrumb = this.getBreadcrumb(route.path);
      // 如果获得了当前路由的面包屑数据，则选中面包屑终端节点菜单
      if (breadcrumb.length) {
        this.defaultActive = breadcrumb[breadcrumb.length - 1].index;
      } else {
        this.defaultActive = "0";
      }
    },
    handleMenuClick() {
      this.menuClick = true;
    }
  }
};
</script>
<style lang="less">
.nav-menu {
}
</style>
