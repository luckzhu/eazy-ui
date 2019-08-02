<template>
  <div id="app">
    <div class="mybutton">
      <zhu-button>默认按钮</zhu-button>
      <zhu-button type="primary">主要按钮</zhu-button>
      <zhu-button type="success">成功按钮</zhu-button>
      <zhu-button type="danger">危险按钮</zhu-button>
    </div>

    <div class="mybutton">
      <zhu-button round>默认按钮</zhu-button>
      <zhu-button type="primary" round>主要按钮</zhu-button>
      <zhu-button type="success" round>成功按钮</zhu-button>
      <zhu-button type="danger" round>危险按钮</zhu-button>
    </div>
    <div class="mybutton">
      <zhu-button round icon="search">默认按钮</zhu-button>
      <zhu-button type="primary" round icon="setting" loading iconPosition="right">主要按钮</zhu-button>
      <zhu-button type="danger" round icon="delete" loading iconPosition="right">删除按钮</zhu-button>
    </div>

    <div class="mybutton">
      <zhu-button-group>
        <zhu-button icon="left">前进</zhu-button>
        <zhu-button icon="right" iconPosition="right">后退</zhu-button>
      </zhu-button-group>
    </div>

    <div class="mybutton">
      <zhu-input value="双向绑定" @input="inputChange"></zhu-input>
      <zhu-input value="张三"></zhu-input>
      <zhu-input value="张三" disabled></zhu-input>
      <zhu-input value="张" error errorMessage="名字不能是一个字哦"></zhu-input>
    </div>

    <div class="mybutton">
      <button @click="showToast">点我触发Toast</button>
    </div>
  </div>
</template>

<script>
import Button from "./components/button.vue";
import "./components/iconfont";
import ButtonGroup from "./components/button-group.vue";
import Input from "./components/input.vue";

export default {
  name: "app",
  components: {
    "zhu-button": Button,
    "zhu-button-group": ButtonGroup,
    "zhu-input": Input
  },
  methods: {
    inputChange(e) {
      console.log(e);
    },
    showToast() {
      this.$toast("<i>点击成功</i>", {
        closeButton: {
          text: "完美",
          closeCallback(toast) {
            console.log(toast);
          }
        },
        enableHtml: true
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
</style>
