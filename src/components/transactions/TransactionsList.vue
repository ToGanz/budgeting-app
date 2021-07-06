<template>
   <base-dialog :show="showEdit" title="Edit Transaction" @close="toggleEdit">
    <div>
      <edit-transaction :transactionToEdit="activeTransaction" @update="toggleEdit"></edit-transaction>
      <delete-transaction :id="activeTransaction.id" @delete="toggleEdit"></delete-transaction>
    </div>
  </base-dialog>
  <div id="transactions-list">
    <ul
      v-for="transaction in transactions"
      :key="transaction.id"
      class="transaction-list"
      @click="showModal(transaction)"
    >
      <li>{{ transaction.description }}</li>
      <li>{{ transaction.categoryId }}</li>
      <li>{{ transaction.spending }}</li>
      <li>{{ transaction.amount }}</li>
      <li>{{ transaction.created_at }}</li>
    </ul>
  </div>
</template>

<script>
import EditTransaction from '@/components/transactions/EditTransaction.vue'
import DeleteTransaction from '@/components/transactions/DeleteTransaction.vue'

export default {
  components: {
    EditTransaction,
    DeleteTransaction
  },
  props: {
    transactions: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      activeTransaction: null,
      showEdit: false
    }
  },
  methods: {
    toggleEdit() {
      this.showEdit = !this.showEdit
    },
    showModal(transaction) {
      this.activeTransaction = transaction
      this.showEdit = true
    }
  }
}
</script>

<style scoped></style>
