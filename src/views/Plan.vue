<template>
  <base-dialog
    :show="!!error"
    title="An error occurred!"
    @close="handleError"
  >
    <p>{{ error }}</p>
  </base-dialog>
  <div v-if="isLoading">
    <base-spinner></base-spinner>
  </div>
  <div v-else>
    <plan-details :plan="plan"></plan-details>
    <transactions-list :transactions="transactions"></transactions-list>
  </div>
</template>

<script>
import PlanDetails from '@/components/plans/PlanDetails.vue'
import TransactionsList from '@/components/transactions/TransactionsList.vue'

export default {
  components: {
    PlanDetails,
    TransactionsList
  },
  props: ['id'],
  data() {
    return {
      isLoading: false,
      error: null,
      transactions: [
        {
          description: 'transaction 1',
          category: 'neccessities',
          spending: true,
          amount: 12.0,
          date: '12.06.2021'
        },
        {
          description: 'transaction 2',
          category: 'neccessities',
          spending: true,
          amount: 11.0,
          date: '11.06.2021'
        },
        {
          description: 'transaction 3',
          category: 'neccessities',
          spending: true,
          amount: 10.0,
          date: '10.06.2021'
        }
      ]
    }
  },
  computed: {
    plan() {
      const plan = this.$store.getters['plans/plan']
      return plan
    }
  },
  methods: {
    async getPlan() {
      this.isLoading = true
      try {
        await this.$store.dispatch('plans/getPlan', { id: this.id })
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
    this.getPlan()
  }
}
</script>
