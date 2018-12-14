<template>
  <el-dropdown :class="`switch-language switch-language-${className}`" :show-timeout="100">
    <div class="lang">
      <svg-icon icon="global"/>
      <span class="name">{{$t(`lang.${locale}`)}}</span>
      <i class="el-icon-arrow-down"></i>
    </div>
    <el-dropdown-menu slot="dropdown" :class="`dropdown-action-switch-language-${className}`">
      <el-dropdown-item v-for="(item,index) in list"
                        :key="index"
                        @click.native="switchLanguage(item)"
                        :disabled="item===locale">
        {{$t(`lang.${item}`)}}
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>
<script>
import lang from "@/config/lang";
import { mutations as mutationsTypes } from "@/config/vuex/types/i18n";
import { namespaces } from "@/config/vuex/index";
import { createNamespacedHelpers } from "vuex";

const { mapState, mapMutations } = createNamespacedHelpers(namespaces.i18n);

export default {
  name: "SwitchLanguage",
  mixins: [],
  components: {},
  props: {
    className: {
      type: String,
      default: "sign-in"
    }
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({ locale: state => state.locale }),
    list() {
      return Object.values(lang);
    }
  },
  watch: {},
  created() {},
  mounted() {
    this.$nextTick(function() {});
  },
  beforeDestroy() {},
  methods: {
    ...mapMutations([mutationsTypes.SET_LANG]),
    switchLanguage(lang) {
      this[mutationsTypes.SET_LANG](lang);
      // 个别组件的国际化是初始化时通过组件的props赋值实现的，想要实时切换语言只能刷页面
      window.location.reload();
    }
  }
};
</script>
<style lang="less">
.dropdown-action-switch-language-sign-in {
  top: 220px !important;
}

.dropdown-action-switch-language-page-header {
  top: 34px !important;
}

.switch-language {
  vertical-align: middle;
  .lang {
    color: #000000;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0 10px;
    font-size: 14px;
    height: 100%;
    .svg {
      font-size: 16px;
      margin: 0 2px 0 0;
    }
    .name {
      margin-right: 5px;
    }
    &:hover {
      background-color: #ecf5ff;
      color: #409eff;
    }
  }
}

.switch-language-page-header {
  .lang {
    color: #ffffff;
  }
}
</style>
