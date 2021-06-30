<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{ invalid: !title.isValid }">
      <label for="name">Title</label>
      <input
        type="text"
        id="title"
        v-model.trim="title.val"
        @blur="clearValidity('title')"
      />
      <p v-if="!title.isValid">Title must not be empty.</p>
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
