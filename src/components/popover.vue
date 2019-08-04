<template>
  <div class="popover" @click.stop="showContent">
    <div class="contentWrapper" v-if="isPopShow" @click.stop>
      <slot name="content"></slot>
    </div>
    <slot></slot>
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
  display: flex;
  flex-direction: column;
  position: relative;
  > * {
    align-self: baseline;
  }
  > .contentWrapper {
    padding: 14px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.65);
    position: absolute;
    bottom: 100%;
    left: 0;
  }
}
</style>
