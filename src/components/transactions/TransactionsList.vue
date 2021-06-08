<template>
  <ul v-for="transaction in transactions" :key="transaction.id" id="transactions-list">
    <router-link :to="{ name: 'Transaction', params: { id: transaction.id } }">
      <li>{{ transaction.description }}</li>
      <li>{{ transaction.category }}</li>
      <li>{{ transaction.spending }}</li>
      <li>{{ transaction.amount }}</li>
      <li>{{ transaction.date }}</li>
    </router-link>
  </ul>
</template>

<script>
export default {
  props: {
    transactions: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped></style>
