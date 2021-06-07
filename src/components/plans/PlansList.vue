<template>
  <ul v-for="plan in plans" :key="plan.id" id="plans-list">
    <li>{{ plan.title }}</li>
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
};
</script>

<style scoped></style>
