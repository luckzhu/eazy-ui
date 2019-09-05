<template>
  <div ref="popover" class="popover">
    <div
      ref="contentWrapper"
      class="contentWrapper"
      v-if="isPopShow"
      :class="{ [`position-${position}`]: true }"
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
  mounted() {
    if (this.trigger === "click") {
      this.$refs.popover.addEventListener("click", this.onClickPop);
    } else if (this.trigger === "hover") {
      this.$refs.popover.addEventListener("mouseenter", this.popShow);
      this.$refs.popover.addEventListener("mouseleave", this.popClose);
    }
  },
  destroyed() {
    if (this.trigger === "click") {
      if (!this.$refs.popover) return;
      this.$refs.popover.removeEventListener("click", this.onClickPop);
    } else if (this.trigger === "hover") {
      if (!this.$refs.popover) return;
      this.$refs.popover.removeEventListener("mouseenter", this.popShow);
      this.$refs.popover.removeEventListener("mouselever", this.popClose);
    }
  },
  props: {
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom", "left", "right"].indexOf(value) >= 0;
      }
    },
    trigger: {
      type: String,
      default: "click",
      validator(value) {
        return ["click", "hover"].indexOf(value) >= 0;
      }
    }
  },
  methods: {
    positionPop() {
      const { contentWrapper, triggerContent } = this.$refs;
      document.body.appendChild(contentWrapper);
      const {
        left,
        top,
        height,
        width
      } = triggerContent.getBoundingClientRect();
      const { height: ContentHeight } = contentWrapper.getBoundingClientRect();
      //注意加上 window.scrollX
      let x = {
        top: {
          top: top + window.scrollY,
          left: left + window.scrollX
        },
        bottom: {
          top: top + height + window.scrollY,
          left: left + window.scrollX
        },
        left: {
          top: top - (ContentHeight - height) / 2 + window.scrollY,
          left: left + window.scrollX
        },
        right: {
          top: top - (ContentHeight - height) / 2 + window.scrollY,
          left: left + width + window.scrollX
        }
      };
      contentWrapper.style.top = x[this.position].top + "px";
      contentWrapper.style.left = x[this.position].left + "px";
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
  vertical-align: top;
}
.contentWrapper {
  display: block;
  position: absolute;
  padding: 14px;
  max-width: 140px;
  word-break: break-all; //中文使用，英文不建议使用
  // box-shadow: 0 0 3px rgba(0, 0, 0, 0.65);
  filter: drop-shadow(0.5px 0.5px 0.5px rgba(0, 0, 0, 0.65));
  background-color: #fff;

  &::before,
  &::after {
    content: "";
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    border: 10px solid transparent;
  }

  &.position-top {
    margin-top: -10px;
    transform: translateY(-100%);
    &::before,
    &::after {
      left: 15px;
    }

    &::before {
      top: 100%;
      border-top-color: #ebebeb;
    }

    &::after {
      top: calc(100% - 1px);
      border-top-color: white;
    }
  }

  &.position-bottom {
    margin-top: 10px;
    &::before,
    &::after {
      left: 15px;
    }

    &::before {
      bottom: 100%;
      border-bottom-color: #ebebeb;
    }

    &::after {
      bottom: calc(100% - 1px);
      border-bottom-color: white;
    }
  }

  &.position-left {
    margin-left: -10px;
    transform: translateX(-100%);
    &::before,
    &::after {
      transform: translateY(-50%);
      top: calc(50%);
    }

    &::before {
      left: 100%;
      border-left-color: #ebebeb;
    }

    &::after {
      left: calc(100% - 1px);
      border-left-color: white;
    }
  }

  &.position-right {
    margin-left: 10px;
    &::before,
    &::after {
      transform: translateY(-50%);
      top: calc(50%);
    }

    &::before {
      right: 100%;
      border-right-color: #ebebeb;
    }

    &::after {
      right: calc(100% - 1px);
      border-right-color: white;
    }
  }
}
</style>
