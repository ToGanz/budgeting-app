<template>
  <div>
    <base-dialog :show="isLoading" title="Creating Transaction.." fixed>
      <base-spinner></base-spinner>
    </base-dialog>
    <div
      class="flex items-center justify-center bg-gray-50 py-2 px-4 sm:px-6 lg:px-8"
    >
      <div class="max-w-md w-full space-y-8">
        <h4 class="pt-12">Add Transaction</h4>
        <transaction-form
          mode="create"
          @save-data="createTransaction"
        ></transaction-form>
        <ul>
          <li v-for="(error, index) in errors" :key="index">
            {{ error }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import TransactionForm from '@/components/transactions/TransactionForm.vue'

export default {
  components: {
    TransactionForm
  },
  props: {
    planId: {
      required: true
    }
  },
  data() {
    return {
      isLoading: false,
      errors: null
    }
  },
  methods: {
    async createTransaction(formData) {
      this.isLoading = true
      this.errors = null

      const transaction = {
        planId: this.planId,
        description: formData.description,
        amount: formData.amount,
        categoryId: formData.categoryId
      }

      try {
        await this.$store.dispatch(
          'transactions/createTransaction',
          transaction
        )

        const flashMessage = 'Transaction successfully created.'
        this.$store.dispatch('setFlashMessage', {
          message: flashMessage
        })

        setTimeout(() => {
          this.$store.dispatch('setFlashMessage', {
            message: ''
          })
        }, 3000)
      } catch (err) {
        this.errors = err.response.data.errors
      }

      this.isLoading = false
    }
  }
}
</script>
