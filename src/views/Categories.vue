<template>
  <categories-list :categories="categories"></categories-list>
</template>

<script>
import CategoriesList from '@/components/categories/CategoriesList.vue'

export default {
  components: {
    CategoriesList
  },
  data() {
    return {
      categories: [
        {
          id: 1,
          name: 'category 1'
        },
        {
          id: 2,
          name: 'category 2'
        },
        {
          id: 3,
          name: 'category 3'
        }
      ]
    }
  }
}
</script>
