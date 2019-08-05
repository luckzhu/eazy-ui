<template>
  <div class="collapseItem">
    <div class="title" @click="toggle">
      {{ title }}
    </div>
    <div class="content" v-if="visible">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "EzCollapseItem",
  data() {
    return {
      visible: false
    };
  },
  props: {
    title: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  inject: ["eventBus"],
  mounted() {
    this.eventBus.$on("update:selected", selectedNames => {
      if (selectedNames.indexOf(this.name) >= 0) {
        this.visible = true;
      } else {
        this.visible = false;
      }
    });
  },
  methods: {
    toggle() {
      if (this.visible) {
        this.eventBus.$emit("update:removeSelected", this.name);
      } else {
        this.eventBus.$emit("update:addSelected", this.name);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$grey: #ddd;
$border-radius: 4px;
.collapseItem {
  border-bottom: 1px solid #ebeef5;
  &:first-child {
    border-top: 1px solid #ebeef5;
  }
  > .title {
    display: flex;
    align-items: center;
    height: 48px;
    line-height: 48px;
    background-color: #fff;
    color: #303133;
    cursor: pointer;

    font-size: 13px;
    font-weight: 500;
    transition: border-bottom-color 0.3s;
    outline: none;
  }
  > .content {
    padding-bottom: 25px;
    font-size: 13px;
    color: #303133;
    line-height: 1.769230769230769;
  }
}
</style>