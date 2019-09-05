<template>
  <div style="padding-top: 16px;">
    <h3>设置 loading 加载中</h3>
    <p>点击按钮后进行加载操作，在按钮上显示 loading 状态。</p>
    <p>
      <strong>预览</strong>
    </p>
    <div class="box">
      <div class="row">
        <ez-button type="primary" icon="download" loading>主要按钮</ez-button>
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
 <ez-button type="primary" icon="download" loading>主要按钮</ez-button>
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