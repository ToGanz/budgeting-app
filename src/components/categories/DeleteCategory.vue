<template>
  <base-dialog :show="isLoading" title="Deleting..." fixed>
    <base-spinner></base-spinner>
  </base-dialog>

  <button
    class="text-indigo-600 hover:text-indigo-900"
    @click="deleteCategory"
  >
    Delete
  </button>

  <ul>
    <li v-for="(error, index) in errors" :key="index">
      {{ error }}
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      errors: null
    }
  },
  emits: ['delete'],
  props: ['id'],
  methods: {
    async deleteCategory() {
      this.isLoading = true
      this.errors = null

      if (
        confirm(
          'Do you really want to delete this Category? All transactions of this Category will also be deleted.'
        )
      ) {
        try {
          await this.$store.dispatch('categories/deleteCategory', {
            id: this.id
          })

          const flashMessage = 'Category deleted.'
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
      }
      
      if (!this.errors) {
        this.close()
      }
      this.isLoading = false
    },
    close() {
      this.$emit('delete')
    }
  }
}
</script>
