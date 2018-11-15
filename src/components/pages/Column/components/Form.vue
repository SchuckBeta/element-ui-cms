<template>
  <!-- 如需定制样式, 在root元素写上 class="页面目录名-模块名", 示例 <root class="directory-file"> -->
  <el-form class="form-add-edit" label-width="120px"
           :model="formData" :rules="formRules" ref="form" :disabled="disabled">
    <el-form-item label="标题" prop="title" :rules="formRules.required">
      <el-input v-model="formData.title"/>
    </el-form-item>
    <!-- 富文本编辑器的表单项验证需要设置 :show-message="!formData.content" 才能实现预期效果 -->
    <el-form-item label="内容" prop="content" :show-message="!formData.content" :rules="formRules.required">
      <editor :content.sync="formData.content" :height="200" :readonly="disabled"/>
    </el-form-item>
    <el-form-item label="类型" prop="type" :rules="formRules.required">
      <el-select v-model="formData.type" placeholder="请选择">
        <el-option
          v-for="item in [{text: '重要', value: 1}, {text: '一般', value: 2}]"
          :key="item.value"
          :label="item.text"
          :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="置顶" prop="top" :rules="formRules.required">
      <el-switch
        v-model="formData.top"
        active-text="是"
        inactive-text="否">
      </el-switch>
    </el-form-item>
    <el-form-item label="附件" prop="attachment">
      <multiple-upload :file-list.sync="formData.attachment"
                     :disabled="disabled"/>
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
import api from "@/api/announcement";

import MultipleUpload from "@/components/common/MultipleUpload";

const Editor = () => import("@/components/common/Editor");

export default {
  // 如需组件名, 组件名由目录名和文件名构成, 帕斯卡命名法, 示例 name: 'DirectoryFile'
  mixins: [MixinFormAddEdit],
  components: { Editor, MultipleUpload },
  data() {
    return {
      api,
      formData: {
        title: "",
        content: "",
        type: 1,
        top: false,
        attachment: []
      }
    };
  }
  // 可以在computed对象内覆写MixinList的computed相关属性, 比如 id, apiCreate...
};
</script>
<style lang="less">
/* 所有该模块样式都嵌套在 root class 内, 示例 .directory-file { .form-item-btn {} } */
</style>
