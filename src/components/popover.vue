<template>
  <div ref="popover" class="popover" @click="onClickPop">
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
  props: {
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom", "left", "right"].indexOf(value) >= 0;
      }
    }
  },
  methods: {
    positionPop() {
      const { contentWrapper, triggerContent } = this.$refs;
      document.body.appendChild(contentWrapper);
      let { left, top, height, width } = triggerContent.getBoundingClientRect();
      //注意是 window.scrollX
      if (this.position === "top") {
        contentWrapper.style.left = left + window.scrollX + "px";
        contentWrapper.style.top = top + window.scrollY + "px";
      } else if (this.position === "bottom") {
        contentWrapper.style.left = left + window.scrollX + "px";
        contentWrapper.style.top = top + height + window.scrollY + "px";
      } else if (this.position === "left") {
        let { height: ContentHeight } = contentWrapper.getBoundingClientRect();
        contentWrapper.style.left = left + window.scrollX + "px";
        contentWrapper.style.top =
          top - (ContentHeight - height) / 2 + window.scrollY + "px";
      } else if (this.position === "right") {
        let { height: ContentHeight } = contentWrapper.getBoundingClientRect();
        contentWrapper.style.left = left + width + window.scrollX + "px";
        contentWrapper.style.top =
          top - (ContentHeight - height) / 2 + window.scrollY + "px";
      }
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
