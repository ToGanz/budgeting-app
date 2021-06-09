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
      plans: null
    }
  },
  created() {
    // get plans form db 
  }
}
</script>
