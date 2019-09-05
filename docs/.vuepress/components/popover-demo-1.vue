<template>
  <div style="padding-top: 4px;">
    <h3>基本用法</h3>
    <p>
      <strong>预览</strong>
    </p>
    <div class="box">
      <div class="row">
        <ez-popover trigger="click">
          <div slot="content">我是popover内容</div>
          <ez-button>点我上</ez-button>
        </ez-popover>
        <ez-popover position="bottom" trigger="click">
          <div slot="content">我是popover内容</div>
          <ez-button>点我下</ez-button>
        </ez-popover>

        <ez-popover position="left" trigger="click">
          <div slot="content">我是popover内容</div>
          <ez-button>点我左</ez-button>
        </ez-popover>

        <ez-popover position="right" trigger="click">
          <div slot="content">我是popover内容</div>
          <ez-button>点我右</ez-button>
        </ez-popover>
      </div>
    </div>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<style>
</style>
<style scoped>
</style>
<script>
import Button from "../../../src/components/Button/button";
import Popover from "../../../src/components/Popover/popover";

export default {
  components: {
    "ez-button": Button,
    "ez-popover": Popover
  },
  data() {
    return {
      content: `
           <ez-popover trigger="click">
          <div slot="content">我是popover内容</div>
          <ez-button>点我上</ez-button>
        </ez-popover>
        <ez-popover position="bottom" trigger="click">
          <div slot="content">我是popover内容</div>
          <ez-button>点我下</ez-button>
        </ez-popover>

        <ez-popover position="left" trigger="click">
          <div slot="content">我是popover内容</div>
          <ez-button>点我左</ez-button>
        </ez-popover>

        <ez-popover position="right" trigger="click">
          <div slot="content">我是popover内容</div>
          <ez-button>点我右</ez-button>
        </ez-popover>
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