<template>
  <div>
    <base-dialog :show="isLoading" title="Creating Category.." fixed>
      <base-spinner></base-spinner>
    </base-dialog>
    <category-form mode="create" @save-data="createCategory"></category-form>
    <ul>
      <li v-for="(error, index) in errors" :key="index">
        {{ error }}
      </li>
    </ul>
  </div>
</template>

<script>
import CategoryForm from '@/components/categories/CategoryForm.vue'

export default {
  components: {
    CategoryForm
  },
  data() {
    return {
      isLoading: false,
      errors: null
    }
  },
  methods: {
    async createCategory(formData) {
      this.isLoading = true
      this.errors = null

      const category = {
        name: formData.name
      }

      try {
        await this.$store.dispatch('categories/createCategory', category)

        const flashMessage = 'Category successfully created.'
        this.$store.dispatch('setFlashMessage', {
          message: flashMessage
        })

        setTimeout(() => {
          this.$store.dispatch('setFlashMessage', {
            message: ''
          })
        }, 3000)

      } catch (err) {
        this.errors = err.response.data.errors
      }

      this.isLoading = false
    }
  }
}
</script>
