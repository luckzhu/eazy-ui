<template>
  <div class="popover" @click.stop="showContent">
    <div
      ref="contentWrapper"
      class="contentWrapper"
      v-if="isPopShow"
      @click.stop
    >
      <slot name="content"></slot>
    </div>
    <div class="triggerContent" ref="triggerContent">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPopShow: false
    };
  },
  methods: {
    showContent() {
      this.isPopShow = !this.isPopShow;
      if (this.isPopShow === true) {
        this.$nextTick(() => {
          let { contentWrapper } = this.$refs;
          document.body.appendChild(contentWrapper);
          let { left, top } = this.$refs.triggerContent.getBoundingClientRect();
          //注意是 window.scrollX
          contentWrapper.style.left = left + window.scrollX + "px";
          contentWrapper.style.top = top + window.scrollY + "px";
          let x = () => {
            this.isPopShow = false;
            document.removeEventListener("click", x);
          };
          document.addEventListener("click", x);
        });
      } else {
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.popover {
  position: relative;
}
.contentWrapper {
  position: absolute;
  padding: 14px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.65);
  transform: translateY(-100%)
}
</style>
