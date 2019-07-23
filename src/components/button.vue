<template>
  <button class="zhu-button" :class="[`zhu-button-${type}`, {'is-round':round != undefined}]">
    <zhu-icon v-if="icon" :name="icon"></zhu-icon>
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script>
import Icon from './icon.vue'
export default {
  data() {
    return {
 
    };
  },
  components:{
    'zhu-icon': Icon
  },
  props: {
    type: {
      default: "default"
    },
    round: {},
    icon: {
      
    }
  },
  computed: {}
};
</script>

<style >
.zhu-button {
  /* --font-size: 14px;
  --color: #606266;
  --button-height: 32px;
  --border-radius: 4px;
  --border-color: #dcdfe6;
  --button-bg: #fff;
  --border-hover-color: #666;
  --border-active-bg: #eee; */
  font-size: 14px;
  color: #606266;
  padding: 12px 20px;
  vertical-align: middle;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  background: #fff;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

.zhu-button-primary {
  color: #fff;
  background: #409eff;
}

.zhu-button-success {
  color: #fff;
  background: #67c23a;
}

.zhu-button-danger {
  color: #fff;
  background: #f56c6c;
}
.is-round {
  border-radius: 20px;
  padding: 12px 23px;
}
</style>
