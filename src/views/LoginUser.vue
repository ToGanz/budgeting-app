<template>
  <div>
    <form @submit.prevent="login">
      <label for="email">
        Email:
      </label>
      <input v-model="email" type="email" name="email" value />

      <label for="password">
        Password:
      </label>
      <input v-model="password" type="password" name="password" value />

      <button type="submit" name="button">
        Login
      </button>

      <p>{{ error }}</p>
      
      <router-link :to="{ name: 'Register'}">
        Don't have an account? Register.
      </router-link>
    </form>
  </div>

</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    login() {
      const user = {
        email: this.email,
        password: this.password
      }
      this.$store
        .dispatch('users/login', user)
        .then(() => {
          this.$router.push({ name: 'Plans' })
        })
        .catch(err => {
          this.error = err.response.data.errors
        })

    }
  }
}
</script>
