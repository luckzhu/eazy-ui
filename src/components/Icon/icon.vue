<template>
   <svg class="ez-icon" @click="$emit('click', $event)">
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>

<script>
import "./iconfont";
export default {
   name: 'EzIcon',
    props: ['name']
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