<template>
  <button
    class="ez-button"
    :class="[
      `ez-button-${type}`,
      { 'is-round': round != undefined },
      { [iconPosition]: true }
    ]"
    @click="$emit('click')"
  >
    <ez-icon
      v-if="loading"
      name="loading"
      class="icon-loading"
    ></ez-icon>
    <ez-icon v-if="icon && !loading" :name="icon"></ez-icon>
    <span class="button-content">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import Icon from "../Icon/icon.vue";

export default {
  data() {
    return {};
  },
  components: {
    "ez-icon": Icon
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
      this.loading = !this.loading;
    }
  }
};
</script>

<style lang="scss">
.ez-button {
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
    > .ez-icon {
      order: 1;
      margin-left: 0;
      margin-right: 0.4em;
    }
    > .button-content {
      order: 2;
    }
  }

  &.right {
    > .ez-icon {
      order: 2;
      margin-left: 0.4em;
      margin-right: 0;
    }
    > .button-content {
      order: 1;
    }
  }
}

.ez-button:hover {
  border: 1px solid #aaa;
}

.ez-button:active {
  background: #eee;
}

.ez-button:focus {
  outline: none;
}

.ez-button-primary {
  color: #fff;
  background: #409eff;
}

.ez-button-success {
  color: #fff;
  background: #67c23a;
}

.ez-button-danger {
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
