<template>
  <div class="page-list-button">
    <slot></slot>
    <div class="row">
      <el-popover-dialog
        :popover-content="$t('modal.delete')"
        :cancel-button-text="$t('action.cancel')"
        :confirm-button-text="$t('action.confirm')"
        :btn-txt="$t('action.delete')"
        @confirm="delConfirm" v-if="delShow"/>
      <el-button type="text" @click="toEditItem()" v-if="editShow">{{$t('action.edit')}}</el-button>
      <el-button type="text" @click="toEditItem({disabled:1,details:1})" v-if="detailsShow">{{$t('action.details')}}</el-button>
    </div>
  </div>
</template>
<script>
import EventTypes from "@/config/event-types";
import ElPopoverDialog from "@panhezeng/el-popover-dialog";

/**
 * 列表操作列的按钮
 * 默认实现了删除和编辑按钮
 */
export default {
  name: "PageListBtnRow",
  mixins: [],
  components: { ElPopoverDialog },
  props: {
    // 当前列表页路由相关数据
    routeConfig: {
      type: Object,
      required: true
    },
    id: {
      required: true
    },
    // 当前行数据
    scope: Object,
    delShow: {
      type: Boolean,
      default: true
    },
    editShow: {
      type: Boolean,
      default: true
    },
    detailsShow: {
      type: Boolean,
      default: false
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
    toEditItem(query = {}) {
      // 前往编辑页面
      if (
        Object.prototype.toString.call(this.routeConfig.edit) !==
          "[object Object]" ||
        Object.prototype.toString.call(this.routeConfig.edit.path) !==
          "[object String]"
      ) {
        throw new Error("routeConfig.edit.path无值，无法前往编辑页");
      }
      // 加上当前列表页的所有查询参数
      query = Object.assign(query, this.$route.query, { id: this.id });
      // 如果routeConfig有指定传查询参数，则加上，权重最高，可以覆盖前面的查询参数
      if (
        Object.prototype.toString.call(this.routeConfig.edit.query) ===
        "[object Object]"
      ) {
        Object.assign(query, this.routeConfig.edit.query);
      }
      this.$router.push({ path: this.routeConfig.edit.path, query });
    },
    delConfirm() {
      this.$eventHub.emit(EventTypes.pagesDel, this.id);
    }
    //      delDialog () {
    //        // 删除列表项确认框
    //        this.$confirm(this.$t('modal.delete'), this.$t('tip'), {
    //          type: 'warning'
    //        }).then(() => {
    //          this.$eventHub.emit(EventTypes.pagesDel, [this.scope.row.id])
    //        }).catch(() => {
    //          this.$message(this.$t('modal.canceled'))
    //        })
    //      }
  }
};
</script>
<style lang="less">
.page-list-button {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  div.row {
    width: 100%;
  }
  .el-button {
    margin-right: 10px;
  }
  .popover-dialog {
    margin-right: 10px;
  }
  .el-button + .el-button {
    margin: 0;
  }
}
</style>
