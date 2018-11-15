<template>
    <!-- 如需定制样式, 在root元素写上 class="页面目录名-模块名", 示例 <root class="directory-file"> -->
    <page-content>
        <!-- 如需查询表单, page-list标签写上 :query-form="queryForm" 属性 -->
        <!-- 如需带展开功能的查询表单, page-list标签写上 collapse-form 属性 -->
        <!-- 如需批量操作按钮, page-list标签写上 header-btn-batch 属性 -->
        <page-list ref="pageList"
                   :api-list="apiList" :api-list-params-key="apiListParamsKey"
                   :api-destroy="apiDestroy" :api-destroy-bulk="apiDestroyBulk"
                   :route-config="routeConfig"
                   :query-form="queryForm"
                   header-btn-batch
        >
            <!-- 如需查询表单, 在这写 <template slot="query-form" slot-scope="{formData}">表单项</template> -->
            <!-- 如需带展开功能的查询表单, template标签写上 slot-scope="{formData, collapse}" 属性 -->
            <template slot="query-form" slot-scope="{formData}">
                <el-form-item class="query-form-keyword" :label="$t('form.queryKeyword.label')" prop="search">
                    <el-input v-model="formData.search" placeholder="ID|姓名"/>
                </el-form-item>
                <!-- 如需带展开功能的查询表单, 这写展开的模板代码 <template v-if="!collapse">展开后显示的表单项</template> -->
            </template>
            <!-- 如需增加批量操作按钮, 在这写 <template slot="header-batch-btn" slot-scope="{multipleSelection}">批量操作按钮</template> -->
            <template slot="header-batch-btn" slot-scope="{multipleSelection}">
                <el-button size="mini" type="success" :disabled="multipleSelection.length===0"
                           @click="batchEdit(multipleSelection.map(value => value.id), {status: 0}, multipleSelection)">
                    批量禁用用户
                </el-button>
                <el-button size="mini" type="warning" :disabled="multipleSelection.length===0"
                           @click="batchEdit(multipleSelection.map(value => value.id), {status: 1}, multipleSelection)">
                    批量启用用户
                </el-button>
            </template>
            <template slot="header-add-btn-before">
                <el-button size="mini" type="primary"
                           @click="dialogBatchAdd=true">
                    批量添加
                </el-button>
            </template>
            <el-dialog title="批量添加用户" :visible.sync="dialogBatchAdd">
                <single-upload :url.sync="excelImportUrl" :del="false" :view="false"
                               @request-upload="excelRequestUpload" @success-upload="excelSuccessUpload"
                               @error-upload="excelErrorUpload"
                               type=".xls, .xlsx"/>
            </el-dialog>
            <!-- 如需批量操作, 在el-table内第一行写上 <el-table-column type="selection" width="55" /> -->
            <el-table slot="list" ref="listTable"
                      slot-scope="listScope"
                      :data="listScope.list"
                      @filter-change="listScope.filterChange"
                      @sort-change="listScope.sortChange"
                      @selection-change="listScope.selectionChange"
            >
                <el-table-column
                        type="selection"
                        width="55"
                />
                <el-table-column
                        prop="id"
                        label="ID"
                        width="60"
                />
                <el-table-column
                        prop="name"
                        label="姓名"
                >
                </el-table-column>
                <el-table-column
                        prop="organ_name"
                        label="所属机构"
                >
                </el-table-column>
                <el-table-column
                        prop="phone"
                        label="手机号"
                />
                <el-table-column
                        :filter-multiple="false"
                        :filters="filters.status"
                        column-key="status"
                        prop="status"
                        label="状态"
                        width="90"
                >
                    <template slot-scope="scope">
                        <list-item-boolean-edit :item="scope.row" :edit="edit" options-key="enable_disabled"
                                                options-key-btn="enable_disabled"/>
                    </template>
                </el-table-column>
                <el-table-column
                        fixed="right"
                        label="操作"
                        width="105"
                >
                    <template slot-scope="scope">
                        <page-list-action-btn
                                :route-config="routeConfig"
                                :scope="scope"
                                :id="scope.row.id"
                        >
                        </page-list-action-btn>
                    </template>
                </el-table-column>
            </el-table>
        </page-list>
    </page-content>
</template>
<script>
import { mutations as mutationsTypes } from "@/store/config/vuex/types/index";
import { mapMutations } from "vuex";
import MixinList from "@/mixins/list";

// 该列表相关操作api
import api from "@/api/user";

import ListItemBooleanEdit from "@/components/common/ListItemBooleanEdit";
import SingleUpload from "@/components/common/SingleUpload";

export default {
  // 如需组件名, 组件名由目录名和文件名构成, 帕斯卡命名法, 示例 name: 'DirectoryFile'
  mixins: [MixinList],
  components: {
    ListItemBooleanEdit,
    SingleUpload
  },
  data() {
    return {
      api: api,
      dialogBatchAdd: false,
      excelImportUrl: ""
    };
  },
  computed: {
    filters() {
      return {
        status: this.options.enable_disabled
      };
    }
  },
  methods: {
    ...mapMutations([mutationsTypes.LOADING_VISIBLE]),
    excelRequestUpload() {
      this[mutationsTypes.LOADING_VISIBLE]({
        options: { text: "表格数据处理中，请稍等..." }
      });
    },
    async excelSuccessUpload(res) {
      const err = url => {
        if (Object.prototype.toString.call(url) === "[object String]") {
          this.$confirm(
            "请下载修改提示表格，按提示修改完成后重新上传",
            "导入用户失败",
            {
              confirmButtonText: "点击下载表格",
              showCancelButton: false,
              showClose: false,
              type: "error"
            }
          ).then(() => {
            this.dialogBatchAdd = true;
            window.open(url);
          });
        }
      };

      try {
        const importRes = await api.fn.excelImport({ url: res.data.url });
        if (
          Object.prototype.toString.call(importRes.data) === "[object Array]"
        ) {
          this.$message({ message: "导入用户成功", type: "success" });
          this.$router.replace({ query: {} });
        } else {
          err(importRes.data);
        }
      } catch (e) {
        err(e.data && e.data.data);
      }
      this.dialogBatchAdd = false;
      this.excelImportUrl = "";
      this[mutationsTypes.LOADING_VISIBLE]({ visible: false });
    },
    excelErrorUpload() {
      this[mutationsTypes.LOADING_VISIBLE]({ visible: false });
      this.$message.error("上传表格文件失败，请重新上传...");
    }
  }
};
</script>
<style lang="less">
/* 所有该模块样式都嵌套在 root class 内, 示例 .directory-file { .content-main {} } */
</style>
