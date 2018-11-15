<template>
  <!-- 如需定制样式, 在root元素写上 class="页面目录名-模块名", 示例 <root class="directory-file"> -->
  <page-content v-bind="$attrs">
    <!-- 如需查询表单, page-list标签写上 :query-form="queryForm" 属性 -->
    <!-- 如需带展开功能的查询表单, page-list标签写上 collapse-form 属性 -->
    <!-- 如需批量操作按钮, page-list标签写上 header-btn-batch 属性 -->
    <page-list ref="pageList" v-bind="$attrs"
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
          <el-input v-model="formData.search" :placeholder="$t('form.queryKeyword.placeholder')"/>
        </el-form-item>
        <el-form-item :label="$t('page.list.updatedTime')">
          <query-form-date-range :date_range_start.sync="formData.date_range_start"
                                 :date_range_end.sync="formData.date_range_end"/>
        </el-form-item>
        <!-- 如需带展开功能的查询表单, 这写展开的模板代码 <template v-if="!collapse">展开后显示的表单项</template> -->
      </template>
      <!-- 如需增加批量操作按钮, 在这写 <template slot="header-batch-btn" slot-scope="{multipleSelection}">批量操作按钮</template> -->
      <template slot="header-batch-btn" slot-scope="{multipleSelection}">
        <el-button size="mini" type="success" :disabled="multipleSelection.length===0"
                   @click="batchEdit(multipleSelection.map(value => value.id), {status: 1}, multipleSelection)">
          {{ $t('action.batch', { action: $t('action.on') })}}
        </el-button>
        <el-button size="mini" type="warning" :disabled="multipleSelection.length===0"
                   @click="batchEdit(multipleSelection.map(value => value.id), {status: 0}, multipleSelection)">
          {{ $t('action.batch', { action: $t('action.off') })}}
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
          :label="$t('page.list.id')"
          width="60"
        />
        <el-table-column
          prop="title"
          :label="$t('page.list.title')"
        />
        <el-table-column
          :filter-multiple="false"
          :filters="filters.type"
          column-key="type"
          prop="type"
          :label="$t('page.list.type')"
          width="90"
        >
          <template slot-scope="scope">
            {{listScope.getTextByValue(filters.type,scope.row.type,'value')}}
          </template>
        </el-table-column>
        <el-table-column
          :filter-multiple="false"
          :filters="filters.top"
          column-key="top"
          prop="top"
          :label="$t('page.list.top')"
          width="90"
        >
          <template slot-scope="scope">
            {{listScope.getTextByValue(filters.top,scope.row.top,'value')}}
          </template>
        </el-table-column>
        <el-table-column
          prop="creator"
          :label="$t('page.list.creator')"
          width="120"
        />
        <el-table-column
          sortable="custom"
          prop="updated_time"
          :label="$t('page.list.updatedTime')"
          width="159"
          show-overflow-tooltip
        />
        <el-table-column
          :filter-multiple="false"
          :filters="filters.status"
          column-key="status"
          prop="status"
          :label="$t('page.list.status')"
          width="90"
        >
          <template slot-scope="scope">
            <list-item-boolean-edit :item="scope.row" :edit="edit"/>
          </template>
        </el-table-column>
        <el-table-column
          fixed="right"
          :label="$t('page.list.action')"
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
import api from "@/api/announcement";

import ListItemBooleanEdit from "@/components/common/ListItemBooleanEdit";
import QueryFormDateRange from "@/components/common/QueryFormDateRange";

export default {
  // 如需组件名, 组件名由目录名和文件名构成, 帕斯卡命名法, 示例 name: 'DirectoryFile'
  mixins: [MixinList],
  components: { ListItemBooleanEdit, QueryFormDateRange },
  data() {
    return {
      api: api
    };
  },
  // 可以在computed对象内覆写MixinList的computed相关属性, 比如 apiList, apiListParamsKey
  computed: {
    filters() {
      return {
        type: this.options.importance,
        top: this.options.whether,
        status: this.options.release_status
      };
    }
  }
};
</script>
<style lang="less">
/* 所有该模块样式都嵌套在 root class 内, 示例 .directory-file { .content-main {} } */
</style>
