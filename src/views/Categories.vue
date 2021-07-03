<template>
  <base-dialog
    :show="!!error"
    title="An error occurred!"
    @close="handleError"
  >
    <p>{{ error }}</p>
  </base-dialog>
  <create-category></create-category>
  <div v-if="isLoading">
    <base-spinner></base-spinner>
  </div>
  <categories-list v-else :categories="categories"></categories-list>
</template>

<script>
import CategoriesList from '@/components/categories/CategoriesList.vue'
import CreateCategory from '@/components/categories/CreateCategory.vue'

export default {
  components: {
    CategoriesList,
    CreateCategory
  },
  data() {
    return {
      isLoading: false,
      error: null
    }
  },
  computed: {
    categories() {
      const categories = this.$store.getters['categories/categories']
      return categories
    }
  },
  methods: {
    async getCategories() {
      this.isLoading = true
      try {
        await this.$store.dispatch('categories/getCategories')
      } catch (error) {
        this.error = error.message || 'Something went wrong!'
      }
      this.isLoading = false
    },
    handleError() {
      this.error = null
    }
  },
  created() {
    this.getCategories()
  }
}
</script>
