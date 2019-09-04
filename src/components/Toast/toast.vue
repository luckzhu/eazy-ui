<template>
  <div class="wrapper" :class="toastPosition">
    <div class="toast" ref="toast">
      <div class="message">
        <slot v-if="!enableHtml"></slot>
        <div v-else v-html="$slots.default[0]"></div>
      </div>
      <span class="line" ref="line"></span>
      <span class="close" v-if="closeButton" @click="clickClose">{{
        closeButton.text
      }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "EzToast",
  props: {
    //要么设置false,要么就设数字是延时时间
    autoClose: {
      type: [Boolean, Number],
      default: true,
      validator(value) {
        return value === false || typeof value === "number";
      }
    },
    closeButton: {
      type: Object,
      //由于是个对象，必须写成函数形式return
      default() {
        return {
          text: "关闭",
          closeCallback: undefined
        };
      }
    },
    enableHtml: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "middle", "bottom"].indexOf(value) >= 0;
      }
    }
  },
  computed: {
    toastPosition() {
      return {
        [`position-${this.position}`]: true
      };
    }
  },
  mounted() {
    this.updateStyle();
    this.exeAutoClose();
  },
  methods: {
    updateStyle() {
      //异步问题可能会获取不到css，所以用nextTick()
      this.$nextTick(() => {
        //getBoundingClientRect()返回元素的大小及其相对于视口的位置
        this.$refs.line.style.height = `${
          this.$refs.toast.getBoundingClientRect().height
        }px`;
      });
    },
    exeAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.toastClose();
        }, this.autoClose * 1000);
      }
    },
    toastClose() {
      //destroy并不会将元素从页面移除，所以要remove
      this.$el.remove();
      this.$emit("close");
      this.$destroy();
    },
    clickClose() {
      this.toastClose();
      //callback的时候可以将this（当前的toast实例）传过去，这样就可以调用toast的内部方法
      if (
        this.closeButton &&
        typeof this.closeButton.closeCallback === "function"
      ) {
        this.closeButton.closeCallback(this);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
$toast-duration: 300ms;

@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}

@keyframes slide-down {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.wrapper {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  &.position-top {
    top: 0;
    .toast {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      animation: slide-down $toast-duration;
    }
  }
  &.position-middle {
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    .toast {
      animation: fade-in $toast-duration;
    }
  }
  &.position-bottom {
    bottom: 0;
    .toast {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      animation: slide-up $toast-duration;
    }
  }
}

.toast {
  font-size: $font-size;
  min-height: $toast-min-height;
  line-height: 1.8;
  color: white;
  display: inline-block;
  display: flex;
  align-items: center;
  justify-content: center;
  background: $toast-bg;
  border-radius: 5px;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);
  padding: 0 16px;
  .message {
    padding: 8px 0;
  }
  .line {
    display: inline-block;
    margin-left: 16px;
    height: 100%;
    border-left: 1px solid #666;
  }
  .close {
    padding-left: 16px;
    cursor: pointer;
    flex-shrink: 0; //不会换行
  }
}
</style>
