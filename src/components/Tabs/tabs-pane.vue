<template>
  <div class="tabs-pane" :class="tabActiveClass" v-if="active">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "EazyTabsPane",
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
  }
};
</script>

<style lang="scss" scoped>

</style>
