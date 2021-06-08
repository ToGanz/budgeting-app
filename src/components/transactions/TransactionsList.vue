<template>
  <div id="transactions-list">
    <ul
      v-for="transaction in transactions"
      :key="transaction.id"
      class="transaction-list"
    >
      <li>{{ transaction.description }}</li>
      <li>{{ transaction.category }}</li>
      <li>{{ transaction.spending }}</li>
      <li>{{ transaction.amount }}</li>
      <li>{{ transaction.date }}</li>
    </ul>
  </div>
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
