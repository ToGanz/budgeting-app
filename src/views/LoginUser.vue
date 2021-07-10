<template>
  <div>
    <base-dialog :show="isLoading" title="Authenticating..." fixed>
      <base-spinner></base-spinner>
    </base-dialog>
    <img
      class="mx-auto h-64 w-auto"
      src="@/assets/images/sign_in.svg"
      alt="Workflow"
    />
    <div
      class="flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div class="max-w-md w-full space-y-8">
        <div>
          <h2
            class="mt-6 text-center text-3xl font-extrabold text-gray-900"
          >
            Sign in to your account
          </h2>
          <p class="mt-2 text-center text-sm text-gray-600">
            Don't have an account?
            {{ ' ' }}
            <router-link
              :to="{ name: 'Register' }"
              class="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Register.
            </router-link>
          </p>
        </div>
        <user-form mode="login" @save-data="login"></user-form>
        <p>{{ error }}</p>
      </div>
    </div>
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
      try {
        await this.$store.dispatch('users/login', user)
        const flashMessage = 'You have successfully logged in.'
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
        this.error = err.response.data.errors
      }

      this.isLoading = false
    }
  }
}
</script>
