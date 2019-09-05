<template>
  <div style="padding-top: 4px;">
    <h3>基本用法</h3>
    <p>
      <strong>预览</strong>
    </p>
    <div class="box">
      <div class="row">
        <ez-tabs :selected.sync="slectedTabs">
          <ez-tabs-head>
            <ez-tabs-item name="beauty">美女新闻</ez-tabs-item>
            <ez-tabs-item name="finance">财经新闻</ez-tabs-item>
            <ez-tabs-item name="sports">体育新闻</ez-tabs-item>
          </ez-tabs-head>
          <ez-tabs-body>
            <ez-tabs-pane name="beauty">关于美女的新闻</ez-tabs-pane>
            <ez-tabs-pane name="finance">关于财经的新闻</ez-tabs-pane>
            <ez-tabs-pane name="sports">关于体育的新闻</ez-tabs-pane>
          </ez-tabs-body>
        </ez-tabs>
      </div>
    </div>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
import Tabs from "../../../src/components/Tabs/tabs";
import TabsBody from "../../../src/components/Tabs/tabs-body";
import TabsHead from "../../../src/components/Tabs/tabs-head";
import TabsItem from "../../../src/components/Tabs/tabs-item";
import TabsPane from "../../../src/components/Tabs/tabs-pane";
import Button from "../../../src/components/Button/button";

export default {
  components: {
    "ez-button": Button,
    "ez-tabs": Tabs,
    "ez-tabs-head": TabsHead,
    "ez-tabs-body": TabsBody,
    "ez-tabs-item": TabsItem,
    "ez-tabs-pane": TabsPane
  },
  data() {
    return {
     slectedTabs: "finance",
      content: `
data:{
            slectedTabs: "finance",
          }

<ez-tabs :selected.sync="slectedTabs">
          <ez-tabs-head>
            <ez-tabs-item name="beauty">美女新闻</ez-tabs-item>
            <ez-tabs-item name="finance">财经新闻</ez-tabs-item>
            <ez-tabs-item name="sports">体育新闻</ez-tabs-item>
          </ez-tabs-head>
          <ez-tabs-body>
            <ez-tabs-pane name="beauty">关于美女的新闻</ez-tabs-pane>
            <ez-tabs-pane name="finance">关于财经的新闻</ez-tabs-pane>
            <ez-tabs-pane name="sports">关于体育的新闻</ez-tabs-pane>
          </ez-tabs-body>
        </ez-tabs>
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
  }
  display: block;
  padding: 0 16px;
  border: 1px solid #ebebeb;
  border-radius: 3px;
}
</style>