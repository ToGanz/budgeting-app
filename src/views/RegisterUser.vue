<template>
  <div>
    <form @submit.prevent="register">
      <label for="name">
        Name:
      </label>
      <input v-model="name" type="text" name="name" id="name" />

      <label for="email">
        Email:
      </label>
      <input v-model="email" type="email" name="email" id="email" />

      <label for="password">
        Password:
      </label>
      <input v-model="password" type="password" name="password" id="password" />

      <button type="submit" name="button">
        Register
      </button>

      <ul>
        <li v-for="(error, index) in errors" :key="index">
          {{ error }}
        </li>
      </ul>

      <router-link :to="{ name: 'Login' }">
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
      password: '',
      errors: null
    }
  },
  methods: {
    beautifyErrors(errors) {
      const errorList = []
      for (let error in errors) {
        if (error !== 'password_digest') {
          let errorSentence =
            error[0].toUpperCase() +
            error.slice(1) +
            ' ' +
            errors[error][0]

          errorList.push(errorSentence)
        }
      }
      return errorList
    },
    register() {
      const user = {
        name: this.name,
        email: this.email,
        password: this.password
      }

      this.$store
        .dispatch('users/registerUser', user)
        .then(() => {
          this.$router.push({ name: 'Plans' })
        })
        .catch((err) => {
          this.errors = this.beautifyErrors(err.response.data.errors)
        })
    }
  }
}
</script>
