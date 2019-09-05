<template>
  <div style="padding-top: 4px;">
    <h3>this.$toast 基本用法</h3>
    <p>
      <strong>预览</strong>
    </p>

    <div class="box">
      <div class="row">
        <ez-button @click="showToast1">上方弹出</ez-button>
        <ez-button @click="showToast2">中间弹出</ez-button>
        <ez-button @click="showToast3">下方弹出</ez-button>
      </div>
    </div>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>


<script>
import plugin from "../../../src/components/Toast/plugin";
import Button from "../../../src/components/Button/button";
import Vue from "vue";

Vue.use(plugin);

export default {
  components: {
    "ez-button": Button
  },
  data() {
    return {
      content: `
<ez-button @click="showToast1">上方弹出</ez-button>
<ez-button @click="showToast2">中间弹出</ez-button>
<ez-button @click="showToast3">下方弹出</ez-button>

methods: {
  showToast1() {
    this.$toast("点击弹出文字提示", {
     });
  },
  showToast2() {
     this.$toast("点击弹出文字提示", {
      position: "middle"
     });
  },
  showToast3() {
    this.$toast("点击弹出文字提示", {
       position: "bottom"
     });
  }
}
      `
        .replace(/^ {8}/gm, "")
        .trim()
    };
  },
  methods: {
    showToast1() {
      this.$toast("点击弹出文字提示", {});
    },
    showToast2() {
      this.$toast("点击弹出文字提示", {
        position: "middle"
      });
    },
    showToast3() {
      this.$toast("点击弹出文字提示", {
        position: "bottom"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

.box {
  .row {
    display: flex;
    margin: 20px 5px;
    > * {
      margin-right: 12px;
    }
  }
  display: block;
  padding: 0 16px;
  border: 1px solid #ebebeb;
  border-radius: 3px;
}
</style>