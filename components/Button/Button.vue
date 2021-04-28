<template>
  <button class="button" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
}
</script>

<style lang="scss" scoped>
@import './Button.module.scss';
</style>
