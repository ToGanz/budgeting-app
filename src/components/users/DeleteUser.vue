<template>
  <base-dialog :show="isLoading" title="Deleting..." fixed>
    <base-spinner></base-spinner>
  </base-dialog>

  <div class="pb-10">
    <button
      @click="deleteUser"
      class=" px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10"
    >
      Delete account
    </button>

    <ul>
      <li v-for="(error, index) in errors" :key="index">
        {{ error }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      errors: null
    }
  },
  methods: {
    async deleteUser() {
      this.isLoading = true
      this.errors = null

      if (confirm('Do you really want to delete your account?')) {
        const userId = this.$store.getters['users/id']

        try {
          await this.$store.dispatch('users/deleteUser', { id: userId })

          const flashMessage = 'Account deleted.'
          this.$store.dispatch('setFlashMessage', {
            message: flashMessage
          })

          setTimeout(() => {
            this.$store.dispatch('setFlashMessage', {
              message: ''
            })
          }, 3000)

          this.$router.push({ name: 'Home' })
        } catch (err) {
          this.errors = err.response.data.errors
        }
      }
      this.isLoading = false
    }
  }
}
</script>
