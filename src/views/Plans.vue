<template>
  <base-dialog
    :show="!!error"
    title="An error occurred!"
    @close="handleError"
  >
    <p>{{ error }}</p>
  </base-dialog>

  <img
    class="mx-auto h-64 w-auto"
    src="@/assets/images/Invest.svg"
    alt="Workflow"
  />
  <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
    Budget Plans
  </h2>

  <create-plan></create-plan>
  <div v-if="isLoading">
    <base-spinner></base-spinner>
  </div>
  <plans-list v-else :plans="plans"></plans-list>
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
      isLoading: false,
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
      this.isLoading = true
      try {
        await this.$store.dispatch('plans/getPlans')
      } catch (error) {
        this.error = error.message || 'Something went wrong!'
      }
      this.isLoading = false
    },
    handleError() {
      this.error = null
    }
  },
  created() {
    this.getPlans()
  }
}
</script>
