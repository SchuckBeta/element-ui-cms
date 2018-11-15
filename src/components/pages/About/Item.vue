<template>
  <!-- 如需定制样式, 在root元素写上 class="页面目录名-模块名", 示例 <root class="directory-file"> -->
  <page-add-edit :back-btn="false">
    <common-form/>
  </page-add-edit>
</template>
<script>
import PageAddEdit from "@/components/common/PageAddEdit";
import CommonForm from "./components/Form";

export default {
  components: { PageAddEdit, CommonForm }
};
</script>
<style lang="less">
/* 所有该模块样式都嵌套在 root class 内, 示例 .directory-file { .content-main {} } */
</style>
