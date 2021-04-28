<template>
  <div class="banner">
    <div class="banner__info">
      <figure class="banner__figure">
        <img :src="logo" alt="Nuxt logo" class="banner__logo" />
      </figure>

      <h2 class="banner__name">{{ title }}</h2>
    </div>

    <a :href="url" class="banner__cta">join us</a>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  props: {
    title: String,
    logo: String,
    url: String,
  },
}
</script>

<style lang="scss" scoped>
@import './Banner.module.scss';
</style>
