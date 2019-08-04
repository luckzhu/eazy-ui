<template>
  <div class="tabs-item" @click="switchTab" :class="tabActiveClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "EazyTabsItem",
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
      console.log(name);
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
        'tabActive': this.active
      };
    }
  },
  methods: {
    switchTab() {
      this.eventBus.$emit("update:selected", this.name);
    }
  }
};
</script>

<style lang="scss" scoped>
.tabs-item {
  padding: 0 1em;
  border: 1px solid green;
}

.tabActive {
    background-color: aqua;
}
</style>
