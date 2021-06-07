<template>
  <plans-list :plans="plans"></plans-list>
</template>

<script>
import PlansList from '@/components/plans/PlansList.vue'

export default {
  components: {
    PlansList
  },
  data() {
    return {
      plans: [
        {
          id: 1,
          title: 'plan 1'
        },
        {
          id: 2,
          title: 'plan 2'
        },
        {
          id: 3,
          title: 'plan 3'
        }
      ]
    }
  }
}
</script>
