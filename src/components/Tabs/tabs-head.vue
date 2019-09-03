<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="actionWrapper">
      <slot name="action"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "EazyTabsHead",
  inject: ["eventBus"]
};
</script>

<style lang="scss" scoped>
.tabs-head {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 0 15px;
  > .actionWrapper {
    margin-left: auto;
  }
}
</style>
