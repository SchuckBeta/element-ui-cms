<template>
  <!-- 如需定制样式, 在root元素写上 class="页面目录名-模块名", 示例 <root class="directory-file"> -->
  <el-form class="form-add-edit" label-width="120px"
           :model="formData" :rules="formRules" ref="form" :disabled="disabled">
    <el-form-item label="姓名" prop="name" :rules="formRules.required">
      <el-input v-model="formData.name"/>
    </el-form-item>
    <el-form-item label="手机号码" prop="phone" :rules="formRules.phone">
      <el-input v-model="formData.phone"/>
    </el-form-item>
    <el-form-item label="组织机构" prop="organ_id_path" :rules="formRules.required">
      <el-cascader :options="options.organs"
                   v-model="formData.organ_id_path"
                   :props="{ children: 'structure', label: 'title', value:'id'}"
                   :change-on-select="true" :show-all-levels="false" expand-trigger="hover"
      ></el-cascader>
    </el-form-item>
    <el-form-item label="邮箱" prop="email" :rules="formRules.email">
      <el-input v-model="formData.email"/>
    </el-form-item>
    <el-form-item label="开通状态" prop="status" :rules="formRules.required">
      <el-radio-group v-model="formData.status">
        <el-radio :label="1">启用</el-radio>
        <el-radio :label="0">禁用</el-radio>
      </el-radio-group>
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
import api from "@/api/user";

export default {
  // 如需组件名, 组件名由目录名和文件名构成, 帕斯卡命名法, 示例 name: 'DirectoryFile'
  mixins: [MixinFormAddEdit],
  data() {
    return {
      api,
      formData: {
        name: "",
        phone: "",
        organ_id_path: [],
        organ_id: 0,
        email: "",
        status: 1
      }
    };
  },
  methods: {
    async beforeSubmit() {
      this.formData.organ_id = this.formData.organ_id_path[
        this.formData.organ_id_path.length - 1
      ];
    }
  }
};
</script>
<style lang="less">
/* 所有该模块样式都嵌套在 root class 内, 示例 .directory-file { .form-item-btn {} } */
</style>
