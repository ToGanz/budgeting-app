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
    
    <transactions v-if="categories.length > 0" :planId="plan.id"></transactions>
    <div v-else>
      To add a transaction
      <router-link :to="{ name: 'Categories' }">create a Category first.</router-link>
    </div>
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
    }
  },
  computed: {
    plan() {
      const plan = this.$store.getters['plans/plan']
      return plan
    },
    categories() {
      const categories = this.$store.getters['categories/categories']
      return categories
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
    async getCategories() {
      this.isLoading = true
      try {
        await this.$store.dispatch('categories/getCategories')
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
    this.getCategories()
  }
}
</script>
