<template>
  <ul v-for="plan in plans" :key="plan.id" id="plans-list">
    <router-link :to="{ name: 'Plan', params: { id: plan.id } }">
      <li>{{ plan.title }}</li>
    </router-link>
  </ul>
</template>

<script>
export default {
  props: {
    plans: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped></style>
