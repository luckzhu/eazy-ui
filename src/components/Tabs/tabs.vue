<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "EazyTabs",
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
  mounted(){
      this.eventBus.$emit('update:selected',this.selected)
  }
 
};
</script>

<style lang="scss" scoped>
.tabs {
    font-size: 16px;
}
</style>
