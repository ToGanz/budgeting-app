<template>
  <base-dialog :show="isLoading" title="Deleting..." fixed>
    <base-spinner></base-spinner>
  </base-dialog>

  <button @click="deleteTransaction">Delete Transaction</button>

  <p>
    {{ error }}
  </p>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      error: null
    }
  },
  emits: ['delete'],
  props: ['id'],
  computed: {
    plan() {
      const plan = this.$store.getters['plans/plan']
      return plan
    }
  },
  methods: {
    async deleteTransaction() {
      this.isLoading = true
      this.error = null

      if (confirm('Do you really want to delete this Transaction?')) {
        try {
          await this.$store.dispatch('transactions/deleteTransaction', {
            planId: this.plan.id,
            transactionId: this.id
          })

          const flashMessage = 'Transaction deleted.'
          this.$store.dispatch('setFlashMessage', {
            message: flashMessage
          })

          setTimeout(() => {
            this.$store.dispatch('setFlashMessage', {
              message: ''
            })
          }, 3000)
          this.close()
        } catch (err) {
          this.error = err.response.data.errors
        }
      }
      if (!this.errors) {
        this.close()
      }
      this.isLoading = false
    },
    close() {
      this.$emit('delete')
    }
  }
}
</script>
