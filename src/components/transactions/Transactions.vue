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
  <transactions-list
    v-else
    :transactions="transactions"
  ></transactions-list>
</template>

<script>
import TransactionsList from '@/components/transactions/TransactionsList.vue'

export default {
  components: {
    TransactionsList
  },
  props: {
    planId: {
      required: true
    }
  },
  data() {
    return {
      isLoading: false,
      error: null
    }
  },
  computed: {
    transactions() {
      const transactions = this.$store.getters['transactions/transactions']
      return transactions
    }
  },
  methods: {
    async getTransactions() {
      this.isLoading = true
      try {
        await this.$store.dispatch('transactions/getTransactions', {
          planId: this.planId
        })
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
    this.getTransactions()
  }
}
</script>
