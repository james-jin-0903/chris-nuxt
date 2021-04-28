<template>
  <div>
    <!-- Header -->
    <Header />

    <!-- Main content -->
    <main class="main-content">
      <Nuxt />
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header/Header'

export default {
  components: {
    Header,
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/layouts/default.scss';
</style>
