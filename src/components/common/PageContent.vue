<template>
  <div class="page-content">
    <div class="content-header" v-if="headerShow">
      <page-tab v-bind="$attrs" v-if="headerTab"/>
      <page-breadcrumb v-bind="$attrs" v-if="headerBreadcrumb"/>
    </div>
    <div class="content-main">
      <slot/>
    </div>
  </div>
</template>
<script>
import PageBreadcrumb from "@/components/common/PageBreadcrumb";
import PageTab from "@/components/common/PageTab";

export default {
  name: "PageContent",
  mixins: [],
  components: { PageBreadcrumb, PageTab },
  inheritAttrs: false,
  props: {
    // header栏显示控制
    header: {
      type: Boolean,
      default: true
    },
    // header栏面包屑显示控制
    headerBreadcrumb: {
      type: Boolean,
      default: true
    },
    // header栏标签显示控制
    headerTab: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    headerShow() {
      if (this.$route.query.page_content_header === undefined) {
        return this.header;
      } else {
        return Number(this.$route.query.page_content_header);
      }
    }
  },
  methods: {}
};
</script>
<style lang="less">
.page-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  .form-item-btn {
    text-align: right;
  }

  > .content-header {
    background-color: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 21, 41, 0.08);
    position: relative;
    padding: 5px 25px;
    min-height: 29px;
    justify-content: space-around;
    display: flex;
    flex-direction: column;
    > .page-breadcrumb {
      line-height: 1.6;
      font-size: 14px;
      .el-breadcrumb__inner {
        font-weight: bold !important;
      }
    }
    > .page-tab {
    }
  }

  > .content-main {
    position: relative;
    background-color: #ffffff;
    margin: 10px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 21, 41, 0.08);
    flex-grow: 1;
    min-height: 50px;
  }
}
</style>
