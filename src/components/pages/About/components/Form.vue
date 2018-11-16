<template>
    <!-- 如需定制样式, 在root元素写上 class="页面目录名-模块名", 示例 <root class="directory-file"> -->
    <el-form class="form-add-edit" label-width="120px"
             :model="formData" :rules="formRules" ref="form" :disabled="disabled">
        <el-form-item :label="$t('page.list.about')" prop="about" :rules="formRules.required">
            <el-input type="textarea" :rows="7" v-model="formData.about"/>
        </el-form-item>
        <el-form-item :label="$t('page.list.contact')" prop="contact" :rules="formRules.required">
            <el-input v-model="formData.contact"/>
        </el-form-item>
        <el-form-item :label="$t('page.list.logo')" prop="logo"
                      :show-message="!formData.logo" :rules="formRules.uploadImg"
                      class="single-upload-form-item">
            <single-upload :url.sync="formData.logo" :tip="`* ${$t('form.suggestion')}：200*200 px *`"/>
        </el-form-item>
        <el-form-item class="form-item-btn" v-if="!disabled">
            <el-button @click="reset($refs['form'])">{{$t("action.reset")}}</el-button>
            <el-button type="primary" :loading="formSubmitLoading" @click="submit($refs['form'])">
                {{$t("action.submit")}}
            </el-button>
        </el-form-item>
    </el-form>
</template>

<script>
import MixinFormAddEdit from "@/mixins/form-add-edit";

// 该表单相关操作api
import api from "@/api/about";

import SingleUpload from "@/components/common/SingleUpload";

export default {
  // 如需组件名, 组件名由目录名和文件名构成, 帕斯卡命名法, 示例 name: 'DirectoryFile'
  mixins: [MixinFormAddEdit],
  components: { SingleUpload },
  data() {
    return {
      api,
      afterSubmitBack: false,
      formData: {
        about: "",
        contact: "",
        logo: ""
      }
    };
  },
  computed: {
    id() {
      return 1;
    }
  }
};
</script>
<style lang="less">
/* 所有该模块样式都嵌套在 root class 内, 示例 .directory-file { .form-item-btn {} } */
</style>
