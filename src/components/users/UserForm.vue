<template>
  <form @submit.prevent="submitForm" class="mt-8 space-y-6">
    <div class="rounded-md shadow-sm -space-y-px">
      <div :class="{ invalid: !email.isValid }">
        <label for="email" class="sr-only">Email</label>
        <input
          type="email"
          id="email"
          autocomplete="email"
          placeholder="Email"
          class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          v-model.trim="email.val"
          @blur="clearValidity('email')"
        />
        <p v-if="!email.isValid">Please enter a valid email.</p>
      </div>
      <div v-if="mode !== 'login'" :class="{ invalid: !name.isValid }">
        <label for="name" class="sr-only">Name</label>
        <input
          type="text"
          id="name"
          autocomplete="name"
          placeholder="Name"
          class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-m-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          v-model.trim="name.val"
          @blur="clearValidity('name')"
        />
        <p v-if="!name.isValid">Name must not be empty.</p>
      </div>
      <div :class="{ invalid: !password.isValid }">
        <label for="password" class="sr-only">Password</label>
        <input
          type="password"
          id="password"
          autocomplete="current-password"
          placeholder="Password"
          class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          v-model.trim="password.val"
          @blur="clearValidity('password')"
        />
        <p v-if="!password.isValid">
          Please enter a valid password (must be at least 6 characters
          long).
        </p>
      </div>
    </div>

    <p v-if="!formIsValid">
      Please fix the above errors and submit again.
    </p>
    <div>
      <button
        type="submit"
        class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <span class="absolute left-0 inset-y-0 flex items-center pl-3">
          <LockClosedIcon
            class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
            aria-hidden="true"
          />
        </span>
        {{ submitButtonCaption }}
      </button>
    </div>
  </form>
</template>

<script>
import { LockClosedIcon } from '@heroicons/vue/solid'

export default {
  components: {
    LockClosedIcon,
  },
  emits: ['save-data'],
  props: {
    mode: {
      type: String,
      required: true
    },
    emailToEdit: {
      type: String,
      required: false,
      default: ''
    },
    nameToEdit: {
      type: String,
      required: false,
      default: ''
    }
  },
  data() {
    return {
      name: {
        val: this.nameToEdit,
        isValid: true
      },
      email: {
        val: this.emailToEdit,
        isValid: true
      },
      password: {
        val: '',
        isValid: true
      },
      formIsValid: true
    }
  },
  computed: {
    submitButtonCaption() {
      if (this.mode === 'register') {
        return 'Register'
      } else if (this.mode === 'login') {
        return 'Login'
      } else if (this.mode === 'update') {
        return 'Update'
      } else {
        return 'Submit'
      }
    }
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true
    },
    validateForm() {
      this.formIsValid = true
      if (this.mode !== 'login' && this.name.val === '') {
        this.name.isValid = false
        this.formIsValid = false
      }
      if (!this.email.val.includes('@')) {
        this.email.isValid = false
        this.formIsValid = false
      }
      if (this.mode === 'register' && this.password.val.length < 6) {
        this.password.isValid = false
        this.formIsValid = false
      } else if (
        this.mode === 'update' &&
        this.password.val &&
        this.password.val.length < 6
      ) {
        this.password.isValid = false
        this.formIsValid = false
      }
    },
    submitForm() {
      this.validateForm()

      if (!this.formIsValid) {
        return
      }

      const formData = {
        name: this.name.val,
        email: this.email.val,
        password: this.password.val
      }

      this.$emit('save-data', formData)
    }
  }
}
</script>

<style scoped>
/* label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
} */

/* input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
} */

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
