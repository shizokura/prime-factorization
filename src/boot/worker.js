import VueWorker from 'vue-worker'

// "async" is optional
export default async ({ Vue }) => {
  Vue.use(VueWorker)
}
