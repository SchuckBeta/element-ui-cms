<template>
  <div class="svg">
    <svg class="svg-icon" aria-hidden="true">
      <use :xlink:href="iconName"></use>
    </svg>
  </div>

</template>

<script>
export default {
  name: "SvgIcon",
  props: {
    icon: {
      type: String,
      required: true
    }
  },
  computed: {
    iconName() {
      return `#icon-${this.icon}`;
    }
  },
  created() {
    require(`@/assets/img/icons/svg/${this.icon}.svg`);
  }
};
</script>

<style>
.svg {
  display: inline-block;
  user-select: none;
}

.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
