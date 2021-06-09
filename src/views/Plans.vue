<template>
  <plans-list :plans="plans"></plans-list>
</template>

<script>
import PlansList from '@/components/plans/PlansList.vue'
import PlanService from '@/services/PlanService.js'

export default {
  components: {
    PlansList
  },
  data() {
    return {
      plans: []
    }
  },
  created() {
    PlanService.getPlans()
      .then((response) => {
        const responseData = response.data.data
        responseData.forEach((plan) => {
          this.plans.push({
            id: plan.id,
            ...plan.attributes
          })
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>
