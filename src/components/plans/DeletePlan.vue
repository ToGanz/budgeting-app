<template>
  <base-dialog :show="isLoading" title="Deleting..." fixed>
    <base-spinner></base-spinner>
  </base-dialog>

  <button @click="deletePlan">Delete Plan</button>

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
  props: ['id'],
  methods: {
    async deletePlan() {
      this.isLoading = true
      this.errors = null

      if (
        confirm(
          'Do you really want to delete this Plan? All transactions of this Plan will also be deleted.'
        )
      ) {
        try {
          await this.$store.dispatch('plans/deletePlan', { id: this.id })

          const flashMessage = 'Plan deleted.'
          this.$store.dispatch('setFlashMessage', {
            message: flashMessage
          })

          setTimeout(() => {
            this.$store.dispatch('setFlashMessage', {
              message: ''
            })
          }, 3000)

          this.$router.push({ name: 'Plans' })
        } catch (err) {
          this.errors = err.response.data.errors
        }
      }

      this.isLoading = false
    }
  }
}
</script>
