<template>
  <div>
    <base-dialog :show="isLoading" title="Updating..." fixed>
      <base-spinner></base-spinner>
    </base-dialog>
    <category-form
      mode="update"
      :nameToEdit="categoryToEdit.name"
      @save-data="editCategory"
    ></category-form>
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
  emits: ['update'],
  props: {
    categoryToEdit: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      category: this.categoryToEdit,
      isLoading: false,
      errors: null
    }
  },
  methods: {
    close() {
      this.$emit('update')
    },
    async editCategory(formData) {
      this.isLoading = true
      this.errors = null
      const editedCategory = {
        name: formData.name
      }
      const payload = {
        id: this.category.id,
        category: editedCategory
      }
      try {
        await this.$store.dispatch('categories/editCategory', payload)
        const flashMessage = 'Category updated successfully.'
        this.$store.dispatch('setFlashMessage', {
          message: flashMessage
        })

        setTimeout(() => {
          this.$store.dispatch('setFlashMessage', {
            message: ''
          })
        }, 3000)

        //this.$router.push({ name: 'category', params: { id: this.category.id } })
        this.close()
      } catch (err) {
        this.errors = err.response.data.errors
      }

      this.isLoading = false
    }
  }
}
</script>
