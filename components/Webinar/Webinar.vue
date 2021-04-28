<template>
  <section class="webinar">
    <div class="webinar__date">
      <Date :date="webinars[0].startDateTime" />
    </div>
    <div class="webinar__content">
      <Banner class="webinar__banner" :title="title" :logo="logo" :url="url" />
      <Info
        v-for="webinar in webinars"
        :key="webinar.title"
        :title="webinar.title"
        :startDate="webinar.startDateTime"
        :endDate="webinar.endDateTime"
        :location="webinar.timeZone"
        :details="webinar.blurb"
        :speakers="webinar.speakers"
      />
    </div>
  </section>
</template>

<script>
import Banner from '@/components/Banner/Banner'
import Date from '@/components/Date/Date'
import Info from '@/components/Info/Info'

export default {
  name: 'Webinar',
  components: {
    Banner,
    Date,
    Info,
  },
  props: {
    title: String,
    logo: String,
    url: String,
    webinars: Array,
  },
}
</script>

<style lang="scss" scoped>
@import './Webinar.module.scss';
</style>
