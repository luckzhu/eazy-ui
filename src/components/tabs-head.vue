<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="actionWrapper">
            <slot name="action"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "EazyTabsHead"
};
</script>

<style lang="scss" scoped>
.tabs-head {
    border: 1px solid red;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    > .actionWrapper {
        margin-left: auto;
    }
}
</style>
