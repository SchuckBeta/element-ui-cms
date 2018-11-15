<template>
  <!-- 如需定制样式, 在root元素写上 class="页面目录名-模块名", 示例 <root class="directory-file"> -->
  <el-form class="form-add-edit" label-width="120px"
           :model="formData" :rules="formRules" ref="form" :disabled="disabled">
    <div class="el-form-item" v-if="id">
      <label class="el-form-item__label" style="width: 120px;">用户信息</label>
      <div class="el-form-item__content" style="margin-left: 120px;">
        <user-search :user="formData" :visible="false"/>
      </div>
    </div>
    <el-form-item label="用户搜索" prop="id" :rules="formRules.required" v-else>
      <user-search :user="formData" :visible="true"/>
    </el-form-item>
    <el-form-item label="角色" prop="groups" :rules="formRules.required">
      <el-button size="mini" @click="selectionAll">全选</el-button>
      <el-button size="mini" @click="clearSelection">取消选择</el-button>
      <el-table
        ref="multipleTable"
        :data="groupsAll"
        :show-header="false"
        @selection-change="handleSelectionChange"
      >
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          prop="name"
          label=""
        />
      </el-table>
    </el-form-item>
    <el-form-item class="form-item-btn" v-if="!disabled">
      <el-button @click="reset($refs['form']);formData.groups=[];clearSelection()">{{$t('action.reset')}}</el-button>
      <el-button type="primary" :loading="formSubmitLoading" @click="submit($refs['form'])">
        {{$t('action.submit')}}
      </el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import MixinFormAddEdit from "@/mixins/form-add-edit";

// 该表单相关操作api
import api from "@/api/administrator";

import UserSearch from "@/components/common/UserSearch";

export default {
  // 如需组件名, 组件名由目录名和文件名构成, 帕斯卡命名法, 示例 name: 'DirectoryFile'
  mixins: [MixinFormAddEdit],
  components: { UserSearch },
  data() {
    return {
      api,
      groupsAll: [],
      formData: {
        id: "",
        groups: []
      }
    };
  },
  // 可以在computed对象内覆写MixinList的computed相关属性, 比如 id, apiCreate...
  created() {
    api.fn.groups().then(res => {
      this.groupsAll = res.data.results;
      this.retrieveFinish();
    });
  },
  methods: {
    handleSelectionChange(val) {
      if (
        Object.prototype.toString.call(val) === "[object Array]" &&
        val.length
      )
        this.formData.groups = val.map(value => value.id);
    },
    clearSelection() {
      this.$refs.multipleTable.clearSelection();
    },
    selectionAll() {
      this.clearSelection();
      this.$refs.multipleTable.toggleAllSelection();
    },
    retrieveFinish() {
      this.$nextTick(function() {
        if (
          this.$refs.multipleTable &&
          Object.prototype.toString.call(this.groupsAll) === "[object Array]" &&
          this.groupsAll.length
        ) {
          if (
            Object.prototype.toString.call(this.formData.groups) ===
              "[object Array]" &&
            this.formData.groups.length
          ) {
            if (this.formData.groups.length === this.groupsAll.length) {
              this.selectionAll();
            } else {
              this.formData.groups = this.formData.groups.map(selectionRole => {
                this.$refs.multipleTable.toggleRowSelection(
                  this.groupsAll.find(role => role.id === selectionRole.id)
                );
                return selectionRole.id;
              });
            }
          } else {
            this.formData.groups = [];
            this.clearSelection();
          }
        }
      });
    }
  }
};
</script>
<style lang="less">
/* 所有该模块样式都嵌套在 root class 内, 示例 .directory-file { .form-item-btn {} } */
</style>
