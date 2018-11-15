<template>
  <div class="page-footer">
    <span>{{$t('page.footer.info')}}</span>
  </div>
</template>
<script>
export default {
  name: "PageFooter"
};
</script>
<style lang="less">
.page-footer {
  background-color: #293040;
  color: #999999;
  font-size: 14px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
