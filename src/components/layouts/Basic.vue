<template>
    <div class="layout-basic">
        <page-header v-if="pageHeaderShow"/>
        <div :class="pageClassName">
            <div class="side" v-if="pageSideShow">
                <el-radio-group class="collapse-btn" v-model="collapse" v-if="navMenuMode === 'vertical'">
                    <el-radio-button :label="false" v-if="collapse"><i :class="collapseArrow[0]"></i></el-radio-button>
                    <el-radio-button :label="true" v-if="!collapse"><i :class="collapseArrow[1]"></i></el-radio-button>
                </el-radio-group>
                <nav-menu :collapse="collapse" :mode="navMenuMode"/>
            </div>
            <router-view class="main"/>
        </div>
        <page-footer v-if="pageFooterShow"/>
    </div>
</template>
<script>
import NavMenu from "@/components/common/NavMenu";
import PageHeader from "@/components/common/PageHeader";
import PageFooter from "@/components/common/PageFooter";
import { types as menuLayoutsTypes } from "@/store/config/menu-layouts";
import { mapState } from "vuex";

export default {
  name: "LayoutBasic",
  mixins: [],
  components: { NavMenu, PageHeader, PageFooter },
  props: {},
  data() {
    return {
      collapse: false
    };
  },
  computed: {
    ...mapState(["menuLayoutType"]),
    pageClassName() {
      let className = "page";
      if (this.menuLayoutType) {
        className += ` ${this.menuLayoutType}`;
        if (this.menuLayoutType !== menuLayoutsTypes.top && this.collapse) {
          className += " collapse";
        }
      }
      return className;
    },
    navMenuMode() {
      return this.menuLayoutType === menuLayoutsTypes.top
        ? "horizontal"
        : "vertical";
    },
    collapseArrow() {
      return this.menuLayoutType === menuLayoutsTypes.left
        ? ["el-icon-d-arrow-right", "el-icon-d-arrow-left"]
        : ["el-icon-d-arrow-left", "el-icon-d-arrow-right"];
    },
    pageHeaderShow() {
      if (this.$route.query.page_header === undefined) {
        return true;
      } else {
        return Number(this.$route.query.page_header);
      }
    },
    pageSideShow() {
      if (this.$route.query.page_side === undefined) {
        return true;
      } else {
        return Number(this.$route.query.page_side);
      }
    },
    pageFooterShow() {
      if (this.$route.query.page_footer === undefined) {
        return true;
      } else {
        return Number(this.$route.query.page_footer);
      }
    }
  },
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
.nav-item,
.nav-menu-item {
  .svg {
    margin-right: 5px;
  }
}

.layout-basic {
  min-height: 100%;
  display: flex;
  flex-direction: column;

  > .page {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    position: relative;
    background: #f0f2f5;

    > .side {
      background: #ffffff;
      position: relative;
      width: auto;
      height: auto;

      /*切换菜单成垂直布局的样式*/
      > .collapse-btn {
        position: absolute;
        top: 0;
        z-index: 1;
        right: -8px;
        width: 26px;
        overflow: hidden;
        .el-radio-button,
        .el-radio-button__inner {
          border-left: none !important;
          border-top: none !important;
          border-bottom: none !important;
          box-shadow: 2px 2px 50px 0 rgba(0, 21, 41, 0.08);
        }
        .el-radio-button__inner {
          padding: 20px 5px !important;
          border-radius: 4px;
        }
      }
    }
    &.top {
      > .side {
        padding: 0 10px;
        flex-basis: calc(100% - 20px);
        > .el-menu {
          & > .nav-item,
          .nav-menu-item {
            float: left;
          }
        }
      }
    }
    /*切换菜单成垂直布局的样式*/
    &.left,
    &.right {
      > .side {
        flex-basis: auto;
        .el-menu {
          width: 200px !important;
          border: none;
        }
      }
      > .main {
        flex-basis: calc(100% - 201px);
      }
    }
    &.collapse {
      > .side {
        .el-menu {
          width: 64px !important;
        }
      }
      > .main {
        flex-basis: calc(100% - 65px);
      }
    }
    &.left {
      flex-direction: row;
      > .side {
        .el-menu {
          /*box-shadow: 1px 0 2px 0 rgba(0, 21, 41, 0.08);*/
        }
      }
    }
    &.right {
      flex-direction: row-reverse;
      > .side {
        .el-menu {
          /*box-shadow: -1px 0 2px 0 rgba(0, 21, 41, 0.08);*/
        }
        > .collapse-btn {
          left: -8px;
          .el-radio-button,
          .el-radio-button__inner {
            border-radius: 4px;
            border-left: 1px solid #dcdfe6 !important;
            border-right: none !important;
            box-shadow: -2px 2px 50px 0 rgba(0, 21, 41, 0.08);
          }
        }
      }
    }
  }
}
</style>
