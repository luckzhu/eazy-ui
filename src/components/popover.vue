<template>
  <div class="popover" @click="showContent">
    <div
      ref="contentWrapper"
      class="contentWrapper"
      v-if="isPopShow"
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
    showContent(event) {
      //只有点中按钮中的元素时才触发showContent
      if (this.$refs.triggerContent.contains(event.target)) {
        this.isPopShow = !this.isPopShow;
      }

      if (this.isPopShow === true) {
        setTimeout(() => {
          let { contentWrapper } = this.$refs;
          document.body.appendChild(contentWrapper);
          let { left, top } = this.$refs.triggerContent.getBoundingClientRect();
          //注意是 window.scrollX
          contentWrapper.style.left = left + window.scrollX + "px";
          contentWrapper.style.top = top + window.scrollY + "px";
          let x = e => {
            if (contentWrapper.contains(e.target)) {
            } else {
              this.isPopShow = false;
              document.removeEventListener("click", x);
            }
          };
          document.addEventListener("click", x);
        }, 0);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.popover {
  position: relative;
  display: inline-block;
}
.contentWrapper {
  position: absolute;
  padding: 14px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.65);
  transform: translateY(-100%);
}
</style>
