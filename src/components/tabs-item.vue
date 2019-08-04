<template>
    <div class="tabs-item" >
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "EazyTabsItem"
};
</script>

<style lang="scss" scoped>
.tabs-item {
  padding: 0 1em;
  border: 1px solid green;
}
</style>
