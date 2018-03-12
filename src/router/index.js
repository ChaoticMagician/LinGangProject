import Vue from 'vue'
import Router from 'vue-router'
import elebody from '@/components/elebody/EleBody.vue'
import secpage from '@/components/secpages/buypage.vue'
import rightcomen from '@/components/secpages/rightcomen.vue'
import rightcomenone from '@/components/secpages/rightcomenone.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'elebody',
      component: elebody
    },
    {
      path: '/detail',
      redirect: '/detail/analysis',
      name: 'secpage',
      component: secpage,
      children: [
        {
          path: 'analysis',
          name: 'analysis',
					components: {
            default: rightcomen,
            second: rightcomenone
          }
				},
				{
          path: 'count',
          name: 'count',
					components: {
            default: rightcomenone,
            second: rightcomen
          }
				},
				{
          path: 'forecast',
          name: 'forecast',
					components: {
            default: rightcomen,
            second: rightcomenone
          }
				},
				{
          path: 'publish',
          name: 'publish',
					components: {
            default: rightcomenone,
            second: rightcomen
          }
        }
      ]
    }
  ]
})
