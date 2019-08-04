<template>
  <div class="ez-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  mounted() {
    for (let node of this.$el.children) {
      let name = node.nodeName.toLowerCase();
      if (name !== "button") {
        console.warn(
          `ez-button-group的子元素应该全是 ez-button,但你写的是${name}`
        );
      }
    }
  }
};
</script>

<style lang="scss">
.ez-button-group {
  display: inline-flex;
  vertical-align: middle;
  & > .ez-button {
    border-radius: 0;
    &:first-child {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    &:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
    &:not(:first-child) {
      margin-left: -1px;
    }
    &:hover {
      z-index: 1;
    }
  }
}
</style>