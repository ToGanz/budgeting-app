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

      const userId = this.$store.getters['users/id']

      this.$store
        .dispatch('users/deleteUser', { id: userId })
        .then(() => {
          this.$router.push({ name: 'Home' })
        })
        .catch((err) => {
          this.errors = err.response.data.errors
        })
    }
  }
}
</script>
