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
      eventBus: new Vue(),
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
    let selectedCopy = JSON.parse(JSON.stringify(this.selected))
    this.eventBus.$emit("update:selected", this.selected);
    this.eventBus.$on("update:addSelected", name => {
      if(this.single){
        this.selectedCopy = [name]
      }else {
        this.selectedCopy.push(name)
      }
      this.eventBus.$emit("update:selected", this.selectedCopy);
    });
    this.eventBus.$on("update:removeSelected", name=>{
      if(this.single){
        this.selectedCopy = []
      }else {
        let index = this.selectedCopy.indexOf(name)
        this.selectedCopy.splice(index,1)
      }
      this.eventBus.$emit("update:selected", this.selectedCopy);
    })
  }
};
</script>

<style lang="scss" scoped>
$border-radius: 4px;
.collapse {
  border-radius: $border-radius;
}
</style>