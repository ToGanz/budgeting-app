<template>
  <ul id="categories-list">
    <li v-for="category in categories" :key="category.id">
      {{ category.name }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped></style>
