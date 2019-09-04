<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "EzCollapse",
  data() {
    return {
      eventBus: new Vue()
    };
  },
  props: {
    selected: {
      type: Array
    },
    single: {
      type: Boolean,
      default: false
    }
  },
  provide() {
    return {
      eventBus: this.eventBus
    };
  },
  mounted() {
    this.eventBus.$emit("update:selected", this.selected);
    this.eventBus.$on("update:addSelected", name => {
      let selectedCopy = JSON.parse(JSON.stringify(this.selected));
      if (this.single) {
        selectedCopy = [name];
      } else {
        selectedCopy.push(name);
      }
      this.eventBus.$emit("update:selected", selectedCopy);
    });
    this.eventBus.$on("update:removeSelected", name => {
      let selectedCopy = JSON.parse(JSON.stringify(this.selected));
      if (this.single) {
        selectedCopy = [];
      } else {
        let index = selectedCopy.indexOf(name);
        selectedCopy.splice(index, 1);
      }
      this.eventBus.$emit("update:selected", selectedCopy);
    });
  }
};
</script>

<style lang="scss" scoped>
$border-radius: 4px;
.collapse {
  border-radius: $border-radius;
}
</style>