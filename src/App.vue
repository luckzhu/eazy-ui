<template>
  <div id="app">
    <div class="testBox">
      <div class="mybutton">
        <ez-button>默认按钮</ez-button>
        <ez-button type="primary">主要按钮</ez-button>
        <ez-button type="success">成功按钮</ez-button>
        <ez-button type="danger">危险按钮</ez-button>
      </div>

      <div class="mybutton">
        <ez-button round>默认按钮</ez-button>
        <ez-button type="primary" round>主要按钮</ez-button>
        <ez-button type="success" round>成功按钮</ez-button>
        <ez-button type="danger" round>危险按钮</ez-button>
      </div>
      <div class="mybutton">
        <ez-button round icon="search">默认按钮</ez-button>
        <ez-button
          type="primary"
          round
          icon="setting"
          loading
          iconPosition="right"
          >主要按钮</ez-button
        >
        <ez-button
          type="danger"
          round
          icon="delete"
          loading
          iconPosition="right"
          >删除按钮</ez-button
        >
      </div>

      <div class="mybutton">
        <ez-button-group>
          <ez-button icon="left">前进</ez-button>
          <ez-button icon="right" iconPosition="right">后退</ez-button>
        </ez-button-group>
      </div>

      <div class="mybutton">
        <ez-input value="双向绑定" @input="inputChange"></ez-input>
        <ez-input value="张三"></ez-input>
        <ez-input value="张三" disabled></ez-input>
        <ez-input value="张" error errorMessage="名字不能是一个字哦"></ez-input>
      </div>

      <div class="mybutton">
        <button @click="showToast">点我触发Toast</button>
      </div>
    </div>

    <div class="testBox">
        <!--.sync等价于加上 @update:seleted="slectedTabs = $event" -->
      <ez-tabs :selected.sync="slectedTabs" >
        <ez-tabs-head>
          <ez-tabs-item name="beauty">美女</ez-tabs-item>
          <ez-tabs-item name="finance">财经</ez-tabs-item>
          <ez-tabs-item name="sports">体育</ez-tabs-item>
          <button slot="action">额外按钮</button>
        </ez-tabs-head>
        <ez-tabs-body>
          <ez-tabs-pane name="beauty">美女的新闻啦啦啦</ez-tabs-pane>
          <ez-tabs-pane name="finance">财经的新闻啦啦啦</ez-tabs-pane>
          <ez-tabs-pane name="sports">体育的新闻啦啦啦</ez-tabs-pane>
        </ez-tabs-body>
      </ez-tabs>
    </div>
  </div>
</template>

<script>
import Button from "./components/button.vue";
import "./components/iconfont";
import ButtonGroup from "./components/button-group.vue";
import Input from "./components/input.vue";
import Tabs from "./components/tabs";
import TabsHead from "./components/tabs-head";
import TabsBody from "./components/tabs-body";
import TabsItem from "./components/tabs-item";
import TabsPane from "./components/tabs-pane";
import tabsHeadVue from "./components/tabs-head.vue";

export default {
  name: "app",
  data() {
    return {
      slectedTabs: "finance"
    };
  },
  components: {
    "ez-button": Button,
    "ez-button-group": ButtonGroup,
    "ez-input": Input,
    "ez-tabs": Tabs,
    "ez-tabs-head": TabsHead,
    "ez-tabs-body": TabsBody,
    "ez-tabs-item": TabsItem,
    "ez-tabs-pane": TabsPane
  },
  methods: {
    inputChange(e) {
      console.log(e);
    },
    showToast() {
      this.$toast("点击成功", {
        closeButton: {
          text: "关闭",
          closeCallback(toast) {
            console.log(toast);
          }
        },
        enableHtml: false,
        position: "top"
      });
    }
  }
};
</script>

<style>
:root {
  box-sizing: border-box;

  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei";
}

.mybutton {
  display: inline-flex;
  margin: 20px;
}
.testBox {
  display: block;
}
</style>
