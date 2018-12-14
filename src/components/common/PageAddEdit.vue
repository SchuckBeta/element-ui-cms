<template>
  <page-content class="page-add-edit">
    <div class="add-edit-header">
      <el-button class="back-btn" size="mini" @click="back" v-if="backBtn">{{$t('action.close')}}</el-button>
    </div>
    <div class="add-edit-main">
      <slot/>
    </div>
  </page-content>
</template>
<script>
import PageContent from "@/components/common/PageContent";
import { mutations as mutationsTypes } from "@/config/vuex/types/pages";
import { namespaces } from "@/config/vuex/index";
import { createNamespacedHelpers } from "vuex";

const { mapMutations } = createNamespacedHelpers(namespaces.pages);

export default {
  name: "PageAddEdit",
  components: { PageContent },
  props: {
    backBtn: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    ...mapMutations([mutationsTypes.SET_TABS]),
    back() {
      const path = this.$route.path;
      if (history.length < 3 || this.$store.state.pages.tabs.length < 2) {
        this.$router.push({ path: path.replace(/(\/add|\/edit).*$/, "") });
      }
      this[mutationsTypes.SET_TABS]({ path, remove: true });
    }
  }
};
</script>
<style lang="less">
.page-add-edit {
  position: relative;
  .content-main {
    > .add-edit-header {
      margin: -10px 0 10px;
      text-align: right;
      position: sticky;
      top: 0;
      z-index: 10;
      background: #ffffff;
    }
    > .add-edit-main {
      position: relative;
      .form-add-edit {
        position: relative;
      }
      .form-item-btn {
        text-align: right;
        position: sticky;
        bottom: 0;
        background: #ffffff;
        z-index: 10;
      }
    }
  }
}
</style>
