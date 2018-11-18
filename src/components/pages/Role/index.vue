<template>
  <!-- 如需定制样式, 在root元素写上 class="页面目录名-模块名", 示例 <root class="directory-file"> -->
  <page-content class="role-index">
    <!-- 如需查询表单, page-list标签写上 :query-form="queryForm" 属性 -->
    <!-- 如需带展开功能的查询表单, page-list标签写上 collapse-form 属性 -->
    <!-- 如需批量操作按钮, page-list标签写上 header-btn-batch 属性 -->
    <page-list ref="pageList"
               :api-list="apiList" :api-list-params-key="apiListParamsKey"
               :api-destroy="apiDestroy" :api-destroy-bulk="apiDestroyBulk"
               :route-config="routeConfig"
               header-btn-batch
    >
      <!-- 如需查询表单, 在这写 <template slot="query-form" slot-scope="{formData}">表单项</template> -->
      <!-- 如需带展开功能的查询表单, template标签写上 slot-scope="{formData, collapse}" 属性 -->
      <!-- 如需增加批量操作按钮, 在这写 <template slot="header-batch-btn" slot-scope="{multipleSelection}">批量操作按钮</template> -->
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
          :label="$t('page.content.roleName')"
          width="200"
        >
        </el-table-column>
        <el-table-column
                :label="$t('page.content.rolePermissions')"
        >
          <template slot-scope="scope">
            <el-tree class="role-tree" ref="tree"
                     :data="scope.row.menus"
                     :props="{children: 'children',label: 'title'}" accordion/>
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
import api from "@/api/role";

export default {
  // 如需组件名, 组件名由目录名和文件名构成, 帕斯卡命名法, 示例 name: 'DirectoryFile'
  mixins: [MixinList],
  components: {},
  data() {
    return {
      api: api
    };
  },
  // 可以在computed对象内覆写MixinList的computed相关属性, 比如 apiList, apiListParamsKey
  computed: {}
};
</script>
<style lang="less">
/* 所有该模块样式都嵌套在 root class 内, 示例 .directory-file { .content-main {} } */
.role-index {
  .role-tree {
    .el-tree-node__content {
      cursor: default;
    }
  }
}
</style>
