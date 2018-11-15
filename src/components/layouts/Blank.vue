<template>
  <router-view class="layout-blank"/>
</template>
<script>
export default {
  name: "LayoutBlank",
  mixins: [],
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.$nextTick(function() {});
  },
  beforeDestroy() {},
  methods: {}
};
</script>
<style lang="less">
.layout-blank {
  height: 100%;
}
</style>
