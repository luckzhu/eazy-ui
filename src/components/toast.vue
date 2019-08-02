<template>
  <div class="toast" ref="toast">
    <div class="message">
      <slot v-if="!enableHtml"></slot>
      <div v-else v-html="$slots.default[0]"></div>
    </div>
    <span class="line" ref="line"></span>
    <span class="close" v-if="closeButton" @click="clickClose">{{closeButton.text}}</span>
  </div>
</template>

<script>
export default {
  name: "ZhuToast",
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    closeTime: {
      type: Number,
      default: 5
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
        }, this.closeTime * 1000);
      }
    },
    toastClose() {
      //destroy并不会将元素从页面移除，所以要remove
      this.$el.remove();
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
.toast {
  font-size: $font-size;
  min-height: $toast-min-height;
  line-height: 1.8;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  display: inline-block;
  display: flex;
  align-items: center;
  justify-content: center;
  background: $toast-bg;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);
  padding: 0 16px;
}
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
</style>
