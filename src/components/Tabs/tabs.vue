<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "EzTabs",
  data() {
    return {
      eventBus: new Vue()
    };
  },
  props: {
    selected: {
      type: String | Number,
      required: true
    }
  },
  provide() {
    return {
      eventBus: this.eventBus
    };
  },
  mounted() {
    if (this.$children.length === 0) {
      console &&
        console.warn &&
        console.warn("tabs的子组件应该是tabs-head和tabs-nav，但你没有写子组件");
    }

    this.$children.forEach(vm => {
      if (vm.$options.name === "EzTabsHead") {
        vm.$children.forEach(childVm => {
          if (
            childVm.$options.name === "EzTabsItem" &&
            childVm.name === this.selected
          ) {
            this.eventBus.$emit("update:selected", this.selected, childVm);
          }
        });
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.tabs {
  font-size: 16px;
}
</style>
