<template>
  <el-autocomplete
    class="resource-search"
    :class="{'id-show':resourceId,'lock-type':lockType}"
    clearable
    :trigger-on-focus="false"
    value-key="title"
    v-model="resourceTitle"
    :fetch-suggestions="fetchSuggestions"
    @select="selectSuggestion"
    v-bind="$attrs"
  >
    <span class="resource-type-lock" slot="prepend" v-if="lockType">{{selectedType.text}}</span>
    <el-select class="resource-type" slot="prepend" placeholder="请选择"
               v-model="resourceType" @change="selectedTypeUpdate"
               v-bind="$attrs"
               v-else>
      <template v-for="item in resourceTypeOption">
        <el-option
          :key="item.value"
          :label="item.text"
          :value="item.value"/>
      </template>
    </el-select>
    <i slot="prefix" class="el-input__icon el-icon-search"></i>
    <span slot="append" class="resource-id" v-if="resourceId">ID: <strong>{{resourceId}}</strong></span>
  </el-autocomplete>

</template>
<script>
import apiCommon from "@/api/common";
import { mapState } from "vuex";
import { getOptionByValue } from "@/utils";

export default {
  name: "ResourceSearch",
  inheritAttrs: false,
  props: {
    // 是否锁定资源类型
    lockType: {
      type: Boolean,
      default: false
    },
    // 默认可选所有资源类型，如果数组有值，数组内容必须为类型id
    includeType: {
      type: Array,
      default() {
        return [];
      }
    },
    // 默认资源类型
    type: {},
    // 默认资源id
    id: {},
    // 默认资源title
    title: String,
    // 用户选中的资源数据对象，{}表示可以传任意值
    resource: {},
    // 从资源数据对象中获得id的key，后端无法保证数据对象的key是id的值就是资源id，有可能是其他key
    idKey: {
      type: String,
      default: "id"
    },
    // 从资源数据对象中获得title的key，同上原因
    titleKey: {
      type: String,
      default: "title"
    }
  },
  data() {
    return {
      resourceId: 0,
      resourceTitle: "",
      resourceType: 1
    };
  },
  computed: {
    ...mapState(["options"]),
    resourceTypeOption() {
      if (this.includeType.length) {
        return this.options.resource_type.filter(option =>
          this.includeType.find(id => option.value === id)
        );
      }
      return this.options.resource_type;
    },
    selectedType() {
      return getOptionByValue(
        this.options.resource_type,
        this.resourceType,
        "value"
      );
    }
  },
  watch: {
    type: {
      immediate: true,
      handler(val) {
        if (val) this.resourceType = Number(val);
      }
    },
    id: {
      immediate: true,
      handler(val) {
        if (val) this.resourceId = Number(val);
      }
    },
    title: {
      immediate: true,
      handler(val) {
        if (val) this.resourceTitle = val;
      }
    },
    resource: {
      immediate: true,
      handler(val) {
        if (val !== undefined) this.selectSuggestion(val);
      }
    },
    resourceTitle: {
      handler(val) {
        if (!val) {
          this.selectSuggestion();
        }
      }
    }
  },
  methods: {
    resourceValid(item) {
      return (
        Object.prototype.toString.call(item) === "[object Object]" &&
        item[this.idKey] &&
        item[this.titleKey] &&
        item.resource_type &&
        item.is_active &&
        item.status
      );
    },
    // 搜索建议数据
    async fetchSuggestions(queryString, cb) {
      let data = [];
      if (queryString) {
        const res = await apiCommon.fn.resource({
          word: queryString,
          type: this.resourceType
        });
        data =
          res.data &&
          res.data[this.selectedType.key] &&
          res.data[this.selectedType.key].results;
        if (Object.prototype.toString.call(data) === "[object Array]") {
          data = data.filter(item => this.resourceValid(item));
          if (data.length) {
            const item = data[0];
            // 如果用户输入了关键字，并且完整匹配搜索结果中第一项，则帮用户默认选择此结果
            if (queryString && queryString === item[this.titleKey]) {
              this.selectSuggestion(item);
            }
          }
        } else {
          data = [];
        }
      }
      // 显示搜索结果列表
      cb(data);
    },
    // 选中一项搜索建议数据
    selectSuggestion(item) {
      if (this.resourceValid(item)) {
        this.resourceId = item[this.idKey];
        this.resourceTitle = item[this.titleKey];
      } else {
        this.resourceId = 0;
        this.resourceTitle = "";
        item = null;
      }
      this.$emit("update:id", this.resourceId);
      this.$emit("update:title", this.resourceTitle);
      this.$emit("update:resource", item);
    },
    // 选中一项资源类型
    selectedTypeUpdate(val) {
      if (val) this.resourceType = Number(val);
      this.$emit("update:type", this.resourceType);
    }
  }
};
</script>
<style lang="less">
.resource-search {
  width: 100%;
  .resource-type {
    .el-input {
      width: 120px;
    }
  }
  &:not(.lock-type) {
    .el-input-group__prepend {
      background-color: #fff;
    }
  }
}
</style>
