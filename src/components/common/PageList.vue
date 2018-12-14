<template>
    <div class="page-list" v-loading="loading" :element-loading-text="$t('loading')">
        <slot name="head-content"></slot>
        <el-form class="page-list-query-form" size="mini" :inline="true"
                 :model="queryForm" ref="queryForm" v-if="queryFormShow">
            <slot name="query-form" :form-data="queryForm" :collapse="collapse" :list="list"/>
            <el-form-item :class="`form-item-btn${(collapse && !collapse)?' expand':''}`">
                <el-button size="mini" @click="resetQueryForm">{{$t("action.reset")}}</el-button>
                <el-button size="mini" type="primary" @click="submitQueryForm">{{$t("action.query")}}</el-button>
                <template v-if="collapseForm">
                    <el-button type="text" @click="collapse=false" v-if="collapse">{{$t("action.expand")}}<i
                            class="el-icon-arrow-down"></i></el-button>
                    <el-button type="text" @click="collapse=true" v-else>{{$t("action.collapse")}}<i
                            class="el-icon-arrow-up"></i>
                    </el-button>
                </template>
            </el-form-item>
        </el-form>
        <div class="header-btn" v-if="headerBtn">
            <slot name="header-refresh-btn-before"/>
            <el-button class="refresh-btn" size="mini" @click="fetchData" v-if="headerBtnRefresh">
                {{$t("action.refresh")}}
            </el-button>
            <slot name="header-btn"/>
            <template v-if="headerBtnBatch">
                <slot name="header-batch-btn" :multiple-selection="multipleSelection" :list="list"/>
                <el-popover-dialog
                        :popover-content="$t('modal.delete')"
                        :cancel-button-text="$t('action.cancel')"
                        :confirm-button-text="$t('action.confirm')"
                        :btn-txt="$t('action.batch', { action: $t('action.delete') })"
                        :disabled="multipleSelection.length===0"
                        btn-size="mini" btn-type="danger" btn-style=""
                        @confirm="batchDelItem" v-if="headerBtnBatchDel"/>
            </template>
            <slot name="header-add-btn-before"/>
            <el-button size="mini" type="primary" @click="toAddItem" v-if="headerBtnAddShow">{{$t("action.add")}}
            </el-button>
            <slot name="header-add-btn-after"/>
        </div>

        <slot name="list" :list="list"
              :filter-change="handleFilterChange"
              :filter-method="handleFilter"
              :sort-change="handleSortChange"
              :selection-change="handleSelectionChange"
              :get-text-by-value="getTextByValue"
              :get-tree-option-by-value="getTreeOptionByValue"
        />
        <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="queryData.page"
                :page-sizes="pageSizes"
                :page-size="queryData.limit"
                layout="total, sizes, prev, pager, next, jumper"
                :total="queryData.total" v-if="paginationShow"/>
        <slot/>
    </div>
</template>
<script>
import EventTypes from "@/config/event-types";
import MixinForm from "@/mixins/form";
import ElPopoverDialog from "@panhezeng/el-popover-dialog";
import { getTextByValue, getTreeOptionByValue } from "@/utils";
import getObjectItemByPath from "@panhezeng/utils/dist/get-object-item-by-path";

/**
 * 所有页面列表查询数据的初始值
 */
const queryDataBase = {
  // 总数
  total: 0,
  // 当前页码
  page: 1,
  // 每页项目数
  limit: 10
};

export default {
  name: "PageList",
  mixins: [MixinForm],
  components: { ElPopoverDialog },
  inheritAttrs: false,
  props: {
    // 获得当前列表的api方法，apiList(params)
    apiList: {
      type: Function,
      required: true
    },
    // 获取列表接口允许的参数名
    apiListParamsKey: {
      type: Array,
      default() {
        return [];
      }
    },
    // 从列表接口返回对象中获取列表数据的path
    resPathOfList: {
      type: String,
      default: "data.results"
    },
    // 从列表接口返回对象中获取列表数据总数的path
    resPathOfListTotal: {
      type: String,
      default: "data.count"
    },
    // 删除列表项的api方法，apiDestroy(id)
    apiDestroy: Function,
    // 批量删除列表项的api方法，apiDestroyBulk({ids})
    apiDestroyBulk: Function,
    // 当前列表页的路由相关配置
    routeConfig: Object,
    // 是否显示头部栏
    headerBtn: {
      type: Boolean,
      default: true
    },
    // 是否显示刷新按钮
    headerBtnRefresh: {
      type: Boolean,
      default: true
    },
    // 是否显示批量操作相关按钮
    headerBtnBatch: {
      type: Boolean,
      default: false
    },
    // 是否显示批量删除按钮
    headerBtnBatchDel: {
      type: Boolean,
      default: true
    },
    // 批量删除按钮确认回调
    headerBtnBatchDelConfirm: Function,
    // 是否显示添加按钮
    headerBtnAdd: {
      type: Boolean,
      default: true
    },
    // 查询表单数据
    queryForm: {
      type: Object,
      default() {
        return {};
      }
    },
    // 是否需要收起展开查询表单功能，默认不需要
    collapseForm: {
      type: Boolean,
      default: false
    },
    pagination: {}
  },
  data() {
    return {
      loading: false,
      // 列表路由查询相关数据
      queryData: {},
      // 列表
      list: [],
      // 多选项目
      multipleSelection: [],
      // 当前查询表单是否为收起状态
      collapse: true
    };
  },
  computed: {
    queryFormShow() {
      return (
        Object.keys(this.queryForm).length &&
        this.$attrs["query-form-hide"] !== true
      );
    },
    // 是否显示添加按钮
    headerBtnAddShow() {
      return (
        this.headerBtnAdd &&
        Object.prototype.toString.call(this.routeConfig) ===
          "[object Object]" &&
        Object.prototype.toString.call(this.routeConfig.add) ===
          "[object Object]" &&
        Object.prototype.toString.call(this.routeConfig.add.path) ===
          "[object String]"
      );
    },
    paginationShow() {
      if (this.pagination === undefined) {
        return true;
      } else {
        return this.pagination;
      }
    },
    pageSizes() {
      const sizes = [10, 20, 50, 100];
      if (sizes.includes(this.queryData.limit)) {
        return sizes;
      } else {
        return [this.queryData.limit];
      }
    }
  },
  watch: {
    $route: {
      immediate: true,
      deep: true,
      handler(to, from) {
        // 如果发生页面级组件改变，则初始化页面数据
        if (!from || (from && from.path !== to.path)) {
          this.initQueryData();
        }
        // 获取列表查询数据，通过路由变换驱动的列表查询，才能实现历史记录功能，比如执行分页筛选等操作后再刷新或后退，可恢复之前的查询
        this.fetchData();
      }
    }
  },
  created() {
    // 监听事件，请求列表数据，删除列表项
    // 父组件可以通过$refs方式调用本组件的methods
    this.$eventHub.on(EventTypes.pagesList, this.fetchData);
    this.$eventHub.on(EventTypes.pagesDel, this.delItem);
  },
  mounted() {
    this.$nextTick(function() {});
  },
  beforeDestroy() {
    this.$eventHub.off(EventTypes.pagesList, this.fetchData);
    this.$eventHub.off(EventTypes.pagesDel, this.delItem);
  },
  methods: {
    /**
     * 获得列表查询数据的初始数据
     */
    initQueryData() {
      this.queryData = Object.assign({}, queryDataBase);
    },
    /**
     * 项目后端分页使用 limit offset 方式
     * 根据前端组件page数计算offset
     * @param page
     * @param limit
     * @return {number}
     */
    getQueryDataOffset(page, limit) {
      return (page - 1) * limit;
    },
    /**
     * 获得最终的列表查询数据，url查询参数
     * @param data 数据源
     */
    setQueryData(data = {}) {
      // 如果数据源有数据，则进一步处理
      if (
        Object.prototype.toString.call(data) === "[object Object]" &&
        Object.keys(data).length
      ) {
        // 遍历数据源对象，如果数据源有该参数的值，则赋值
        for (const prop in data) {
          if (data.hasOwnProperty(prop)) {
            const queryFormHas = this.queryForm.hasOwnProperty(prop);
            // 因为可能有来自url上query数据，这种数据类型都是字符串，所以需要把数字类字符串，强转为数字类型
            const value = data[prop];
            if (
              Object.prototype.toString.call(value) === "[object String]" &&
              /^-?\d+(\.\d+)?$/.test(value)
            ) {
              this.queryData[prop] = parseFloat(data[prop]);
            } else {
              this.queryData[prop] = data[prop];
            }
            if (queryFormHas) {
              this.queryForm[prop] = this.queryData[prop];
            }
          }
        }
        // 请求当前页项数据的起始数值
        this.queryData.offset = this.getQueryDataOffset(
          this.queryData.page,
          this.queryData.limit
        );
      }
    },
    /**
     * 获得列表api有效的查询参数
     */
    getApiListParamsKey() {
      const params = {};
      const keys = ["limit", "offset", "ordering"].concat(
        this.apiListParamsKey,
        Object.keys(this.queryForm)
      );
      keys.forEach(element => {
        if (this.queryData.hasOwnProperty(element)) {
          params[element] = this.queryData[element];
        }
      });
      return params;
    },
    /**
     * 获取列表数据
     */
    async fetchData(loading = true) {
      this.loading = loading;
      this.setQueryData(this.$route.query);
      try {
        const response = await this.apiList(this.getApiListParamsKey());
        if (response) {
          this.setQueryData({
            total: getObjectItemByPath(response, this.resPathOfListTotal, 0)
          });
          const data = getObjectItemByPath(response, this.resPathOfList);
          // 如果是有长度的数组，则直接渲染列表
          // 否则如果页面大于1，则前往上一页
          // 否则空
          if (
            Object.prototype.toString.call(data) === "[object Array]" &&
            data.length
          ) {
            this.list = data;
          } else if (this.queryData.page > 1) {
            this.$router.replace({
              query: Object.assign({}, this.$route.query, {
                page: this.queryData.page - 1
              })
            });
          } else {
            this.list = [];
          }
          this.loading = false;
          this.$emit("fetch-data-finish", this.list);
        }
      } catch (e) {
        console.error(e);
      }
    },
    /**
     * 前往添加列表项页面
     */
    toAddItem() {
      // 加上当前列表页的所有查询参数
      let query = Object.assign({}, this.$route.query);
      // 如果routeConfig有指定传查询参数，则加上，权重最高，可以覆盖前面的查询参数
      if (
        Object.prototype.toString.call(this.routeConfig.add.query) ===
        "[object Object]"
      ) {
        Object.assign(query, this.routeConfig.add.query);
      }
      this.$router.push({ path: this.routeConfig.add.path, query });
    },
    /**
     * 删除列表项
     * @param id
     */
    async delItem(id) {
      if (
        Object.prototype.toString.call(this.apiDestroy) !== "[object Function]"
      ) {
        throw new Error("apiDestroy不是方法，无法执行删除操作");
      }
      try {
        await this.apiDestroy(id);
        // 删除成功后，触发重新查询列表，为了实现自动补齐每页条数等，没有采用只是前端从列表数组删除此条数据的方式
        this.fetchData();
        this.$message({
          message: this.$t("message.success.one", {
            action: this.$t("action.delete")
          }),
          type: "success"
        });
      } catch (e) {
        console.error(e);
      }
    },
    /**
     * 批量删除
     */
    async batchDelItem() {
      // 如果有外部传入批量删除回调，则用外部的
      if (
        Object.prototype.toString.call(this.headerBtnBatchDelConfirm) ===
        "[object Function]"
      ) {
        this.headerBtnBatchDelConfirm();
      } else {
        if (
          Object.prototype.toString.call(this.apiDestroyBulk) !==
          "[object Function]"
        ) {
          throw new Error("apiDestroyBulk不是方法，无法执行批量删除操作");
        }
        try {
          await this.apiDestroyBulk({
            ids: this.multipleSelection.map(value => value.id).join()
          });
          // 删除成功后，触发重新查询列表，为了实现自动补齐每页条数等，没有采用只是前端从列表数组删除此条数据的方式
          this.fetchData();
          this.$message({
            message: this.$t("message.success.batch", {
              action: this.$t("action.delete")
            }),
            type: "success"
          });
        } catch (e) {
          console.error(e);
        }
      }
    },
    /**
     * 每页条数变化
     * @param val
     */
    handleSizeChange(val) {
      this.$router.push({
        query: Object.assign({}, this.$route.query, { limit: val })
      });
      // console.log(`每页 ${val} 条`);
      this.$emit("page-size-change", val);
    },
    /**
     * 当前页面变化
     * @param val
     */
    handleCurrentChange(val) {
      this.$router.push({
        query: Object.assign({}, this.$route.query, { page: val })
      });
      // console.log(`当前页: ${val}`);
      this.$emit("page-change", val);
    },
    /**
     * 当前排序变化
     * @param param Object
     */
    handleSortChange(param) {
      // 排序，默认使用django框架, 参数key是ordering，参数值是数据库field或-field
      // 可以根据前后端约定修改传值结构，比如larave框架，可以为传字符串'updated_time,desc'，实现按更新时间降序
      let orderBy = "";
      if (param.order === "descending") {
        orderBy = `-${param.prop}`;
      } else if (param.order === "ascending") {
        orderBy = param.prop;
      }
      this.$router.push({
        query: Object.assign({}, this.$route.query, { ordering: orderBy })
      });
    },
    /**
     * 当前筛选条件变化
     * @param filters Object
     */
    handleFilterChange(filters) {
      // console.log(filters);
      for (const prop in filters) {
        if (filters.hasOwnProperty(prop)) {
          filters[prop] = filters[prop].join();
        }
      }
      this.$router.push({
        query: Object.assign({}, this.$route.query, filters)
      });
    },
    handleFilter(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },
    /**
     * 多选项变化
     * @param val Array
     */
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    /**
     * 查询表单提交
     */
    submitQueryForm() {
      const query = Object.assign({}, this.$route.query, this.queryForm, {
        page: 1
      });
      // 如果路由参数没有变化，直接请求列表数据，否则通过路由变化驱动请求列表数据
      if (
        JSON.stringify(Object.entries(this.$route.query).sort()) ===
        JSON.stringify(Object.entries(query).sort())
      ) {
        this.fetchData();
      } else {
        this.$router.push({ query: query });
      }
    },
    /**
     * 重置查询表单
     */
    resetQueryForm() {
      for (const prop in this.queryForm) {
        if (this.queryForm.hasOwnProperty(prop)) {
          this.queryForm[prop] = "";
        }
      }
    },
    /**
     *  通过value获得列表项的显示文本, 用于枚举数据结构
     */
    getTextByValue,
    getTreeOptionByValue
  }
};
</script>
<style lang="less">
.page-list {
  position: relative;
  > .page-list-query-form {
    .form-item-btn.expand {
      display: block;
    }
  }

  > .header-btn {
    padding-bottom: 10px;
    text-align: right;
    position: sticky;
    top: 0;
    z-index: 10;
    background: #ffffff;
    .el-button + .el-button,
    .el-button + .popover-dialog,
    .popover-dialog + .popover-dialog {
      margin-left: 5px;
    }
  }

  .el-button--text {
    text-decoration: underline;
    text-underline-position: under;
  }

  .el-table {
    th {
      line-height: 1;
    }
  }

  > .el-table__header th {
    border-top: 1px solid #ebeef5;
  }

  > .el-pagination {
    text-align: right;
    margin-top: 20px;
    position: sticky;
    bottom: 0;
    background: #ffffff;
    z-index: 10;
  }

  img {
    width: 100%;
    height: auto;
  }
}
</style>
