<template>
  <form @submit.prevent="submitForm" class="mt-8 space-y-6">
    <div class="rounded-md shadow-sm -space-y-px">
      <div :class="{ invalid: !title.isValid }">
        <label for="title" class="sr-only">Plan Title</label>
        <input
          type="text"
          id="title"
          placeholder="Plan Title"
          class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          v-model.trim="title.val"
          @blur="clearValidity('title')"
        />
        <p v-if="!title.isValid">Title must not be empty.</p>
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
        {{ submitButtonCaption }}
      </button>
    </div>
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
    titleToEdit: {
      type: String,
      required: false,
      default: ''
    }
  },
  data() {
    return {
      title: {
        val: this.titleToEdit,
        isValid: true
      },
      formIsValid: true
    }
  },
  computed: {
    submitButtonCaption() {
      if (this.mode === 'create') {
        return 'Create'
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
      if (this.title.val === '') {
        this.title.isValid = false
        this.formIsValid = false
      }
    },
    submitForm() {
      this.validateForm()

      if (!this.formIsValid) {
        return
      }

      const formData = {
        title: this.title.val
      }

      this.$emit('save-data', formData)
      this.title.val = ''
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
