<template>
  <div class="avatar">
    <img :src="url" v-if="url"/>
    <svg-icon icon="people-fill" v-else/>
  </div>
</template>
<script>
export default {
  name: "Avatar",
  props: {
    url: String
  }
};
</script>
<style lang="less">
.avatar {
  border-radius: 50%;
  background: #f0f2f5;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  > .svg {
    font-size: 20px;
    color: #409eff;
  }
}
</style>
