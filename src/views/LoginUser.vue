<template>
  <div>
    <base-dialog :show="isLoading" title="Authenticating..." fixed>
      <base-spinner></base-spinner>
    </base-dialog>
    <user-form mode="login" @save-data="login"></user-form>
    <p>{{ error }}</p>
    <router-link :to="{ name: 'Register' }">
      Don't have an account? Register.
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
      error: null
    }
  },
  methods: {
    async login(formData) {
      this.isLoading = true
      this.errors = null

      const user = {
        email: formData.email,
        password: formData.password
      }
      await this.$store
        .dispatch('users/login', user)
        .then(() => {
          this.$router.push({ name: 'Plans' })
        })
        .catch((err) => {
          this.error = err.response.data.errors
        })

      this.isLoading = false
    }
  }
}
</script>
