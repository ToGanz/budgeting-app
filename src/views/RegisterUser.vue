<template>
  <div>
    <base-dialog :show="isLoading" title="Authenticating..." fixed>
      <base-spinner></base-spinner>
    </base-dialog>
    <user-form mode="register" @save-data="register"></user-form>
    <ul>
      <li v-for="(error, index) in errors" :key="index">
        {{ error }}
      </li>
    </ul>

    <router-link :to="{ name: 'Login' }">
      Already have an account? Login.
    </router-link>
  </div>
</template>

<script>
import UserForm from '@/components/users/UserForm.vue'

export default {
  components: {
    UserForm
  },
  data() {
    return {
      isLoading: false,
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
    async register(formData) {
      this.isLoading = true
      this.errors = null
      
      const user = {
        name: formData.name,
        email: formData.email,
        password: formData.password
      }

      await this.$store
        .dispatch('users/registerUser', user)
        .then(() => {
          this.$router.push({ name: 'Plans' })
        })
        .catch((err) => {
          this.errors = this.beautifyErrors(err.response.data.errors)
        })

      this.isLoading = false
    }
  }
}
</script>
