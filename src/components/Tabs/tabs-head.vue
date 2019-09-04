<template>
  <div class="tabs-head">
    <div class="line" ref="line" ></div>
    <slot></slot>
    <div class="actionWrapper">
      <slot name="action"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "EzTabsHead",
  inject: ["eventBus"],
  mounted () {
      this.eventBus.$on('update:selected', (item, vm) => {
        let {width, height, top, left} = vm.$el.getBoundingClientRect()
        this.$refs.line.style.width = `${width}px`
        this.$refs.line.style.left = `${left}px`
      })
    }
};
</script>

<style lang="scss" scoped>
.tabs-head {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 0 15px;
  position:relative;
   > .line {
      position: absolute;
      bottom: 0;
      border-bottom: 2px solid #409eff;
      transition: all 350ms;
      transform: translateX(-35%);
    }
  > .actionWrapper {
    margin-left: auto;
  }
}
</style>
