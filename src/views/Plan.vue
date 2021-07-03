<template>
  <base-dialog
    :show="!!error"
    title="An error occurred!"
    @close="handleError"
  >
    <p>{{ error }}</p>
  </base-dialog>
  <base-dialog :show="showEdit" title="Edit Plan" @close="toggleEdit">
    <div>
    <edit-plan :planToEdit="plan" @update="toggleEdit"></edit-plan>
    <delete-plan :id="plan.id"></delete-plan>
    </div>
  </base-dialog>
  <div v-if="isLoading">
    <base-spinner></base-spinner>
  </div>
  <div v-else>
    <plan-details :plan="plan" @click="toggleEdit"></plan-details>
    <transactions :planId="plan.id"></transactions>
  </div>
</template>

<script>
import PlanDetails from '@/components/plans/PlanDetails.vue'
import Transactions from '@/components/transactions/Transactions.vue'
import EditPlan from '@/components/plans/EditPlan.vue'
import DeletePlan from '@/components/plans/DeletePlan.vue'

export default {
  components: {
    PlanDetails,
    Transactions,
    EditPlan,
    DeletePlan
  },
  props: ['id'],
  data() {
    return {
      isLoading: false,
      error: null,
      showEdit: false,
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
    },
    toggleEdit() {
      this.showEdit = !this.showEdit
    }
  },
  created() {
    this.getPlan()
  }
}
</script>
