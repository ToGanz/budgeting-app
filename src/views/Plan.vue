<template>
  <plan-details :plan="plan"></plan-details>
  <transactions-list :transactions="transactions"></transactions-list>
</template>

<script>
import PlanDetails from '@/components/plans/PlanDetails.vue'
import TransactionsList from '@/components/transactions/TransactionsList.vue'

export default {
  components: {
    PlanDetails,
    TransactionsList
  },
  props: ['id'],
  data() {
    return {
      plan: {
        id: 1,
        title: 'plan 1'
      },
      transactions: [
        {
          description: 'transaction 1',
          category: 'neccessities',
          spending: true,
          amount: 12.00,
          date: '12.06.2021'
        },
        {
          description: 'transaction 2',
          category: 'neccessities',
          spending: true,
          amount: 12.00,
          date: '12.06.2021'
        },
        {
          description: 'transaction 3',
          category: 'neccessities',
          spending: true,
          amount: 12.00,
          date: '12.06.2021'
        }
      ]
    }
  },
  created() {
    // fetch plan by id
  }
}
</script>
