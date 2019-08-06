<template>
  <div class="cascader-items">
    <div class="left">
      <div
        class="label"
        v-for="item in items"
        :key="item.value"
        @click="onClickLabel(item)"
      >
        {{ item.label }}
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <ez-cascader-items :items="rightItems"></ez-cascader-items>
    </div>
  </div>
</template>

<script>
export default {
  name: "EzCascaderItems",
  data() {
    return {
      rightItems: null
    };
  },
  props: {
    items: {
      type: Array
    }
  },
  // computed: {
  //   rightItems(){
  //     return null
  //   }
  // },
  methods: {
    onClickLabel(item) {
      if (item.children) {
        this.rightItems = item.children;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>