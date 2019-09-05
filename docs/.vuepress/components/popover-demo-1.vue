<template>
  <div style="padding-top: 4px;">
    <h3>基本用法</h3>
    <p>
      <strong>预览</strong>
    </p>
    <div class="box">
      <div class="row">
        <ez-popover>
          <ez-button>上方弹出</ez-button>
          <template slot="content">
            弹出内容
          </template>
        </ez-popover>
        <ez-popover position="bottom">
          <ez-button>下方弹出</ez-button>
          <template slot="content">
            弹出内容
          </template>
        </ez-popover>
        <ez-popover position="left">
          <ez-button>左边弹出</ez-button>
          <template slot="content">
            弹出内容
          </template>
        </ez-popover>
        <ez-popover position="right">
          <ez-button>右边弹出</ez-button>
          <template slot="content">
            弹出内容
          </template>
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
          <ez-popover>
            <ez-button>上方弹出</ez-button>
            <template slot="content">
              弹出内容
            </template>
          </ez-popover>
          <ez-popover position="bottom">
            <ez-button>下方弹出</ez-button>
            <template slot="content">
              弹出内容
            </template>
          </ez-popover>
          <ez-popover position="left">
            <ez-button>左边弹出</ez-button>
            <template slot="content">
              弹出内容
            </template>
          </ez-popover>
          <ez-popover position="right">
            <ez-button>右边弹出</ez-button>
            <template slot="content">
              弹出内容
            </template>
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