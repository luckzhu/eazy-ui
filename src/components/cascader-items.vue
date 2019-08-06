<template>
  <div class="cascaderItems">
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
.cascaderItems {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  .left {
    height: 100%;
    padding: 1em 1em;
    box-shadow: 0 0 3px #ebebeb;
  }

  .right {
    height: 100%;
    border-left: 1px solid grey;
    box-shadow: 0 0 3px #ebebeb;
  }
}
</style>