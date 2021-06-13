<template>
  <div>
    <form @submit.prevent="register">
      <label for="name">
        Name:
      </label>
      <input v-model="name" type="text" name="name" value />

      <label for="email">
        Email:
      </label>
      <input v-model="email" type="email" name="email" value />

      <label for="password">
        Password:
      </label>
      <input v-model="password" type="password" name value />

      <button type="submit" name="button">
        Register
      </button>
      <router-link :to="{ name: 'Login'}">
        Already have an account? Login.
      </router-link>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    register() {
      const user = {
        name: this.name,
        email: this.email,
        password: this.password
      }

      this.$store.dispatch('users/registerUser', user).then(() => {
        this.$router.push({ name: 'Plans' })
      })
    }
  }
}
</script>
