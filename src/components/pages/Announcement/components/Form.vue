<template>
  <!-- 如需定制样式, 在root元素写上 class="页面目录名-模块名", 示例 <root class="directory-file"> -->
  <el-form class="form-add-edit" label-width="120px"
           :model="formData" :rules="formRules" ref="form" :disabled="disabled">
    <el-form-item :label="$t('page.list.title')" prop="title" :rules="formRules.required">
      <el-input v-model="formData.title"/>
    </el-form-item>
    <!-- 富文本编辑器的表单项验证需要设置 :show-message="!formData.content" 才能实现预期效果 -->
    <el-form-item :label="$t('page.list.content')" prop="content" :show-message="!formData.content"
                  :rules="formRules.required">
      <editor :content.sync="formData.content" :height="200" :readonly="disabled"/>
    </el-form-item>
    <el-form-item :label="$t('page.list.type')" prop="type" :rules="formRules.required">
      <el-select v-model="formData.type" :placeholder="$t('action.pleaseSelect')">
        <el-option
          v-for="item in options.importance"
          :key="item.value"
          :label="item.text"
          :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item :label="$t('page.list.top')" prop="top" :rules="formRules.required">
      <el-switch
        v-model="formData.top"
        :active-value="1"
        :inactive-value="0"
        :active-text="$t('action.yes')"
        :inactive-text="$t('action.no')">
      </el-switch>
    </el-form-item>
    <el-form-item :label="$t('page.list.attachment')" prop="attachment">
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
        top: 0,
        attachment: []
      }
    };
  },
  // 可以在computed对象内覆写MixinList的computed相关属性, 比如 id, apiCreate...
  computed: {
    //      id () { return this.$route.query.other_id }
  },
  methods: {
    // 如果要取消默认提交行为，则return Promise.reject(new Error())
    //      async beforeSubmit () {
    //        console.log(this.formData)
    //        return Promise.reject(new Error())
    //      }
  }
};
</script>
<style lang="less">
/* 所有该模块样式都嵌套在 root class 内, 示例 .directory-file { .form-item-btn {} } */
</style>
