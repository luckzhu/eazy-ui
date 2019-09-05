<template>
  <div style="padding-top: 4px;">
    <h3>简单用法</h3>
    <p>
      <strong>预览</strong>
    </p>
    <div class="box">
      <div class="row">
        <ez-input value="张三"></ez-input>
        <ez-input value="张三" disabled></ez-input>
      </div>
    </div>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
import Input from "../../../src/components/Input/input";

export default {
  components: { "ez-input": Input },
  data() {
    return {
      content: `
<ez-input></ez-input>
<ez-input value="张三"></ez-input>
<ez-input value="张三" disabled></ez-input>
      `
        .replace(/^ {8}/gm, "")
        .trim()
    };
  }
};
</script>

<style lang="scss" scoped>
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