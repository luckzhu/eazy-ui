<template>
  <div class="toast">
    <slot></slot>
    <span class="line"></span>
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
      default: 5,
    },
    closeButton: {
      type: Object,
      //由于是个对象，必须写成函数形式return
      default(){
        return{
          text: '关闭',
          closeCallback: undefined
        }
      }
    }
  },
  mounted() {
    if (this.autoClose) {
      setTimeout(() => {
       this.toastClose()
      }, this.closeTime * 1000);
    }
  },
  methods: {
    toastClose() {
      //destroy并不会将元素从页面移除，所以要remove
      this.$el.remove();
      this.$destroy();
    },
    clickClose(){
      this.toastClose()
      this.closeButton.closeCallback()
    }
  }
};
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
.toast {
  font-size: $font-size;
  height: $toast-height;
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

.line {
  display: inline-block;
  margin-left: 16px;
  height: 100%;
  border-left: 1px solid #666;
}

.close {
  padding-left: 16px;
  cursor: pointer;
}
</style>
