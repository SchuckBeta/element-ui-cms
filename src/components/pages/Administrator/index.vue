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
               :header-btn-batch-del-confirm="headerBtnBatchDelConfirm"
    >
      <!-- 如需查询表单, 在这写 <template slot="query-form" slot-scope="{formData}">表单项</template> -->
      <!-- 如需带展开功能的查询表单, template标签写上 slot-scope="{formData, collapse}" 属性 -->
      <template slot="query-form" slot-scope="{formData}">
        <el-form-item class="query-form-keyword" :label="$t('form.queryKeyword.label')" prop="search">
          <el-input v-model="formData.search" :placeholder="`${$t('page.content.name')}|${$t('page.content.phone')}`"/>
        </el-form-item>
        <!-- 如需带展开功能的查询表单, 这写展开的模板代码 <template v-if="!collapse">展开后显示的表单项</template> -->
      </template>
      <!-- 如需增加批量操作按钮, 在这写 <template slot="header-batch-btn" slot-scope="{multipleSelection}">批量操作按钮</template> -->
      <template slot="header-batch-btn" slot-scope="{multipleSelection}">
        <el-button size="mini" type="success" :disabled="multipleSelection.length===0"
                   @click="batchEdit(multipleSelection.map(value => value.id), {is_active: 1}, multipleSelection)">
          {{ $t('action.batch', { action: $t('action.enable') })}}
        </el-button>
        <el-button size="mini" type="warning" :disabled="multipleSelection.length===0"
                   @click="batchEdit(multipleSelection.map(value => value.id), {is_active: 0}, multipleSelection)">
          {{ $t('action.batch', { action: $t('action.disabled') })}}
        </el-button>
      </template>
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
          :label="$t('page.content.id')"
          width="60"
        />
        <el-table-column
          prop="name"
          :label="$t('page.content.name')"
        />
        <el-table-column
          prop="organ_name"
          :label="$t('page.content.organName')"
        />
        <el-table-column
          prop="role"
          :label="$t('page.content.role')"
        >
          <template slot-scope="scope">
            <div class="row" v-for="item in scope.row.groups" :key="item.id">{{item.name}}</div>
          </template>
        </el-table-column>
        <el-table-column
          :filter-multiple="false"
          :filters="filters.status"
          column-key="is_active"
          prop="is_active"
          :label="$t('page.content.status')"
          width="90"
        >
          <template slot-scope="scope">
            <list-item-boolean-edit :item="scope.row" :edit="edit" options-key="enable_disabled" options-key-btn="enable_disabled"/>
          </template>
        </el-table-column>
        <el-table-column
          fixed="right"
          :label="$t('page.content.action')"
          width="105"
        >
          <template slot-scope="scope">
            <page-list-action-btn
              :route-config="routeConfig"
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
import MixinList from "@/mixins/list";

// 该列表相关操作api
import api from "@/api/administrator";

import ListItemBooleanEdit from "@/components/common/ListItemBooleanEdit";

export default {
  // 如需组件名, 组件名由目录名和文件名构成, 帕斯卡命名法, 示例 name: 'DirectoryFile'
  mixins: [MixinList],
  components: { ListItemBooleanEdit },
  data() {
    return {
      api: api
    };
  },
  // 可以在computed对象内覆写MixinList的computed相关属性, 比如 apiList, apiListParamsKey
  computed: {
    filters() {
      return {
        status: this.options.enable_disabled
      };
    }
  },
  methods: {
    async headerBtnBatchDelConfirm() {
      await this.apiUpdateBulk(
        { ids: this.refList.multipleSelection.join() },
        { is_staff: 0 }
      );
      this.refList.fetchData();
      this.$message({
        message: this.$t("message.success.batch", {
          action: this.$t("action.delete")
        }),
        type: "success"
      });
    }
  }
};
</script>
<style lang="less">
/* 所有该模块样式都嵌套在 root class 内, 示例 .directory-file { .content-main {} } */
</style>
