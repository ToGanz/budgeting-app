<template>
  <plan-details :plan="plan"></plan-details>
</template>

<script>
import PlanDetails from '@/components/plans/PlanDetails.vue'

export default {
  components: {
    PlanDetails
  },
  props: ['id'],
  data() {
    return {
      plan: {
        id: 1,
        title: 'plan 1'
      }
    }
  },
  created() {
    // fetch plan by id
  }
}
</script>
