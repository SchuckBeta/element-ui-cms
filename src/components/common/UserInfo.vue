<template>
  <div class="user-info">
    <avatar :url="user.avatar"/>
    <div class="info">
      <div class="organ" v-if="user.organ_name">{{user.organ_name}}</div>
      <div class="name">{{user.name}}</div>
      <div class="role">{{currentRole.name}}</div>
    </div>
    <slot/>
  </div>
</template>
<script>
import Avatar from "@/components/common/Avatar";

export default {
  name: "UserInfo",
  components: { Avatar },
  props: {
    user: {
      type: Object,
      required: true
    },
    currentRole: {
      type: Object,
      required: true
    }
  }
};
</script>
<style lang="less">
.user-info {
  display: flex;
  align-items: center;
  line-height: 1.2;

  > .info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 5px;
    height: 100%;
    > .role {
      font-size: 12px;
    }
  }
}
</style>
