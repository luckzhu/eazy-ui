<template>
  <div style="padding-top: 4px;">
    <h3>简单用法</h3>
    <p>使用type、round和属性来定义 Button 的样式。</p>
    <p>
      <strong>预览</strong>
    </p>
    <div class="box">
      <div class="row">
        <ez-button>默认按钮</ez-button>
        <ez-button type="primary">主要按钮</ez-button>
        <ez-button type="success">成功按钮</ez-button>
        <ez-button type="danger">危险按钮</ez-button>
      </div>

      <div class="row">
        <ez-button round>默认按钮</ez-button>
        <ez-button type="primary" round>主要按钮</ez-button>
        <ez-button type="success" round>成功按钮</ez-button>
        <ez-button type="danger" round>危险按钮</ez-button>
      </div>
    </div>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
import Button from "../../../src/components/Button/button";

export default {
  components: {
    "ez-button": Button
  },
  data() {
    return {
      content: `
       <ez-button>默认按钮</ez-button>
<ez-button type="primary">主要按钮</ez-button>
<ez-button type="success">成功按钮</ez-button>
<ez-button type="danger">危险按钮</ez-button>

<ez-button round>默认按钮</ez-button>
        <ez-button type="primary" round>主要按钮</ez-button>
        <ez-button type="success" round>成功按钮</ez-button>
        <ez-button type="danger" round>危险按钮</ez-button>
      `
        .replace(/^ {8}/gm, "")
        .trim()
    };
  }
};
</script>

<style lang="scss">
.box {
  .row{
    display: flex;
    margin: 20px 5px;
    >*{
      margin-right: 12px;
    }
  }
  display: block;
  padding: 0 16px;
  border: 1px solid #ebebeb;
  border-radius: 3px;
}
</style>