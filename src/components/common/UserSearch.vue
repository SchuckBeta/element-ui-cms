<template>
  <div>
    <el-autocomplete
      class="user-search"
      clearable
      value-key="name"
      v-model="user.name"
      :fetch-suggestions="fetchSuggestions"
      @select="selectSuggestion"
      v-bind="$attrs"
      v-if="visible"
    >
      <i slot="prefix" class="el-input__icon el-icon-search"></i>
    </el-autocomplete>
    <div><span>ID：</span><span>{{user.id}}</span></div>
    <div><span>姓名：</span><span>{{user.name}}</span></div>
    <div><span>所属机构：</span><span>{{user.organ_name}}</span></div>
    <div><span>手机号：</span><span>{{user.phone}}</span></div>
  </div>
</template>
<script>
import api from "@/api/user";

const defaultObj = {
  id: "",
  // 姓名
  name: "",
  // 所属机构
  organ_name: "",
  // 手机号
  phone: "",
  // 邮箱
  email: "",
  // 用户状态
  status: ""
};

export default {
  data() {
    return {};
  },
  inheritAttrs: false,
  props: {
    user: {
      type: Object,
      require: true,
      default() {
        return Object.assign({}, defaultObj);
      }
    },
    visible: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    "user.name": {
      handler(val) {
        if (val === "") {
          this.selectSuggestion(Object.assign({}, defaultObj));
        }
      }
    },
    "user.id": {
      handler(val) {
        if (val === "") {
          this.selectSuggestion(Object.assign({}, defaultObj));
        }
      }
    }
  },
  methods: {
    async fetchSuggestions(queryString, cb) {
      const res = await api.fn.list({ search: queryString });
      let data = res.data && res.data.results;
      if (
        Object.prototype.toString.call(data) === "[object Array]" &&
        data.length
      ) {
        const item = data[0];
        // 如果用户输入了关键字，并且完整匹配搜索结果中第一项，则帮用户默认选择此结果
        if (
          queryString &&
          (queryString === item.name || queryString === item.phone)
        ) {
          this.selectSuggestion(item);
        }
      } else {
        data = [];
      }
      // 显示搜索结果列表
      cb(data);
    },
    selectSuggestion(item) {
      Object.assign(this.user, item);
    }
  }
};
</script>
<style lang="less">
.user-search {
  width: 100%;
}
</style>
