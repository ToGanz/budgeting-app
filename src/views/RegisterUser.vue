<template>
  <div>
    <base-dialog :show="isLoading" title="Authenticating..." fixed>
      <base-spinner></base-spinner>
    </base-dialog>
    <div
      class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div class="max-w-md w-full space-y-8">
        <div>
          <img
            class="mx-auto h-12 w-auto"
            src="@/assets/images/Money-backGuarantee.svg"
            alt="Workflow"
          />
          <h2
            class="mt-6 text-center text-3xl font-extrabold text-gray-900"
          >
            Register your account
          </h2>
          <p class="mt-2 text-center text-sm text-gray-600">
            Already have an account?
            {{ ' ' }}
            <router-link
              :to="{ name: 'Login' }"
              class="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Login.
            </router-link>
          </p>
        </div>
        <user-form mode="register" @save-data="register"></user-form>
        <ul>
          <li v-for="(error, index) in errors" :key="index">
            {{ error }}
          </li>
        </ul>
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

      try {
        await this.$store.dispatch('users/registerUser', user)

        const flashMessage = 'You are successfully registered.'
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
        this.errors = this.beautifyErrors(err.response.data.errors)
      }

      this.isLoading = false
    }
  }
}
</script>
