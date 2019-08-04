<template>
  <div ref="popover" class="popover" @click="onClickPop">
    <div ref="contentWrapper" class="contentWrapper" v-if="isPopShow">
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
    positionPop() {
      let { contentWrapper } = this.$refs;
      document.body.appendChild(contentWrapper);
      let { left, top } = this.$refs.triggerContent.getBoundingClientRect();
      //注意是 window.scrollX
      contentWrapper.style.left = left + window.scrollX + "px";
      contentWrapper.style.top = top + window.scrollY + "px";
    },

    onClickDocument(event) {
      if (this.$refs.contentWrapper.contains(event.target)) {
      } else {
        this.popClose();
      }
    },

    popShow() {
      this.isPopShow = true;
      setTimeout(() => {
        this.positionPop();
        document.addEventListener("click", this.onClickDocument);
      }, 0);
    },
    popClose() {
      this.isPopShow = false;
      document.removeEventListener("click", this.onClickDocument);
    },

    onClickPop(event) {
      //只有点中按钮中的元素时才触发onClickPop
      if (this.$refs.triggerContent.contains(event.target)) {
        if (this.isPopShow === true) {
          this.popClose();
        } else {
          this.popShow();
        }
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
