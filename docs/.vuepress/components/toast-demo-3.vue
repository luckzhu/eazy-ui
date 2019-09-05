<template>
  <div style="padding-top: 4px;">
    <h3>弹出文字支持Html</h3>
    <p>设置 <code>enableHtml</code> 属性为 <code>true</code> </p>
    <p>
      <strong>预览</strong>
    </p>

    <div class="box">
      <div class="row">
        <ez-button @click="showToast">上方弹出</ez-button>
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
<ez-button @click="showToast">上方弹出</ez-button>

methods: {
  showToast() {
    this.$toast("点击弹出文字提示", {
      this.$toast('<strong style="color:red;">加粗的提示</strong>', 
      {enableHtml: true});
    });
  },
}
      `
        .replace(/^ {8}/gm, "")
        .trim()
    };
  },
  methods: {
    showToast() {
      this.$toast('<strong style="color:red;">加粗的提示</strong>', {
        enableHtml: true
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