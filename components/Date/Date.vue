<template>
  <div class="date">
    <span class="date__day">{{ day }}</span>
    <span class="date__month-year">{{ month }} `{{ year }}</span>
  </div>
</template>

<script>
export default {
  name: 'Date',
  props: {
    date: Date,
  },
  computed: {
    day() {
      return this.date.getDate()
    },
    month() {
      const monthAbbrs = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ]

      return monthAbbrs[this.date.getMonth()]
    },
    year() {
      return this.date.getFullYear().toString().substr(2)
    },
  },
}
</script>

<style lang="scss" scoped>
@import './Date.module.scss';
</style>
