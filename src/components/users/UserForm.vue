<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{ invalid: !name.isValid }">
      <label for="name">Name</label>
      <input
        type="text"
        id="name"
        v-model.trim="name.val"
        @blur="clearValidity('name')"
      />
      <p v-if="!name.isValid">Name must not be empty.</p>
    </div>
    <div class="form-control" :class="{ invalid: !email.isValid }">
      <label for="email">Email</label>
      <input
        type="email"
        id="email"
        v-model.trim="email.val"
        @blur="clearValidity('email')"
      />
      <p v-if="!email.isValid">Please enter a valid email.</p>
    </div>
    <div class="form-control" :class="{ invalid: !password.isValid }">
      <label for="password">password</label>
      <input
        type="password"
        id="password"
        v-model.trim="password.val"
        @blur="clearValidity('password')"
      />
      <p v-if="!password.isValid">
        Please enter a valid password (must be at least 6 characters long).
      </p>
    </div>

    <p v-if="!formIsValid">
      Please fix the above errors and submit again.
    </p>
    <base-button>{{ submitButtonCaption }}</base-button>
  </form>
</template>

<script>
export default {
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
      if (this.name.val === '') {
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
      } else if (this.mode === 'update' && this.password.val && this.password.val.length < 6) {
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
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
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
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
