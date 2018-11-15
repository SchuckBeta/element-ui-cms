<template>
  <el-submenu class="nav-menu-item" :index="fullIndex" :data-menu-index="fullIndex" v-if="children.length">
    <template slot="title">
      <svg-icon :icon="icon?icon:'component'"/>
      <span slot="title">{{title}}</span>
    </template>
    <!--递归菜单组件-->
    <nav-menu-item v-for="(item, index) in children" :key="index"
                   :icon="item.icon" :fullIndex="`${fullIndex}-${index}`" :title="item.title" :path="item.path"
                   :children="item.children" v-on="$listeners"/>
  </el-submenu>
  <el-menu-item class="nav-item" :index="fullIndex" :data-menu-index="fullIndex" @click.native="handleMenuClick" v-else>
    <svg-icon :icon="icon?icon:'component'"/>
    <span slot="title">{{title}}</span>
  </el-menu-item>
</template>

<script>
export default {
  name: "NavMenuItem",
  mixins: [],
  components: {},
  props: {
    // 当前菜单项唯一标识
    fullIndex: {
      type: String,
      required: true,
      default: ""
    },
    icon: {
      type: String,
      required: true,
      default: ""
    },
    title: {
      type: String,
      required: true,
      default: ""
    },
    path: {
      type: String,
      required: true,
      default: ""
    },
    // 子菜单数组
    children: {
      type: Array,
      required: true,
      default() {
        return [];
      }
    }
  },
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
  methods: {
    handleMenuClick() {
      // 点击菜单，如果有路由，则前往
      if (this.path) {
        this.$emit("menu-click");
        this.$router.push({ path: this.path });
      }
    }
  }
};
</script>
<style lang="less">
.nav-menu-item {
}
</style>
