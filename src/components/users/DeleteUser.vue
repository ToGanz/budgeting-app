<template>
  <button @click="deleteUser">Delete Profile</button>

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
      errors: null
    }
  },
  methods: {
    deleteUser() {
      this.errors = null

      if (confirm('Do you really want to delete your account?')) {
        const userId = this.$store.getters['users/id']

        this.$store
          .dispatch('users/deleteUser', { id: userId })
          .then(() => {
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
          })
          .catch((err) => {
            this.errors = err.response.data.errors
          })
      }
    }
  }
}
</script>
