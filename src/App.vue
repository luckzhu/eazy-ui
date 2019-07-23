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
          <zhu-button round icon="search" >默认按钮</zhu-button>
          <zhu-button type="primary" round icon="setting" loading>主要按钮</zhu-button> 
          <zhu-button type="danger" round icon="delete" loading>删除按钮</zhu-button> 
        </div>
 </div>
</template>

<script>
import Button from "./components/button.vue";
import './components/iconfont'

export default {
  name: "app",
  components: {
    "zhu-button": Button
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
