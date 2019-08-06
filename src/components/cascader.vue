<template>
  <div class="cascader">
    <div class="trigger" @click="toggle">
      <slot></slot>
    </div>
    <ez-cascader-items :items="source" v-if="isPopVisible"></ez-cascader-items>
  </div>
</template>

<script>
import CascaderItems from "./cascader-items";
export default {
  name: "EazyCascader",
  components: {
    "ez-cascader-items": CascaderItems
  },
  data() {
    return {
      isPopVisible: false
    };
  },
  props: {
    source: {
      type: Array
    }
  },
  methods: {
    toggle() {
      this.isPopVisible = !this.isPopVisible;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>