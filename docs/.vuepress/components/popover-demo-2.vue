<template>
  <div style="padding-top: 4px;">
    <h3> hover 触发</h3>
    <p>设置 <code>trigger</code> 属性为 <code>hover</code> </p>    
    <p>
      <strong>预览</strong>
    </p>
    <div class="box">
      <div class="row">
        <ez-popover trigger="hover">
          <ez-button>上方弹出</ez-button>
          <template slot="content">
            弹出内容
          </template>
        </ez-popover>
        <ez-popover position="bottom" trigger="hover">
          <ez-button>下方弹出</ez-button>
          <template slot="content">
            弹出内容
          </template>
        </ez-popover>
        <ez-popover position="left" trigger="hover">
          <ez-button>左边弹出</ez-button>
          <template slot="content">
            弹出内容
          </template>
        </ez-popover>
        <ez-popover position="right" trigger="hover">
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
          <ez-popover trigger="hover">
            <ez-button>上方弹出</ez-button>
            <template slot="content">
              弹出内容
            </template>
          </ez-popover>
          <ez-popover position="bottom" trigger="hover">
            <ez-button>下方弹出</ez-button>
            <template slot="content">
              弹出内容
            </template>
          </ez-popover>
          <ez-popover position="left" trigger="hover">
            <ez-button>左边弹出</ez-button>
            <template slot="content">
              弹出内容
            </template>
          </ez-popover>
          <ez-popover position="right" trigger="hover">
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