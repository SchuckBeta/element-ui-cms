<template>
  <!-- 如需定制样式, 在root元素写上 class="页面目录名-模块名", 示例 <root class="directory-file"> -->
  <el-form class="form-add-edit" label-width="120px"
           :model="formData" :rules="formRules" ref="form" :disabled="disabled">
    <el-form-item :label="$t('page.list.title')" prop="title" :rules="formRules.required">
      <el-input v-model="formData.title"/>
    </el-form-item>
    <el-form-item  :label="$t('page.list.client')" prop="client" :rules="formRules.required">
      <el-select v-model="formData.client" :placeholder="$t('action.pleaseSelect')">
        <el-option
          v-for="item in options.client"
          :key="item.value"
          :label="item.text"
          :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item :label="$t('page.list.order')" prop="order" :rules="formRules.required">
      <el-input-number v-model="formData.order"/>
    </el-form-item>
    <el-form-item :label="$t('page.list.picture')" prop="picture"
                  :show-message="!formData.picture" :rules="formRules.uploadImg"
                  class="single-upload-form-item">
      <single-upload :url.sync="formData.picture" :disabled="disabled"/>
    </el-form-item>
    <el-form-item label="跳转页面" prop="link_type" :rules="formRules.required">
      <el-radio-group v-model="formData.link_type" @change="clearValidate($refs['form'],['url','resource_id'])">
        <el-radio v-for="item in options.link_type" :key="item.value" :label="item.value">{{item.text}}</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="" prop="url" :rules="formRules.url" v-if="formData.link_type===0">
      <el-input v-model="formData.url"/>
    </el-form-item>
    <el-form-item label="资源选择" prop="resource_id" :rules="formRules.noFalse" v-else>
      <resource-search :disabled="disabled"
                       :type.sync="formData.resource_type"
                       :id.sync="formData.resource_id"
                       :title.sync="formData.resource.title"/>
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
import api from "@/api/banner";
import SingleUpload from "@/components/common/SingleUpload";
import ResourceSearch from "@/components/common/ResourceSearch";

export default {
  // 如需组件名, 组件名由目录名和文件名构成, 帕斯卡命名法, 示例 name: 'DirectoryFile'
  mixins: [MixinFormAddEdit],
  components: { SingleUpload, ResourceSearch },
  data() {
    return {
      api,
      formData: {
        title: "",
        client: 0,
        order: 0,
        // 外链还是资源
        link_type: 0,
        url: "",
        // 资源类型(后端要，表单提交接口必须有)
        resource_type: 1,
        // 选中的资源(后端要，表单提交接口必须有)
        resource_id: 0,
        // 选中的资源(前端要，组件显示值)
        resource: {}
      }
    };
  },
  // 可以在computed对象内覆写MixinList的computed相关属性, 比如 id, apiCreate...
  computed: {
    //      id () { return this.$route.query.other_id }
  },
  methods: {
    // 如果要取消默认提交行为，则return Promise.reject(new Error())
    async beforeSubmit() {
      if (this.formData.source_type) {
        this.formData.link = "";
      } else {
        this.formData.resource = {};
        this.formData.resource_id = 0;
        this.formData.resource_type = 1;
      }
      //  return Promise.reject(new Error())
    }
  }
};
</script>
<style lang="less">
/* 所有该模块样式都嵌套在 root class 内, 示例 .directory-file { .form-item-btn {} } */
</style>
