<template>
  <div>
    <base-dialog :show="isLoading" title="Updating..." fixed>
      <base-spinner></base-spinner>
    </base-dialog>
    <transaction-form
      mode="update"
      :descriptionToEdit="transactionToEdit.description"
      :amountToEdit="parseFloat(transactionToEdit.amount)"
      :categoryIdToEdit="transactionToEdit.categoryId"
      @save-data="editTransaction"
    ></transaction-form>
    <p>
      {{ error }}
    </p>
  </div>
</template>

<script>
import TransactionForm from '@/components/transactions/TransactionForm.vue'

export default {
  components: {
    TransactionForm
  },
  emits: ['update'],
  props: {
    transactionToEdit: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      transaction: this.transactionToEdit,
      isLoading: false,
      error: null
    }
  },
  computed: {
    plan() {
      const plan = this.$store.getters['plans/plan']
      return plan
    }
  },
  methods: {
    close() {
      this.$emit('update')
    },
    async editTransaction(formData) {
      this.isLoading = true
      this.error = null

      const editedTransaction = {
        description: formData.description,
        amount: formData.amount,
        categoryId: formData.categoryId
      }
      
      const payload = {
        planId: this.plan.id,
        transactionId: this.transaction.id,
        transaction: editedTransaction
      }
   
      try {
        await this.$store.dispatch('transactions/editTransaction', payload)
        const flashMessage = 'Transaction updated successfully.'
        this.$store.dispatch('setFlashMessage', {
          message: flashMessage
        })

        setTimeout(() => {
          this.$store.dispatch('setFlashMessage', {
            message: ''
          })
        }, 3000)

        //this.$router.push({ name: 'transaction', params: { id: this.transaction.id } })
        this.close()
      } catch (err) {
        this.error = err.response.data.errors
      }

      this.isLoading = false
    }
  }
}
</script>
