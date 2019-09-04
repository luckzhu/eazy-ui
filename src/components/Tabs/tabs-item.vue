<template>
  <div class="tabs-item" @click="switchTab" :class="tabActiveClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "EzTabsItem",
  data() {
    return {
      active: false
    };
  },
  props: {
    name: {
      type: String,
      required: true
    }
  },
  inject: ["eventBus"],
  created() {
    this.eventBus.$on("update:selected", name => {
      if (name === this.name) {
        this.active = true;
      } else {
        this.active = false;
      }
    });
  },
  computed: {
    tabActiveClass() {
      return {
        tabActive: this.active
      };
    }
  },
  methods: {
    switchTab() {
      // this.eventBus.$emit("update:selected", this.name);
      this.eventBus.$emit("update:selected", this.name, this);
    }
  }
};
</script>

<style lang="scss" scoped>
.tabs-item {
  padding: 0 20px;
  height: 40px;
  box-sizing: border-box;
  line-height: 40px;
  font-weight: 500;
  color: #303133;
  position: relative;
  cursor: pointer;

  &:first-child {
    padding-left: 0;
  }
}

.tabActive {
  color: #409eff;
}
</style>
