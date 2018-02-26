import Vue from 'vue'
import Router from 'vue-router'
import elebody from '@/components/elebody/EleBody.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'elebody',
      component: elebody
    }
  ]
})
