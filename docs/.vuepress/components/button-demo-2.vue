<template>
  <div style="padding-top: 16px;">
    <h3>添加图标</h3>
    <p>设置icon属性，icon 现已支持search、left、right、thumbs-up、loading、check、download、delete、setting等图标，后续还会按需添加。</p>
    <p>
      <strong>预览</strong>
    </p>
    <div class="box">
      <div class="row">
        <ez-button icon="search">默认按钮</ez-button>
        <ez-button type="primary" icon="download">主要按钮</ez-button>
        <ez-button type="success" icon="setting">成功按钮</ez-button>
        <ez-button type="danger" icon="delete">危险按钮</ez-button>
      </div>

      <div class="row">
        <ez-button round icon="search">默认按钮</ez-button>
        <ez-button type="primary" round icon="download">主要按钮</ez-button>
        <ez-button type="success" round icon="setting">成功按钮</ez-button>
        <ez-button type="danger" round icon="delete">危险按钮</ez-button>
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
<ez-button icon="search">默认按钮</ez-button>
        <ez-button type="primary" icon="download">主要按钮</ez-button>
        <ez-button type="success" icon="setting">成功按钮</ez-button>
        <ez-button type="danger" icon="delete">危险按钮</ez-button>

<ez-button round icon="search">默认按钮</ez-button>
        <ez-button type="primary" round icon="download">主要按钮</ez-button>
        <ez-button type="success" round icon="setting">成功按钮</ez-button>
        <ez-button type="danger" round icon="delete">危险按钮</ez-button>
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