<template>
    <div class="tabs-body">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "EazyTabsbody",
    inject: ['eventBus']
};
</script>

<style lang="scss" scoped>

</style>
