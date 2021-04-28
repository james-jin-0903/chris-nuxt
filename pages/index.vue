<template>
  <div>
    <Webinar
      v-for="webinar in webinars"
      :key="webinar.title"
      :title="webinar.title"
      :logo="webinar.thumbnail"
      :url="webinar.url"
      :webinars="webinar.webinars"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'

import Webinar from '@/components/Webinar/Webinar'

export default {
  components: {
    Webinar,
  },
  computed: {
    ...mapState(['webinars']),
  },
}
</script>
