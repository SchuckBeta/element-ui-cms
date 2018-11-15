<template>
  <iframe class="column-resource-iframe" width="100%" scrolling="no" frameborder="0"
          ref="iframe" :src="src"/>
</template>
<script>
export default {
  mixins: [],
  components: {},
  props: {
    resourcePath: {
      type: String,
      required: true
    },
    item: {
      type: Object,
      required: true
    },
    show: {
      type: Boolean,
      required: false
    }
  },
  data() {
    return {
      src: ""
    };
  },
  watch: {
    show: {
      immediate: true,
      handler() {
        this.setSrc();
      }
    },
    $route: {
      immediate: true,
      deep: true,
      handler() {
        this.setSrc();
      }
    }
  },
  methods: {
    setSrc() {
      if (this.show) {
        const pid = `pid=${this.item.id}`;
        const type = `resource_type=${this.item.child_resource_type}`;
        if (
          !(
            this.src.includes(this.$route.path) &&
            this.src.includes(pid) &&
            this.src.includes(type)
          )
        ) {
          this.src = `${
            this.resourcePath
          }?${pid}&${type}&page_header=0&page_side=0&page_footer=0&page_content_header=0&limit=8`;
        }
      }
    }
  }
};
</script>
<style lang="less">
.column-resource-iframe {
  min-height: 330px;
}
</style>
