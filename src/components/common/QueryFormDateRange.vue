<template>
  <el-date-picker
    v-bind="$attrs"
    v-model="dateRange"
    type="daterange"
    :range-separator="$t('form.dateRange.separator')"
    :start-placeholder="$t('form.dateRange.start')"
    :end-placeholder="$t('form.dateRange.end')"
    value-format="yyyy-MM-dd"
    :editable="false"
    unlink-panels
  >
  </el-date-picker>
</template>
<script>
export default {
  name: "QueryFormDateRange",
  inheritAttrs: false,
  props: {
    date_range_start: {
      type: String,
      required: true
    },
    date_range_end: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      dateRange: []
    };
  },
  watch: {
    date_range_start: {
      immediate: true,
      handler(val) {
        if (val) {
          this.dateRange[0] = val;
        } else {
          this.dateRange = [];
        }
      }
    },
    date_range_end: {
      immediate: true,
      handler(val) {
        if (val) {
          this.dateRange[1] = val;
        } else {
          this.dateRange = [];
        }
      }
    },
    dateRange: {
      handler(val) {
        if (
          Object.prototype.toString.call(val) === "[object Array]" &&
          val.length
        ) {
          this.$emit("update:date_range_start", val[0]);
          this.$emit("update:date_range_end", val[1]);
        } else {
          this.$emit("update:date_range_start", "");
          this.$emit("update:date_range_end", "");
        }
      }
    }
  }
};
</script>
