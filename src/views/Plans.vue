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
      }
    }
  },
  created() {
    this.getPlans();
  }
}
</script>
