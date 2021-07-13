<template>
  <base-dialog
    :show="!!error"
    title="An error occurred!"
    @close="handleError"
  >
    <p>{{ error }}</p>
  </base-dialog>

  <div class="flex place-content-center gap-x-8">
    <h2 class="mt-6 text-center text-xl font-extrabold text-gray-700">
      Transactions
    </h2>
    <button
      @click="toggleShowCreate"
      class="w-12 py-1 px-2 mt-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      <MinusIcon v-if="showCreate" class="h-10 w-8 text-white-700" />
      <PlusIcon v-else class="h-10 w-8 text-white-700" />
    </button>
    <div class="mt-6 text-center text-xl font-extrabold text-gray-700">
      Total: {{ total }}
    </div>
  </div>
  <create-transaction
    v-if="showCreate"
    :planId="planId"
  ></create-transaction>

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
import CreateTransaction from '@/components/transactions/CreateTransaction.vue'
import { PlusIcon, MinusIcon } from '@heroicons/vue/solid'

export default {
  components: {
    TransactionsList,
    CreateTransaction,
    PlusIcon,
    MinusIcon
  },
  props: {
    planId: {
      required: true
    }
  },
  data() {
    return {
      isLoading: false,
      error: null,
      showCreate: false
    }
  },
  computed: {
    transactions() {
      const transactions = this.$store.getters['transactions/transactions']
      return transactions.sort(function(a, b) {
        let keyA = new Date(a.created_at),
          keyB = new Date(b.created_at)
        // Compare the 2 dates
        if (keyA < keyB) return 1
        if (keyA > keyB) return -1
        return 0
      })
    },
    total() {
      //sum = array.reduce((pv, cv) => pv + cv, 0);
      return this.transactions.reduce((sum, transaction) => sum + parseFloat(transaction.amount), 0).toFixed(2)
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
    },
    toggleShowCreate() {
      this.showCreate = !this.showCreate
    }
  },
  created() {
    this.getTransactions()
  }
}
</script>
