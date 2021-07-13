<template>
  <form @submit.prevent="submitForm" class="mt-8 space-y-6">
    <div class="rounded-md shadow-sm -space-y-px">
      <div :class="{ invalid: !description.isValid }">
        <label for="description" class="sr-only">Description</label>
        <input
          type="text"
          id="description"
          placeholder="Description"
          class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          v-model.trim="description.val"
          @blur="clearValidity('description')"
        />
        <p v-if="!description.isValid">Description must not be empty.</p>
      </div>
      <div :class="{ invalid: !amount.isValid }">
        <label for="amount" class="sr-only">Amount</label>
        <input
          type="number"
          step=".01"
          id="amount"
          placeholder="Amount"
          class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          v-model.number="amount.val"
          @blur="clearValidity('amount')"
        />
        <p v-if="!amount.isValid">Amount invalid.</p>
      </div>
      <div :class="{ invalid: !categoryId.isValid }">
        <label for="category" class="sr-only">Category</label>
        <select
          v-model="categoryId.val"
          id="category"
          placeholder="Category"
          class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          @blur="clearValidity('categoryId')"
        >
          <option v-for="cat in categories" :key="cat.id" :value="cat.id">
            {{ cat.name }}
          </option>
        </select>
        <p v-if="categoryId.isValid">Category</p>
        <p v-else>Category invalid.</p>
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
    descriptionToEdit: {
      type: String,
      required: false,
      default: ''
    },
    amountToEdit: {
      type: Number,
      required: false,
      default: 0
    },
    categoryIdToEdit: {
      type: String,
      required: false,
      default: ''
    }
  },
  data() {
    return {
      description: {
        val: this.descriptionToEdit,
        isValid: true
      },
      amount: {
        val: this.amountToEdit,
        isValid: true
      },
      categoryId: {
        val: this.categoryIdToEdit,
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
    },
    categories() {
      const categories = this.$store.getters['categories/categories']
      return categories
    }
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true
    },
    validateForm() {
      this.formIsValid = true
      if (this.description.val === '') {
        this.description.isValid = false
        this.formIsValid = false
      }
      if (this.categoryId.val === '') {
        this.categoryId.isValid = false
        this.formIsValid = false
      }
    },
    submitForm() {
      this.validateForm()

      if (!this.formIsValid) {
        return
      }

      const formData = {
        description: this.description.val,
        amount: this.amount.val,
        categoryId: this.categoryId.val
      }

      this.$emit('save-data', formData)
      this.description.val = ''
      this.amount.val = ''
      this.categoryId.val = ''
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
