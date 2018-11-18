<template>
  <!-- 如需定制样式, 在root元素写上 class="页面目录名-模块名", 示例 <root class="directory-file"> -->
  <el-form class="form-add-edit" label-width="120px"
           :model="formData" :rules="formRules" ref="form" :disabled="disabled">
    <el-form-item :label="$t('page.content.title')" prop="title" :rules="formRules.required">
      <el-input v-model="formData.title"/>
    </el-form-item>
    <el-form-item :label="$t('page.content.order')" prop="order" :rules="formRules.required">
      <el-input-number v-model="formData.order"/>
    </el-form-item>
    <el-form-item :label="$t('page.content.selectResource')"  prop="resource_id" :rules="formRules.noFalse"s>
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

import ResourceSearch from "@/components/common/ResourceSearch";

export default {
  // 如需组件名, 组件名由目录名和文件名构成, 帕斯卡命名法, 示例 name: 'DirectoryFile'
  mixins: [MixinFormAddEdit],
  components: { ResourceSearch },
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
  }
};
</script>
<style lang="less">
/* 所有该模块样式都嵌套在 root class 内, 示例 .directory-file { .form-item-btn {} } */
</style>
