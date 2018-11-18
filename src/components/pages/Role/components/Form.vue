<template>
  <!-- 如需定制样式, 在root元素写上 class="页面目录名-模块名", 示例 <root class="directory-file"> -->
  <el-form class="form-add-edit" label-width="120px"
           :model="formData" :rules="formRules" ref="form" :disabled="disabled">
    <el-form-item :label="$t('page.content.roleName')" prop="name" :rules="formRules.required">
      <el-input v-model="formData.name"/>
    </el-form-item>
    <el-form-item :label="$t('page.content.menuPermissions')" prop="permissions" :rules="formRules.required">
      <el-tree ref="tree"
               show-checkbox
               default-expand-all
               node-key="id"
               highlight-current
               :data="menus"
               :props="{children: 'children',label: 'title'}"
               @check-change="getCheckedKeys"
      />
    </el-form-item>
    <el-form-item :label="$t('page.content.otherPermissions')" v-if="options.permissions.length">
      <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllOtherPermissions">{{$t('action.selectAll')}}
      </el-checkbox>
      <el-checkbox-group v-model="otherPermissions" @change="handleCheckedOtherPermissions">
        <el-checkbox v-for="item in options.permissions" :label="item.value" :key="item.value">{{item.text}}
        </el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item class="form-item-btn" v-if="!disabled">
      <el-button @click="reset($refs['form'])">{{$t('action.reset')}}</el-button>
      <el-button type="primary" :loading="formSubmitLoading" @click="submit($refs['form'])">
        {{$t('action.submit')}}
      </el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import MixinFormAddEdit from "@/mixins/form-add-edit";

// 该表单相关操作api
import api from "@/api/role";

export default {
  // 如需组件名, 组件名由目录名和文件名构成, 帕斯卡命名法, 示例 name: 'DirectoryFile'
  mixins: [MixinFormAddEdit],
  components: {},
  data() {
    return {
      api,
      menus: [],
      isIndeterminate: false,
      checkAll: false,
      otherPermissions: [],
      formData: {
        name: "",
        permissions: []
      }
    };
  },
  computed: {
    otherPermissionsOptionIds() {
      return this.options.permissions.map(item => item.value);
    }
  },
  // 可以在computed对象内覆写MixinList的computed相关属性, 比如 id, apiCreate...
  created() {
    api.fn.menus().then(res => {
      this.menus = res.data.results;
      this.retrieveFinish();
    });
  },
  methods: {
    handleCheckAllOtherPermissions(val) {
      this.otherPermissions = val ? this.otherPermissionsOptionIds : [];
      this.isIndeterminate = false;
    },
    handleCheckedOtherPermissions(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.options.permissions.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.options.permissions.length;
    },
    getCheckedKeys() {
      this.formData.permissions = this.$refs.tree
        .getCheckedKeys()
        .filter(Boolean);
    },
    retrieveFinish() {
      this.otherPermissions = this.otherPermissionsOptionIds.filter(optionId =>
        this.formData.permissions.find(id => optionId === id)
      );
      this.handleCheckedOtherPermissions(this.otherPermissions);
      this.$nextTick(function() {
        if (this.$refs.tree)
          this.$refs.tree.setCheckedKeys(this.formData.permissions || []);
      });
    },
    async beforeSubmit() {
      this.formData.permissions = this.formData.permissions.concat(
        this.otherPermissions
      );
    }
  }
};
</script>
<style lang="less">
/* 所有该模块样式都嵌套在 root class 内, 示例 .directory-file { .form-item-btn {} } */
</style>
