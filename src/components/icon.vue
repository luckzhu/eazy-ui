<template>
  <svg class="zhu-icon">
    <use :xlink:href="`#icon-${name}`" />
  </svg>
</template>

<script>
import './iconfont.js'
export default {
  props: {
    name: {}
  }
};
</script>

<style>
.zhu-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>