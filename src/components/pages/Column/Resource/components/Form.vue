<template>
  <!-- 如需定制样式, 在root元素写上 class="页面目录名-模块名", 示例 <root class="directory-file"> -->
  <el-form class="form-add-edit" label-width="120px"
           :model="formData" :rules="formRules" ref="form" :disabled="disabled">
    <el-form-item label="标题" prop="title" :rules="formRules.required">
      <el-input v-model="formData.title"/>
    </el-form-item>
    <el-form-item label="副标题" prop="subtitle">
      <el-input v-model="formData.subtitle"/>
    </el-form-item>
    <el-form-item label="顺序" prop="order">
      <el-input-number v-model="formData.order"/>
    </el-form-item>
    <el-form-item label="封面" prop="cover"
                  :show-message="!formData.cover" :rules="formRules.uploadImg"
                  class="single-upload-form-item">
      <single-upload :url.sync="formData.cover" :disabled="disabled"/>
    </el-form-item>
    <el-form-item label="是否显示" prop="status">
      <el-switch
        v-model="formData.status"
        :active-value="1"
        :inactive-value="0"
        active-text="是"
        inactive-text="否">
      </el-switch>
    </el-form-item>
    <el-form-item label="资源选择" prop="resource_id" :rules="formRules.noFalse">
      <resource-search :disabled="disabled" :lock-type="Boolean(this.$route.query.resource_type)"
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

import SingleUpload from "@/components/common/SingleUpload";
import ResourceSearch from "@/components/common/ResourceSearch";

export default {
  // 如需组件名, 组件名由目录名和文件名构成, 帕斯卡命名法, 示例 name: 'DirectoryFile'
  mixins: [MixinFormAddEdit],
  components: { SingleUpload, ResourceSearch },
  data() {
    return {
      api: require(`@/api/column/${this.$route.path.replace(
        /^\/(\w+)_column.*/,
        "$1"
      )}`).default,
      formData: {
        pid: this.$route.query.pid,
        // 栏目名称
        title: "",
        // 副标题
        subtitle: "",
        // 顺序
        order: 0,
        status: 1,
        // 图片
        cover: "",
        // 资源类型(后端要，表单提交接口必须有)
        resource_type: Number(this.$route.query.resource_type),
        // 选中的资源(后端要，表单提交接口必须有)
        resource_id: 0,
        // 选中的资源(前端要，组件显示值)
        resource: {}
      }
    };
  },
  mounted() {
    this.$nextTick(function() {
      if (parent && parent.window)
        parent.window.columnFrameHeight(this.formData.pid);
    });
  },
  methods: {
    async beforeSubmit() {
      this.formData = {
        pid: this.formData.pid,
        title: this.formData.title,
        subtitle: this.formData.subtitle,
        order: this.formData.order,
        status: this.formData.status,
        cover: this.formData.cover,
        resource_type: this.formData.resource_type,
        resource_id: this.formData.resource_id,
        resource: {}
      };
    }
  }
};
</script>
<style lang="less">
/* 所有该模块样式都嵌套在 root class 内, 示例 .directory-file { .form-item-btn {} } */
</style>
