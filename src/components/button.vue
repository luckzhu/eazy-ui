<template>
  <button
    class="zhu-button"
    :class="[`zhu-button-${type}`, {'is-round':round != undefined} , {[iconPosition]:true}]"
    @click="btnClick"
  >
    <zhu-icon v-if="icon && isLoading===true" name="loading" class="icon-loading"></zhu-icon>
    <zhu-icon v-if="icon && !isLoading" :name="icon"></zhu-icon>
    <span class="button-content">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import Icon from "./icon.vue";
export default {
  data() {
    return {
      isLoading: false
    };
  },
  components: {
    "zhu-icon": Icon
  },
  props: {
    type: {
      default: "default"
    },
    round: {},
    icon: {},
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        return !(value !== "left" && value !== "right");
      }
    }
  },
  methods: {
    btnClick() {
      if (!this.loading) return;
      this.isLoading = !this.isLoading;
    }
  }
};
</script>

<style lang="scss">
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

  &.left {
    > .zhu-icon {
      order: 1;
      margin-left: 0;
      margin-right: 0.4em;
    }
    > .button-content {
      order: 2;
    }
  }

  &.right {
    > .zhu-icon {
      order: 2;
      margin-left: 0.4em;
      margin-right: 0;
    }
    > .button-content {
      order: 1;
    }
  }
}

.zhu-button:hover {
  border: 1px solid #aaa;
}

.zhu-button:active {
  background: #eee;
}

.zhu-button:focus {
  outline: none;
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

@keyframes loadingRotation {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}

.icon-loading {
  animation: loadingRotation 2s linear infinite;
}
</style>
