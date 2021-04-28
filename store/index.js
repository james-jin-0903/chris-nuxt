import axios from 'axios'

export const state = () => ({
  webinars: [],
})

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('getWebinars')
  },
  async getWebinars({ commit }) {
    const { data } = await axios.get(process.env.WEBINARS_URL)

    const webinars = data.map((conf) => ({
      ...conf,
      webinars: conf.webinars.map((webinar) => ({
        ...webinar,
        startDateTime: new Date(webinar.startDateTime),
        endDateTime: new Date(webinar.endDateTime),
      })),
    }))

    commit('setWebinars', webinars)
  },
}

export const mutations = {
  setWebinars(state, webinars) {
    state.webinars = webinars
  },
}
