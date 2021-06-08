<template>
  <ul id="plans-list">
    <li v-for="plan in plans" :key="plan.id">
      <router-link :to="{ name: 'Plan', params: { id: plan.id } }">
        {{ plan.title }}
      </router-link>
    </li>
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
