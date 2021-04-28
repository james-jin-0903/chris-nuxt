<template>
  <div class="info">
    <div class="info__date">
      <span class="info__date-item">{{ startDate | clock }}</span>
      <span class="info__date-item">{{ location | city }}</span>
      <span class="info__date-item info__date-item--small">
        <ClockIcon class="info__icon" /> {{ duration }} HRS
      </span>
    </div>
    <div class="info__details">
      <h3 class="info__title">{{ title }}</h3>
      <p class="info__text">
        {{ details }}
      </p>
      <div class="info__divider" />
      <span class="info__subtitle">Speakers</span>
      <ul>
        <li
          v-for="speaker in speakers"
          :key="speaker.name"
          class="info__speaker"
        >
          - {{ speaker.name }}, {{ speaker.position }} - {{ speaker.company }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ClockIcon from '@/assets/icons/clock.svg?inline'

export default {
  name: 'Info',
  components: {
    ClockIcon,
  },
  filters: {
    clock(date) {
      let ampm = 'AM'
      let hours = date.getHours()
      if (hours >= 12) {
        if (hours > 12) {
          hours -= 12
        }

        ampm = 'PM'
      } else if (hours === 0) {
        // set 00:00 to 12 AM
        hours = 12
      }

      return `${hours.toString().padStart(2, '0')} ${ampm}`
    },
    city(location) {
      return location.split('/')[1]
    },
  },
  props: {
    startDate: Date,
    endDate: Date,
    location: String,
    title: String,
    details: String,
    speakers: Array,
  },
  computed: {
    duration() {
      // calculate duration in hours
      return Math.round((this.endDate - this.startDate) / 36e5)
    },
  },
}
</script>

<style lang="scss" scoped>
@import './Info.module.scss';
</style>
