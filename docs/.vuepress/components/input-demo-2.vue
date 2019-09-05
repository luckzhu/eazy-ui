<template>
  <div style="padding-top: 4px;">
    <h3>双向绑定</h3>
    <p>
      <strong>预览</strong>
    </p>
    <div class="box">
      <div class="row">
        <ez-input v-model="value"></ez-input>
        <div><strong>Value:  </strong> {{ value }}</div>
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
      value: "我是输入的内容",
      content: `
          data:{
            value: '我是输入的内容'
          }

          <ez-input v-model="value"></ez-input>
          <div>
            value: {{value}}
          </div>
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
    align-items: center;
    > * {
      margin-right: 20px;
    }
  }
  display: block;
  padding: 0 16px;
  border: 1px solid #ebebeb;
  border-radius: 3px;
}
</style>