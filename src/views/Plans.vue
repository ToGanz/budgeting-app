<template>
  <create-plan></create-plan>
  <plans-list :plans="plans"></plans-list>
</template>

<script>
import PlansList from '@/components/plans/PlansList.vue'
import CreatePlan from '@/components/plans/CreatePlan.vue'

export default {
  components: {
    PlansList,
    CreatePlan
  },
  data() {
    return {
      error: null
    }
  },
  computed: {
    plans() {
      const plans = this.$store.getters['plans/plans']
      return plans
    }
  },
  methods: {
    async getPlans() {
      try {
        await this.$store.dispatch('plans/getPlans')
      } catch (error) {
        this.error = error.message || 'Something went wrong!'
        console.log(this.error)
      }
    }
  },
  created() {
    this.getPlans();
  }
}
</script>
