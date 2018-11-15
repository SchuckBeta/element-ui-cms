<template>
  <!-- 如需定制样式, 在root元素写上 class="页面目录名-模块名", 示例 <root class="directory-file"> -->
  <el-form class="form-add-edit" label-width="120px"
           :model="formData" :rules="formRules" ref="form" :disabled="disabled">
    <el-form-item label="姓名" prop="name" :rules="formRules.required">
      <el-input v-model="formData.name"/>
    </el-form-item>
    <el-form-item label="性别" prop="gender" :rules="formRules.required">
      <el-select v-model="formData.gender" placeholder="请选择">
        <el-option
          v-for="item in genderOption"
          :key="item.value"
          :label="item.text"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="民族" prop="nation" :rules="formRules.required">
      <el-input v-model="formData.nation"/>
    </el-form-item>
    <el-form-item label="手机号码" prop="phone" :rules="formRules.phone">
      <el-input v-model="formData.phone"/>
    </el-form-item>
    <el-form-item label="组织机构" prop="organ_path" :rules="formRules.required">
      <el-cascader :options="option.organ"
                   v-model="formData.organ_path"
                   :props="{ children: 'structure', label: 'title', value:'id'}"
                   :change-on-select="true" :show-all-levels="false" expand-trigger="hover"
      ></el-cascader>
    </el-form-item>
    <el-form-item label="职务" prop="job" :rules="formRules.required">
      <el-input v-model="formData.job"/>
    </el-form-item>
    <el-form-item label="职级" prop="rank" :rules="formRules.required">
      <el-input v-model="formData.rank"/>
    </el-form-item>
    <el-form-item label="邮箱" prop="email" :rules="formRules.email">
      <el-input v-model="formData.email"/>
    </el-form-item>
    <el-form-item label="身份证号" prop="NRIC" :rules="formRules.card">
      <el-input v-model="formData.NRIC"/>
    </el-form-item>
    <el-form-item label="开通状态" prop="status" :rules="formRules.required">
      <el-radio-group v-model="formData.status">
        <el-radio :label="1">启用</el-radio>
        <el-radio :label="0">禁用</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item class="form-item-btn" v-if="!disabled">
      <el-button @click="reset($refs['form'])">{{$t('btn.reset')}}</el-button>
      <el-button type="primary" :loading="formSubmitLoading" @click="submit($refs['form'])">
        {{$t('btn.submit')}}
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
      genderOption: [{ text: "男", value: "男" }, { text: "女", value: "女" }],
      formData: {
        name: "",
        gender: "",
        nation: "",
        phone: "",
        organ_path: [],
        organ: 0,
        job: "",
        rank: "",
        email: "",
        NRIC: "",
        status: 1
      }
    };
  },
  methods: {
    async beforeSubmit() {
      this.formData.organ = this.formData.organ_path[
        this.formData.organ_path.length - 1
      ];
    }
  }
};
</script>
<style lang="less">
/* 所有该模块样式都嵌套在 root class 内, 示例 .directory-file { .form-item-btn {} } */
</style>
