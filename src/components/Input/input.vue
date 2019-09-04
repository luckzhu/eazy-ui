<template>
  <div class="wrapper" :class="{error}">
    <input
      type="text"
      :value="value"
      :disabled="disabled"
      @input="$emit('input',$event.target.value)"
      @change="$emit('change',$event.target.value)"
      @focus="$emit('focus',$event.target.value)"
      @blur="$emit('blur',$event.target.value)"
    />
    <template v-if="error">
      <ez-icon name="setting"></ez-icon>
      <span class="errorMessage">{{errorMessage}}</span>
    </template>
  </div>
</template>

<script>
import Icon from "../Icon/icon.vue";

export default {
  components: {
    "ez-icon": Icon
  },
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    },
    errorMessage: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
$red: #f1453d;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$border-color: #999;
$border-color-hover: #666;
$border-radius: 4px;
$font-size: 14px;
.wrapper {
  font-size: 14px;
  color: #333;
  display: inline-flex;
  align-items: center;
  font-size: $font-size;
  > :not(:last-child) {
    margin-right: 0.5em;
  }
  > input {
    border: 1px solid $border-color;
    height: 32px;
    width: 128px;
    padding: 0 8px;
    border-radius: $border-radius;
    font-size: inherit;
    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      box-shadow: inset 0 1px 3px 0px $box-shadow-color;
      outline: none;
    }
    &[disabled],
    &[readonly] {
      border-color: #bbb;
      color: #bbb;
      cursor: not-allowed;
    }
  }
  &.error {
    > input {
      border-color: $red;
    }
  }
  > svg {
    fill: $red;
  }
  > .errorMessage {
    color: $red;
  }
}
</style>