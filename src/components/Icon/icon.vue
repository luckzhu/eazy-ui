<template>
  <svg class="ez-icon" @click="$emit('btnClick', $event)">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
import "@/components/Icon/iconfont.js";
export default {
  props: {
    name: {}
  }
};
</script>

<style>
.ez-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>