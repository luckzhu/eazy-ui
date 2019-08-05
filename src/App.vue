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
      <ez-tabs :selected.sync="slectedTabs">
        <ez-tabs-head>
          <ez-tabs-item name="beauty">美女新闻</ez-tabs-item>
          <ez-tabs-item name="finance">财经新闻</ez-tabs-item>
          <ez-tabs-item name="sports">体育新闻</ez-tabs-item>
          <ez-button slot="action">额外按钮</ez-button>
        </ez-tabs-head>
        <ez-tabs-body>
          <ez-tabs-pane name="beauty">关于美女的新闻</ez-tabs-pane>
          <ez-tabs-pane name="finance">关于财经的新闻</ez-tabs-pane>
          <ez-tabs-pane name="sports">关于体育的新闻</ez-tabs-pane>
        </ez-tabs-body>
      </ez-tabs>
    </div>

    <div class="testBox">
      <ez-popover position="top" trigger="click">
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

     <div class="testBox">
      <ez-popover position="top" trigger="hover">
        <div slot="content">我是popover内容</div>
        <ez-button>点我上</ez-button>
      </ez-popover>
       <ez-popover position="bottom" trigger="hover">
        <div slot="content">我是popover内容</div>
        <ez-button>点我下</ez-button>
      </ez-popover>

        <ez-popover position="left" trigger="hover">
        <div slot="content">我是popover内容</div>
        <ez-button>点我左</ez-button>
      </ez-popover>

        <ez-popover position="right" trigger="hover">
        <div slot="content">我是popover内容</div>
        <ez-button>点我右</ez-button>
      </ez-popover>
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
import Popover from "./components/popover"

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
    "ez-tabs-pane": TabsPane,
    "ez-popover": Popover,
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
 * {
    padding: 0;
    margin: 0;
  };
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
  padding: 24px;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  margin: 10px 10px;
}
</style>
